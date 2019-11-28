// 이미지를 추가해주고(번호로 생성 1.jsp)
// 배경화면에 번호생성한 파일을 랜덤으로 보여준다.
// 랜덤숫자를 만들 함수를 만들고, 그 숫자를 넘겨서 이미지를 만들어서 바디에 넣어준다.

const body = document.querySelector('body');

const IMAGE_NUM = 3;

function paintImage(num){
    const image = new Image();
    console.log(image);
    image.src = `images/${num + 1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);

}

function genRandom(){
    const num = Math.floor(Math.random() * IMAGE_NUM);
    return num;
}

function bgInit(){
    console.log('@@@@@@');
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

bgInit();