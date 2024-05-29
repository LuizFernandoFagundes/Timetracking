const daily = document.querySelector('#daily');
const weekly = document.querySelector('#weekly');
const monthly = document.querySelector('#monthly');
const teste = document.querySelectorAll('.item');

//variaveis dos campos do card work
const titleWork = document.querySelector('#title-work');
const timeWork = document.querySelector('#time-work');
const informationWork = document.querySelector('#information-work');

//variaveis dos campos do card play
const titlePlay = document.querySelector('#title-play');
const timePlay = document.querySelector('#time-play');
const informationPlay = document.querySelector('#information-play');

//variaveis dos campos do card study
const titleStudy = document.querySelector('#title-study');
const timeStudy = document.querySelector('#time-study');
const informationStudy = document.querySelector('#information-study');


//variaveis dos campos do card exercise
const titleExercise = document.querySelector('#title-exercise');
const timeExercise = document.querySelector('#time-exercise');
const informationExercise = document.querySelector('#information-exercise');


//variaveis dos campos do card social
const titleSocial = document.querySelector('#title-social');
const timeSocial = document.querySelector('#time-social');
const informationSocial = document.querySelector('#information-social');

const atual = document.querySelector('.white');

//variaveis dos campos do card self-care
const titleSelf = document.querySelector('#title-self');
const timeSelf = document.querySelector('#time-self');
const informationSelf = document.querySelector('#information-self');


weekly.addEventListener('click',() => {
    week();
    
   
});

daily.addEventListener('click',() => {
    day();
    
    
});

monthly.addEventListener('click',() => {
    mon();
    
      
});

teste.forEach((item) => {
  
  item.addEventListener('click', () => {
    const atual = document.querySelector('.white');
    if(atual){
      atual.classList.remove('white');
    }
    item.classList.add('white');
      
  });
});



async function main() {
  const response = await fetch('src/js/data.json');
  return await response.json();
  
}

async function week() {
  const dados = await main();
  const resultado = dados;
  titleWork.innerHTML = resultado[0].title;
  timeWork.innerHTML = resultado[0].timeframes.weekly.current + 'hrs';
  informationWork.innerHTML = 'Last Week - ' + resultado[0].timeframes.weekly.previous + 'hrs';


  titlePlay.innerHTML = resultado[1].title;
  timePlay.innerHTML = resultado[1].timeframes.weekly.current + 'hrs';
  informationPlay.innerHTML = 'Last Week - ' + resultado[1].timeframes.weekly.previous + 'hrs';

  titleStudy.innerHTML = resultado[2].title;
  timeStudy.innerHTML = resultado[2].timeframes.weekly.current + 'hrs';
  informationStudy.innerHTML = 'Last Week - ' + resultado[2].timeframes.weekly.previous + 'hrs';

  titleExercise.innerHTML = resultado[3].title;
  timeExercise.innerHTML = resultado[3].timeframes.weekly.current + 'hrs';
  informationExercise.innerHTML = 'Last Week - ' + resultado[3].timeframes.weekly.previous + 'hrs';


  titleSocial.innerHTML = resultado[4].title;
  timeSocial.innerHTML = resultado[4].timeframes.weekly.current + 'hrs';
  informationSocial.innerHTML = 'Last Week - ' + resultado[4].timeframes.weekly.previous + 'hrs';

  titleSelf.innerHTML = resultado[5].title;
  timeSelf.innerHTML = resultado[5].timeframes.weekly.current + 'hrs';
  informationSelf.innerHTML = 'Last Week - ' + resultado[5].timeframes.weekly.previous + 'hrs';

}




async function day() {
  const dados = await main();
  const resultado = dados;
  titleWork.innerHTML = resultado[0].title;
  timeWork.innerHTML = resultado[0].timeframes.daily.current + 'hrs';
  informationWork.innerHTML = 'Last Daily - ' + resultado[0].timeframes.daily.previous + 'hrs';


  titlePlay.innerHTML = resultado[1].title;
  timePlay.innerHTML = resultado[1].timeframes.daily.current + 'hrs';
  informationPlay.innerHTML = 'Last Daily - ' + resultado[1].timeframes.daily.previous + 'hrs';

  titleStudy.innerHTML = resultado[2].title;
  timeStudy.innerHTML = resultado[2].timeframes.daily.current + 'hrs';
  informationStudy.innerHTML = 'Last Daily - ' + resultado[2].timeframes.daily.previous + 'hrs';

  titleExercise.innerHTML = resultado[3].title;
  timeExercise.innerHTML = resultado[3].timeframes.daily.current + 'hrs';
  informationExercise.innerHTML = 'Last Daily - ' + resultado[3].timeframes.daily.previous + 'hrs';


  titleSocial.innerHTML = resultado[4].title;
  timeSocial.innerHTML = resultado[4].timeframes.daily.current + 'hrs';
  informationSocial.innerHTML = 'Last Daily - ' + resultado[4].timeframes.daily.previous + 'hrs';

  titleSelf.innerHTML = resultado[5].title;
  timeSelf.innerHTML = resultado[5].timeframes.daily.current + 'hrs';
  informationSelf.innerHTML = 'Last Daily - ' + resultado[5].timeframes.daily.previous + 'hrs';

}



async function mon() {
  const dados = await main();
  const resultado = dados;
  titleWork.innerHTML = resultado[0].title;
  timeWork.innerHTML = resultado[0].timeframes.monthly.current + 'hrs';
  informationWork.innerHTML = 'Last Daily - ' + resultado[0].timeframes.monthly.previous + 'hrs';


  titlePlay.innerHTML = resultado[1].title;
  timePlay.innerHTML = resultado[1].timeframes.monthly.current + 'hrs';
  informationPlay.innerHTML = 'Last Daily - ' + resultado[1].timeframes.monthly.previous + 'hrs';

  titleStudy.innerHTML = resultado[2].title;
  timeStudy.innerHTML = resultado[2].timeframes.monthly.current + 'hrs';
  informationStudy.innerHTML = 'Last Daily - ' + resultado[2].timeframes.monthly.previous + 'hrs';

  titleExercise.innerHTML = resultado[3].title;
  timeExercise.innerHTML = resultado[3].timeframes.monthly.current + 'hrs';
  informationExercise.innerHTML = 'Last Daily - ' + resultado[3].timeframes.monthly.previous + 'hrs';


  titleSocial.innerHTML = resultado[4].title;
  timeSocial.innerHTML = resultado[4].timeframes.monthly.current + 'hrs';
  informationSocial.innerHTML = 'Last Daily - ' + resultado[4].timeframes.monthly.previous + 'hrs';

  titleSelf.innerHTML = resultado[5].title;
  timeSelf.innerHTML = resultado[5].timeframes.monthly.current + 'hrs';
  informationSelf.innerHTML = 'Last Daily - ' + resultado[5].timeframes.monthly.previous + 'hrs';
}
day();