/*
******************************************************
* 1. 단일 element 추출(반환)
* 1-1. document.getElementById('아이디');
* 1-2. document.querySelector('선택자');
*      아이디: '#아이디'
       클래스: '.클래스'
       태그  : '태그'

* 2. 복수 element 추출(반환)
* 2-1. document.getElementByClassName('클래스');
* 2-2. document.getElementByTagName('태그');
* 2-3. document.querySelectorAll('선택자');
       document.querySelectorAll('선택자1, 선택자2');
***********************************************************
*/

// console.log('외부 파일');
////////////////////////////////////////////////////////////////
//// 전역변수 /////////////////////////////////////////////////
//// 1. 단일 element 추출(반환) ////////////////////////////////
const id_txt = document.getElementById('txt');

// const id_greeting = document.querySelector('#greeting'); //// id는 #을 붙여줘야함.
const id_greeting = document.querySelector('div#greeting'); //// id는 #을 붙여줘야함.

//// 2. 복수 element 추출(반환)
const class_c_txt = document.getElementsByClassName('c_txt');
const div = document.getElementsByTagName('div');
const selector = document.querySelectorAll('.c_txt');



/////////////////////////////////////////////////////////////////
//// 1. 단일 element 추출(반환)
// console.log(id_txt);
console.log('id_txt >>', id_txt);
console.log('id_greeting >>', id_greeting);
console.log('id_greeting type>>', typeof (id_greeting));
console.log('id_greeting.innerText >>', id_greeting.innerText);

id_greeting.innerText = '금비은비🩰'

//// 2-1. 복수 element 추출(반환)
console.log('class_c_txt >>', class_c_txt);
console.log('class_c_txt[1] 추출 >>', class_c_txt[1])
// console.log('class_c_txt.greeting >>', class_c_txt.greeting);

console.log('div >> ', div);

console.log('selector >>', selector);
console.log('selector[1] >>', selector[1].innerText);

