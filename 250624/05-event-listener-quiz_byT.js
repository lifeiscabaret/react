//// [전역 변수] ======================================================
const greeting = document.querySelector('#greeting');
const text_initial = greeting.innerText;
const button_toggle = document.querySelector('#toggle');

let isTextEventOn = true;


console.log(greeting);
console.log(button_toggle);


//// [이벤트 핸들러] =====================================================
button_toggle.addEventListener('click', () => {

    if(isTextEventOn){
        greeting.innerText = '오늘도 좋은 하루! 🐾'
        greeting.style.backgroundColor = '#FF0';
        button_toggle.innerText = '텍스트 원래 상태';
        // isTextEventOn = false;
        console.log('isTextEventOn >>', isTextEventOn);
        
    } else {
        // 텍스트 원래 상태 
        greeting.innerText = text_initial;
        greeting.style.backgroundColor = 'initial';
        button_toggle.innerText = '텍스트 변경';
        // isTextEventOn = true;

    }

    isTextEventOn = !isTextEventOn; //리팩토링

});


