//// [전역 변수] ======================================================
const greeting = document.querySelector('#greeting');
const textInitial = greeting.innerText;

const emoji = document.querySelector('button.emoji');
const remove = document.querySelector('button.remove');
const textChange = document.querySelector('button.textChange');
const button_textInitial = document.querySelector('button.textInitial');


//// [이벤트 핸들러] =====================================================
//// 화살표 함수

const emojiHandler = () => {
    console.log('emojiHandler()실행');
    console.log('😀');
}
const removeEmojiHandler = () => {
    console.log('이모지 출력 이벤트 해제');
    emoji.removeEventListener('click', emojiHandler);
}
//// [이벤트 리스너]
emoji.addEventListener('click', emojiHandler);
remove.addEventListener('click', removeEmojiHandler);

textChange.addEventListener('click', () => {
    greeting.innerText = '오늘도 좋은 하루!';
    greeting.style.backgroundColor = '#0f0';
});

button_textInitial.addEventListener('click', () => {
    greeting.innerText = textInitial;
    greeting.style.backgroundColor = 'initial';
});






