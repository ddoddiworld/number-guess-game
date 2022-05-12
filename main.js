let randomNum = Math.floor(Math.random()*100)+1;
console.log("정답은? " + randomNum);
let userInput = document.getElementById("user-input"); //user의 값
let playButton = document.getElementById("play-button") ;//play 버튼값
let resultArea = document.getElementById("result-area"); //결과값
let history = []; //중복검사용 배열
let chanceArea = document.getElementById("chance-area") ;//남은 기회
let chances = 5; //기회값
let num = document.getElementById("num")

playButton.addEventListener("click",play);

function play(){
    let userValue = userInput.value; //사용자 값
    let bool = true;

    //유효성 검사1 :: 범위 밖의 숫자
    if(userValue > 101 || userValue < 1){
        resultArea.innerHTML = "1과 100 사이의 숫자를<br> 입력해 주세요";
        resultArea.style.color = "red";
        resultArea.style.animation = "shake 300ms";
        bool = false;
        return;
    }

    //유효성 검사2 :: 중복 숫자
    if(history.includes(userValue)){
        resultArea.textContent = "이미 입력한 숫자입니다";
        resultArea.style.color = "red";
        resultArea.style.animation = "shake 300ms";
        bool = false;
        return;
        }

    //입력받은 숫자 확인
    if(userValue < randomNum){
        resultArea.textContent = "UP";
        resultArea.style.color = "#996633";
    }else if(userValue > randomNum){
        resultArea.textContent = "DOWN";
        resultArea.style.color = "#996633";
    }else{
        resultArea.textContent = "CORRECT!!!";
        resultArea.style.color = "#ffcc00";
        playButton.disabled = true;
        playButton.style.color ="#ffffff";
        playButton.style.background = "#444444";
    }

    if(bool){
        history.push(userValue); //배열에 숫자 저장
        console.log(history);
        chances --;
        num.textContent = `${chances}`;
    }
}

function reset(){
    userInput.value = "";
    chances = 5;
    bool = true;
    num.textContent = `${chances}`;
    playButton.style.color = "#ffffff";
    playButton.style.background = "#996633";
    playButton.disabled = false;
    resultArea.innerHTML = "숫자를 입력해주세요";
    resultArea.style.color = "#996633";
    history = new Array();
    randomNum = Math.floor(Math.random()*100)+1;
    console.log("정답은? " + randomNum);
}
