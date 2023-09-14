
//スクロール時のイベントを追加
window.addEventListener('scroll', function(){

  //すべての.movieを取得
  const movie = document.querySelectorAll('.movie');

  //querySelectorAll('.movie')は配列になるので、for構文で取得
  //配列は0から始まるのでi = 0
  //i < movie.lengthで配列の要素よりも数が小さい時　i++(インクリメント)1つずつ増加
  for(let i = 0; i < movie.length; i++){

    //.movieのオフセットの高さを取得
    var targetTop = movie[i].offsetTop;

    //画面のスクロール量 + 300px > .movieのオフセットの高さを取得
    if(window.scrollY + 300 > targetTop){
    
      //書くmovieにクラスshowを追加
      movie[i].classList.add('show');
    }
  }
});