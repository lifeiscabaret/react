//// [전역 변수] ======================================================
const greeting = document.querySelector('#greeting');
const textInitial = greeting.innerText;
const button_textChange = document.querySelector('button.textChange');
const buttonTextInitial = button_textChange.innerText;

//// [이벤트 핸들러] =====================================================
const toggleHandler = () => {
    if (greeting.innerText === textInitial) {
        greeting.innerText = '얼른 가서 지봉이 보고싶다.';
        greeting.style.backgroundColor = '#f66';
        button_textChange.innerText = '텍스트 원래대로';
    } else {
        greeting.innerText = textInitial;
        greeting.style.backgroundColor = 'initial';
        button_textChange.innerText = buttonTextInitial;
    }
};


//// [이벤트 리스너] =====================================================
button_textChange.addEventListener('click', toggleHandler);