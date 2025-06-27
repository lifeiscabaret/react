//// 1. 요소 접근(엘리먼트 추출) /////////////////////////////////////////////////
// const title; // id가 title인 엘리먼트를          getElementById로 접근
// const append; // id가 append인 엘리먼트를        querySelector로 접근
// const selector; // id가 selector인 엘리먼트를    querySelector로 접근
// const paragraph; // id가 paragrpah인 엘리먼트를  getElementByClassName로 접근

const title = document.getElementById('title'); // id가 title인 엘리먼트를 getElementById로 접근
const append = document.querySelector('#append'); // id가 append인 엘리먼트를 querySelector로 접근
const firstparagraph = document.querySelector('.paragraph'); // id가 selector인 엘리먼트를 querySelector로 접근 //// 첫번째 단락 접근
const paragraph = document.getElementsByClassName('paragraph'); // class가 paragraph인 엘리먼트들을 getElementsByClassName으로 접근








//// 2. 요소 작업 ////////////////////////////////////////////////////////////////
console.log('title >>', title);
title.innerText = '변경된 제목'
title.style.textAlign = 'center';


console.log('append >>', append);
console.log(append);
append.innerText = 'content';

// append.innerText = '<h3>추가된 제목</h3>';
append.innerHTML = '<h3>추가된 제목</h3><div>content</div> '; ////element를 content가 아니라 태그로 넣을때씀 (java의 property), 덮어쓰기됌.
append.style.textAlign = 'center';



console.log('firstparagraph >>', firstparagraph);
console.log(firstparagraph);
firstparagraph.style.textAlign = 'center';


firstparagraph.style.color = '#f00'; //// 스타일 지정



// console.log('paragraph >>', paragraph);
// for (let i =0; i < paragraph.length; i++){
//     paragraph[i].style.textAlign = 'center';
// }

//[방법 1] 인덱스로 접근
// paragraph[0].style.textAlign = 'center';
// paragraph[1].style.textAlign = 'center';
// paragraph[2].style.textAlign = 'center';




//[방법 2] for of 문 =================================
// for(let para of paragraph) {
//     console.log(para);
//     para.style.textAlign = 'center';
// }

//[방법 3] 함수 정의 ==================================
// 함수 표현식 
const setTextAlign = function (args) {
    args.style.textAlign = 'center';
}

// for (const para of paragraph) {
//     setTextAlign(para);
// }

// [방법 4] 배열로 변환 ==================================
console.log(paragraph);


const arr_paragraph = Array.from(paragraph);
console.log(arr_paragraph);


//// 익명 함수
// arr_paragraph.forEach(function (args) {
//     args.style.textAlign = 'center';
// });

//// 화살표 함수

arr_paragraph.forEach(args => args.style.textAlign = 'center');

