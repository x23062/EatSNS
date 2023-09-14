
  //タスクを追加
  function addTask(){
    //要素取得
    let genreId = document.getElementById('genreId');

    let genre = genreId.value;
    
    let todo = document.getElementById(genre);
    let textBox = document.getElementById('textBox');

    //要素の作成
    let new_element = document.createElement('li');
    let new_buttonElement = document.createElement('input');

    //要素にいろいろ追加
    new_element.textContent = textBox.value;
    new_buttonElement.type = "button";
    new_buttonElement.value = "削除";

    //子を追加
    new_element.appendChild(new_buttonElement);
    todo.appendChild(new_element);

    new_buttonElement.addEventListener('click',function(e){
      new_element.remove();
    })
  }

 //ジャンルを追加
  function addGenre(){
    //要素取得
    let Genre = document.getElementById('GenreBox');
    let genreTextBox = document.getElementById('genreTextBox')
    let genreId = document.getElementById('genreId')

    //要素の作成
    let new_GenreBox = document.createElement('div');
    let new_label = document.createElement('label');
    let new_ul = document.createElement('ul');
    let new_option = document.createElement('option');

    //要素にいろいろ追加
    new_label.textContent = genreTextBox.value;
    new_ul.id = genreTextBox.value;
    new_option.value = genreTextBox.value;
    new_option.textContent = genreTextBox.value;


    genreId.appendChild(new_option);
    new_GenreBox.appendChild(new_label);
    new_GenreBox.appendChild(new_ul);
    Genre.appendChild(new_GenreBox)

  }
