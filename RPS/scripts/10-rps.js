let score= JSON.parse(localStorage.getItem('score')) || 
  {
    wins:0,
    losses:0,
    ties:0
  };

  updateScore();  

/*  
if(!score){
  score = {
    wins:0,
    losses:0,
    ties:0
  };
}
*/

/*else{
  score=JSON.parse(score);
}*/

let isAutoPlaying=false;
let intervalId;

function autoPlay(){
  if(!isAutoPlaying){
    intervalId=setInterval(function(){
      const playerMove= pickComputeMove();
      playGame(playerMove);
    },1000);
    isAutoPlaying=true;
  }
  
  else{
    clearInterval(intervalId);
    isAutoPlaying=false;
  }
}

document.querySelector('.js-rock-button')
  .addEventListener('click',()=>{
    playGame('rock');
  });

document.querySelector('.js-paper-button')
  .addEventListener('click',()=>{
    playGame('paper');
  });

document.querySelector('.js-scissors-button')
  .addEventListener('click',()=>{
    playGame('scissors');
  });

document.querySelector('.js-autoplay-button')
  .addEventListener('click',()=>{
    autoPlay();
  });

/*document.querySelector('.js-reset-button')
  .addEventListener('click',()=>{
    score.wins=0;
    score.losses=0;
    score.ties=0;
    localStorage.removeItem('score');
    updateScore();
  });*/

  document.body.addEventListener('keydown',(event)=>{
    if(event.key==='r'){
      playGame('rock');
    }
    else if(event.key==='p'){
      playGame('paper');
    }
    else if(event.key==='s'){
      playGame('scissors');
    }
    else if(event.key==='a'){
      autoPlay();
    }
  })

function playGame(playerMove){
  const computerMove = pickComputeMove();

  let result='';
  if(playerMove==='scissors'){
    if(computerMove==='rock'){
      result='lose'
    }

    else if(computerMove==='paper'){
      result='win';
    }

    else if(computerMove==='scissors'){
      result='tie';
    }
  }
  else if(playerMove==='paper'){
    if(computerMove==='rock'){
    result='win';
    }

    else if(computerMove==='paper'){
    result='tie';
    }

    else if(computerMove==='scissors'){
    result='lose';
    }
  }
  else if(playerMove==='rock'){
    if(computerMove==='rock'){
      result='tie'
    }

    else if(computerMove==='paper'){
      result='lose';
    }

    else if(computerMove==='scissors'){
      result='win';
    }
  }
  if(result==='win'){
    score.wins++;
  }
  else if(result==='lose'){
    score.losses++;
  }
  else if(result==='tie'){
    score.ties++;
  }
  
  localStorage.setItem('score',JSON.stringify(score));

  updateScore();

  document.querySelector('.js-result').
    innerHTML = result;

  document.querySelector('.js-moves').
    innerHTML= ` You
<img src="images/${playerMove}-emoji.png" class="move-icon">
<img src="images/${computerMove}-emoji.png" class="move-icon">
Computer`;
}

function updateScore(){
  document.querySelector('.js-score')
    .innerHTML=`Wins: ${score.wins}, Losses: ${score.losses}, 
      Ties: ${score.ties}`;  
}

function pickComputeMove(){
  const randomNumber= Math.random();

  let computerMove=' ';
  
  if(randomNumber>=0 && randomNumber<1/3){
    computerMove='rock';
  }
  else if(randomNumber>=1/3 && randomNumber<2/3){
    computerMove='paper';
  }
  else if(randomNumber>=2/3 && randomNumber<1){
    computerMove='scissors';
  }
  
  return computerMove;
}