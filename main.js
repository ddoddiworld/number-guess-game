//랜덤번호 지정
//유저가 번호를 입력 그리고 go버튼 누름
//맞추면 맞췄습니다.
//랜덤번호 < 유저번호 down
//랜덤번호 > 유저번호 up
//리셋 버튼 누르면 게임이 리셋
//5번의 기회를 다 쓰면 게임이 끝난다(버튼 disable)
//유저가 1~100 범위 밖의 숫자를 입력하면 알려준다. 기회를 깎지 않음
//이미 입력한 숫자 또 입력하면 알려준다. 기회를 깎지 않음

let computerNum = 0
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chances = 5;
let gameOver = false;
let chanceArea = document.getElementById("chance-area")
let history = [];

playButton.addEventListener("click",play)
resetButton.addEventListener("click",reset)
userInput.addEventListener("focus",function(){userInput.value=""})

function pickRandomNum(){
    computerNum = Math.floor(Math.random()*100)+1;
    console.log("정답: " + computerNum);
}

function play(){
    let userValue = userInput.value;

    //유효성 검사 1
    if(userValue <1 || userValue >100){
        resultArea.textContent = "1과 100사이의 숫자를 입력해 주세요."
        return;
    }
    
    //유효성 검사 2
    if(history.includes(userValue)){
        resultArea.textContent = "이미 입력한 숫자입니다. 다른 숫자를 입력해주세요."
        return;
    }

    chances --;
    chanceArea.textContent = `남은 기회: ${chances}회`
    console.log(chances);

    if(userValue < computerNum){
        resultArea.textContent = "UP!"
    }else if(userValue > computerNum){
        resultArea.textContent = "DOWN!"
    }else{
        resultArea.textContent = "CORRECT!"
        gameOver = true;
    }

    history.push(userValue)

    if(chances < 1){
        gameOver = true
    }

    if(gameOver == true){
        playButton.disabled = true;
    }
}

function reset(){
    //user input창 정리
    userInput.value = "";
    //새로운 번호 생성
    pickRandomNum();
    resultArea.textContent = "숫자를 입력해주세요";
    chances = 5;
    chanceArea.textContent = `남은 기회: ${chances}회`
    playButton.disabled = false;
    history = new Array();
}

pickRandomNum()