
console.log('** 외부 파일 **');


const element = document.getElementById('greeting');
console.log(element);

const greetingInitialText = element.innerText;
console.log('greetingInitial >>', greetingInitialText);

// [함수 선언식] ==========================================
function textChange() {
    console.log('textChange()실행');

    // const element = document.getElementById('greeting');
    element.innerText = '오늘도 화이팅!';
    element.style.background = '#ff0';
}

function textBefore() {
    console.log('textBefore()실행');

    // const element = document.getElementById('greeting');
    element.innerText = greetingInitialText;
    element.style.background = 'initial';
}



console.log(' ** 실행 종료 **');
