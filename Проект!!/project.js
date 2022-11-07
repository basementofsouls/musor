
    
    
    function closeMenu(){
        //получение всех элементов подменю в блоке nav, присваивание display:none
        var subm = document.getElementsByClassName('submenu');
        for (var i=0; i < subm.length; i++){
            subm[i].style.display = 'none';
        }
    }
    document.onmouseover = function (event) {
        var target = event.target;
        console.log(event.target);
        if (target.tagName ==! 'a' && target.className ==! 'submenu'){
            closeMenu();
        }
        else {
            var s = target.getElementsByClassName('submenu');
            s[0].style.visibility = 'visible';
        }
    }
    function game(){
    alert("Добро пожаловать в игру Висилица, она довольно проста, нужно отгадать слово, вводя буквы")
       
        var words = ["Кас", "Алгоритм", "Кола", "Альтруист"];
        var word = words[Math.floor(Math.random() * words.length)].toLowerCase();
        // Создаём массив в котором заменяем буквы в слове на  " _ "
        var crossedOutLettersInAWord = [];
            for (var i = 0; i < word.length; i++) {
                crossedOutLettersInAWord[i] = " _ ";
            }
        // Создаём цикл который создает переменную и присваивает ей значение равное подядковому символу из выбранного слова.
            for (var g = 0; g < word.length; g++){
                eval("var id_"+g+"="+g);
                id_0 = word[0];
                id_1 = word[1];
                id_2 = word[2];
                id_3 = word[3];
                id_4 = word[4];
                id_5 = word[5];
                id_6 = word[6];
                id_7 = word[7];
            }
       
        var longWord = word.length;
        // Создаём переменную в которой " _ " изменяет на угаданный символ.
        var wordGuessedLetters = crossedOutLettersInAWord;

        var numberOfAttempts = 5;
    
        alert("Слово состоит из " + "''" + longWord + "''" + " букв " + crossedOutLettersInAWord.join(" ") + " и у Вас есть " + numberOfAttempts + " попыток!");        // Создаём цикл который выполняется при условии что количество попыток больше нуля, и колличество букв в слове больше " 0 "

            while ((numberOfAttempts !== 0) && (longWord > 0)) {
      
                var guess = prompt("Укажите пожалуйста одну букву из загаданного слова").toLowerCase();
    
                 if (guess === null) {
                    break;
       
                 } else if (guess.length !== 1) {
                    alert("Пожалуйста введите только одну букву!");
                 } else {
                    for (var p = 0; p < word.length; p++) {
                        if ( guess === wordGuessedLetters[p]) {
                            alert("Эта буква уже отгадана")
                            break;
                        } 
                        if ( guess === word[p]) {
                            wordGuessedLetters[p] = guess;
                            longWord--;
                            restOfLetter = longWord;
                        }
                    }
        // Создаём цикл который проверяет введёный символ с каждой из созданых переменных которая содержит одну букву из выбранного слова. 
                    for (var c = 0; c < 1; c++) {
                         if (id_0 === guess || id_1 === guess || id_2 === guess || id_3 === guess || id_4 === guess || id_5 === guess || id_6 === guess || id_7 === guess){
                            alert(`Вы отгадали букву!Ура! ${wordGuessedLetters.join(" ")} количество ваших попыток = ${numberOfAttempts}`)
                            break;
        // Если при введёный символ не соответствует ни одному значению из переменных убираем одну попытку.                   
                        } else {
                            numberOfAttempts--;
                            alert("Увы такой буквы в слове " + wordGuessedLetters.join(" ") + " нет, колличество ваших попыток = " + numberOfAttempts)
                            break;
                        }
                    }
                }               
            }
  
        if (longWord == 0){
            alert("Вы отгадали все " + "''" + word.length + "''" + " букв в слове " + wordGuessedLetters.join(" ") + " и у Вас в запасе осталось ещё " + numberOfAttempts + " попыток!");
            } 

            else {alert("Вы повесились. У вас закончились попытки и слово не отгадано, попробуйте заново")}
        }
        window.onload = ()=>{
        
        let button = document.getElementById('game'),
        pods = document.getElementsByClassName('pods');
        button.onclick = () =>{
            game();
            pods.style.visibility = 'hidden';
        }
        let but = document.getElementById('way');
        but.onclick = () =>{
            window.scrollBy({
                top: window.innerHeight,
                left: 0,
                behavior: 'smooth'
              });
        }
        let back = document.getElementById('back');
        back.onclick = () =>{
            window.scrollBy({
                top: -window.innerHeight,
                left: 0,
                behavior: 'smooth'
              });
        }
      
    }


