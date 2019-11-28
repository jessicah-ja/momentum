const clockContainer = document.querySelector('.js-clock'),
      clockTitle = clockContainer.querySelector('h1');


function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${ hours < 10 ? `0${hours}`: hours }:${ 
        minutes < 10 ? `0${minutes}`: minutes }:${ seconds < 10 ? `0${seconds}`: seconds }`;
}

function clockInit(){
    getTime();
    setInterval(getTime, 1000); 
}

clockInit();


//setIntervel()
//첫번쨰 인자로 실행할 함수를 받고 두번쨰 인자로는 그 함수를 실행하고 싶은 시간 간격
