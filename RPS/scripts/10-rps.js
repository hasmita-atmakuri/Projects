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