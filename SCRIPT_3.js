let move = 0;
let answer;
const entry_00_div = document.getElementById("entry_00");
const entry_01_div = document.getElementById("entry_01");
const entry_02_div = document.getElementById("entry_02");
const entry_10_div = document.getElementById("entry_10");
const entry_11_div = document.getElementById("entry_11");
const entry_12_div = document.getElementById("entry_12");
const entry_20_div = document.getElementById("entry_20");
const entry_21_div = document.getElementById("entry_21");
const entry_22_div = document.getElementById("entry_22");
const move_indicator_p = document.getElementById("move_indicator");
const result_p = document.getElementById("result");
const exit_span = document.getElementById("exit");
const replay_span = document.getElementById("replay");

function win(winner){
 result_p.innerHTML = winner + " WINS!";
 move_indicator_p.innerHTML = "Game Over";
 entry_00_div.removeEventListener('click',odd_or_even_click,{once : true});
 entry_01_div.removeEventListener('click',odd_or_even_click,{once : true});
 entry_02_div.removeEventListener('click',odd_or_even_click,{once : true});
 entry_10_div.removeEventListener('click',odd_or_even_click,{once : true});
 entry_11_div.removeEventListener('click',odd_or_even_click,{once : true});
 entry_12_div.removeEventListener('click',odd_or_even_click,{once : true});
 entry_20_div.removeEventListener('click',odd_or_even_click,{once : true});
 entry_21_div.removeEventListener('click',odd_or_even_click,{once : true});
 entry_22_div.removeEventListener('click',odd_or_even_click,{once : true});
}

function draw(){
  var string = entry_00_div.innerText+entry_01_div.innerText+entry_02_div.innerText+entry_10_div.innerText+entry_11_div.innerText+entry_12_div.innerText+entry_20_div.innerText+entry_21_div.innerText+entry_22_div.innerText;
  if(string.length == 9){
    result_p.innerHTML = "It is a draw!";
    move_indicator_p.innerHTML = "Game Over";
  }
}


function rowFilled(letter){
  answer = letter+letter+letter;
  if(entry_00_div.innerText+entry_01_div.innerText+entry_02_div.innerText == answer){
    win(letter);
  }
  else if(entry_10_div.innerText+entry_11_div.innerText+entry_12_div.innerText == answer){
    win(letter);
  }
  else if(entry_20_div.innerText+entry_21_div.innerText+entry_22_div.innerText == answer){
    win(letter);
  }
}

function columnFilled(letter){
  answer = letter+letter+letter;
  if(entry_00_div.innerText+entry_10_div.innerText+entry_20_div.innerText == answer){
    win(letter);
      }
  else if(entry_01_div.innerText+entry_11_div.innerText+entry_21_div.innerText == answer){
    win(letter);
      }
  else if(entry_02_div.innerText+entry_12_div.innerText+entry_22_div.innerText == answer){
    win(letter);
      }
}

function diagonalFilled(letter){
    answer = letter+letter+letter;
    if(entry_00_div.innerText+entry_11_div.innerText+entry_22_div.innerText == answer){
    win(letter);
   }
    else if(entry_02_div.innerText+entry_11_div.innerText+entry_20_div.innerText == answer){
    win(letter);
   }
}

function odd_or_even_click(event){
  if(move % 2 == 0){
    document.getElementById(event.target.id).innerHTML = '<font size="20" color="white">X</font>';
    move++;
    move_indicator_p.innerHTML = "User 2 make your move";
    draw();
    rowFilled("x");
    columnFilled("X");
    diagonalFilled("X");

  }
  else{
    document.getElementById(event.target.id).innerHTML = '<font size="20" color="white">O</font>';
    move++;
    move_indicator_p.innerHTML = "User 1 make your move";
    draw();
    rowFilled("O");
    columnFilled("O");
    diagonalFilled("O");

  }
}

function main(){
    entry_00_div.addEventListener('click',odd_or_even_click,{once : true});
    entry_01_div.addEventListener('click',odd_or_even_click,{once : true});
    entry_02_div.addEventListener('click',odd_or_even_click,{once : true});
    entry_10_div.addEventListener('click',odd_or_even_click,{once : true});
    entry_11_div.addEventListener('click',odd_or_even_click,{once : true});
    entry_12_div.addEventListener('click',odd_or_even_click,{once : true});
    entry_20_div.addEventListener('click',odd_or_even_click,{once : true});
    entry_21_div.addEventListener('click',odd_or_even_click,{once : true});
    entry_22_div.addEventListener('click',odd_or_even_click,{once : true});
    exit_span.addEventListener('click',function(){close();});
    replay_span.addEventListener('click',function(){location.reload();});

}

main();






