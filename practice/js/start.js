/* index.html 주요 3개의 선택자 요소 가져오기 */
const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");

const endPoint = 12;
const select = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


function calResult(){
  console.log(select);
  /* 최대값이 담긴 인덱스 반환  */
  let result = select.indexOf(Math.max(...select));
  return result;
}
// <!-- 03.result page -->
function setResult(){
  // point = 최대값이 담긴 인덱스
  let point = calResult();
  console.log(point);
  const resultName = document.querySelector('.resultname');
  //`infoList`의 해당 인덱스 번호의 name
  resultName.innerHTML = infoList[point].name;

  let resultImg = document.createElement('img');
  const imgDiv = document.querySelector('#resultImg');
  let imgURL = 'img/image-' + point + '.png';
  resultImg.src = imgURL;
  resultImg.alt = point;
  resultImg.classList.add('img-fluid');
  imgDiv.appendChild(resultImg);

  const resultDesc = document.querySelector('.resultDesc');
  resultDesc.innerHTML = infoList[point].desc;
}

function goResult(){
  //애니메이션이 얼마동안 할지 정해줌
  qna.style.WebkitAnimation = "fadeOut 1s";
  qna.style.animation = "fadeOut 1s";
  setTimeout(() => {
    //1초의 절반 동안 result 페이드인
    result.style.WebkitAnimation = "fadeIn 1s";
    result.style.animation = "fadeIn 1s";
    setTimeout(() => {
      //1초의 절반동안 qna가 사라지고 result가 나타남
      qna.style.display = "none";
      result.style.display = "block"
    }, 450)})
    setResult();
}

// <!-- 02. QnA page -->
function addAnswer(answerText, qIdx, idx){
  let a = document.querySelector('.answerBox');
  let answer = document.createElement('button');
  answer.classList.add('answerList');
  answer.classList.add('my-3');
  answer.classList.add('py-3');
  answer.classList.add('mx-auto');
  answer.classList.add('fadeIn');
  //answerBox내부에 답변 버튼을 넣어줌
  a.appendChild(answer);

  // 질문마다 달라지는 답변 버튼의 내용을 동적으로 담는 것
  answer.innerHTML = answerText;

  //답변 클릭시 
  answer.addEventListener("click", ()=>{
    /* 답변 선택 시 버튼들이 서서히 사라지게 하기 */
    // 모든 답변 버튼을 담아준다.
    let children = document.querySelectorAll('.answerList');
    // 반복문으로 답변을 돌면서 
    for(let i = 0; i < children.length; i++){
      //답변 버튼 페이드아웃
      children[i].style.WebkitAnimation = "fadeOut 0.5s";
      children[i].style.animation = "fadeOut 0.5s";
    }

    setTimeout(() => {
      // 선택한 답변버튼의 type에 담긴 배열을 담음
      let target = qnaList[qIdx].a[idx].type;
      console.log(qnaList[qIdx].a[idx]);
      //type프로퍼티의 값 배열 반복 돌기
      for(let i = 0; i < target.length; i++){
        //배열리터럴로 해당 요소 값이 select의 인덱스 번호로 들어가서 해당 인덱스의 요소에 +1
        select[target[i]] += 1;
        console.log(target[i]);
      }
      console.log(select);

      for(let i = 0; i < children.length; i++){
        children[i].style.display = 'none';
      }

      goNext(++qIdx);
    },450)
  }, false);
}

function goNext(qIdx){
  if(qIdx === endPoint){
    goResult();
    return;
  }

  let q = document.querySelector('.qBox');
  //`q`의 value 처리
  //`qnaList`의 qIdx번째 인덱스의 `q`가 들어옴
  q.innerHTML = qnaList[qIdx].q;

  //`qnaList`객체의 qIdx번째 인덱스의 `a`키의 값인 배열의 길이까지 인덱스 순서대로 반복
  for(let i in qnaList[qIdx].a){
    //addAnswer 인수 : 질문의 대답들,질문 번호,답변 번호
    addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
    console.log(qnaList[qIdx].a[i].answer, qIdx, i);
  }

  let status = document.querySelector('.statusBar');
  status.style.width = (100/endPoint) * (qIdx+1) + '%';
}

function begin(){
  main.style.WebkitAnimation = "fadeOut 1s";
  main.style.animation = "fadeOut 1s";
  setTimeout(() => {
     //1초의 절반동안 qna 페이드인하면서
    qna.style.WebkitAnimation = "fadeIn 1s";
    qna.style.animation = "fadeIn 1s";
    setTimeout(() => {
      //1초의 절반동안 main이 사라지고 qna가 나타남
      main.style.display = "none";
      qna.style.display = "block"
    }, 450)
    let qIdx = 0;
    goNext(qIdx);
  }, 450);
}


