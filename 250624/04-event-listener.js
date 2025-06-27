//// [전역 변수] ======================================================
const greeting = document.querySelector('#greeting');
const textInitial = greeting.innerText;

const emoji = document.querySelector('button.emoji');
const remove = document.querySelector('button.remove');
const textChange = document.querySelector('button.textChange');
const button_textInitial = document.querySelector('button.textInitial');
/*
*[이벤트 리스너 등록] ***********************************************
* 이벤트가 발생했을 때, 그 처리를 담당하는 함수S
* 이벤트 핸들러(event handler): 이벤트 감지 후, 실행하는 함수  
*
* <문법>
* 엘리먼트.addEventListener('이벤트', 이벤트핸들러함수);
***********************************************************************
*/

emoji.addEventListener('click', emojiHandler);
remove.addEventListener('click', removeEmojiHandler);

textChange.addEventListener('click', function () {
    greeting.innerText = '오늘도 좋은 하루!';
    greeting.style.backgroundColor = '#0f0';

});
button_textInitial.addEventListener('click', function () {
    greeting.innerText = textInitial;
    greeting.style.backgroundColor = 'initial';
});

//// [이벤트 핸들러] =====================================================
function emojiHandler() {
    console.log('emojiHandler() 실행');
    console.log('😺');
}

function removeEmojiHandler() {
    console.log('이모지 출력 이벤트 해제');
    emoji.removeEventListener('click', emojiHandler);

}

// const element = document.getElementById('greeting');

// function textChange(){
//     console.log('textChange()실행');

//     element.innerText = '오늘 많이 지치지만, 힘을 내자 아자아자'
//     element.style.background = '#f0f'
// }

// function textChangemore(){
//     console.log('textChange()실행');

//     element.innerText = '화이또'
//     element.style.background = '#f47'
// }



