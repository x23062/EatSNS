const hashTagName = '1784146199779532';
const instaBusinessId = '1122113486292026406';
const accessToken = 'EAAJ3mxwna00BOzbM7ZBxsumUHxF61yKZC7KuZAWZBNaKb2GpbzTkfFkcp53JZB2GBDbkYWwyCGvCH8fu0Ole84t65srOz9Focehpr3Kd9JEGnUbuLT8Q1dS9G3zJvHGeaKsfqWhgQ2dLf6aLdHQ1TWv6WP1adg17hHHJaUtpTXeL3nrQpCBTsPVRiWKgN4HpwT7JgEhmDZCZCdVIEFZBTKae9Gq9UGSM5pkXIOwC';


// InstagramAPIでハッシュタグIDを取得する
function getIgHashId() {
  try {
const url = `https://graph.facebook.com/v17.0/ig_hashtag_search?user_id=${instaBusinessId}&q=${hashTagName}&access_token=${accessToken}`;
 const response = instagramApi(url, 'GET', '', accessToken);

 const data = JSON.parse(response.getContentText());
 const hashTagId = data.data[0].id;
 
 return hashTagId;
 } catch (error) {
 console.error('Instagram APIのリクエスト中にエラーが発生しました:', error);
 return null;
 }
}


// APIを叩く関数
function instagramApi(url, method, payload, accessToken) {
 try {
 const headers = {
  'Authorization': 'Bearer ' + accessToken
  };
 const options = {
  'method': method,
  'headers': headers,
  'payload': payload
 };

 const response = UrlFetchApp.fetch(url, options);
 return response;
 } catch (error) {
 console.error('Instagram APIのリクエスト中にエラーが発生しました:', error);
 return null;
 }
}

//htmlに書いてあったやつ
window.fbAsyncInit = function() {
  FB.init({
    appId      : '1060576928275758',
    xfbml      : true,
    version    : 'v17.0'
  });
  FB.AppEvents.logPageView();
};

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "https://connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));


