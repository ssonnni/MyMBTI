/* index.html 주요 3개의 선택자 요소 가져오기 */
const main = document.querySelector('#main');
const qna = document.querySelector('#qna');
const result = document.querySelector('#result');

const endPoint = 12;
const select = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function calResult() {
  console.log(select);
  // 선택한 배열을 펼쳐 인덱스반환하여 최대값이 반환됨,
  let result = select.indexOf(Math.max(...select));
  console.log(result);
  return result;
}

function setResult() {
  let point = calResult();
  console.log(point);
  const resultName = document.querySelector('.resultname');
  resultName.innerHTML = infoList[point].name;

  let resultImg = document.createElement('img');
  let imgURL = 'img/image-' + point + '.png';
  resultImg.src = imgURL;
  resultImg.alt = point;
  resultImg.classList.add('img-fluid');

  const imgDiv = document.querySelector('#resultImg');
  imgDiv.appendChild(resultImg);

  const resultDesc = document.querySelector('.resultDesc');
  resultDesc.innerHTML = infoList[point].desc;
}


function goResult() {
  // 애니메이션이 얼마동안 할지 정해줌
  qna.style.webkitAnimation = 'fadeOut 1s';
  qna.style.animation = 'fadeOut 1s';
  setTimeout(function () {
    //1초의 절반동안 qna 페이드인하면서
    result.style.webkitAnimation = 'fadeIn 1s';
    result.style.animation = 'fadeIn 1s';

    setTimeout(function () {
      //1초의 절반동안 main이 사라지고 qna가 나타남
      qna.style.display = 'none';
      result.style.display = 'block';
    }, 500);
  },500);
  setResult();
}

function addAnswer(answerText, qIdx, idx) {
  let a = document.querySelector('.answerBox');
  let answer = document.createElement('button');
  answer.classList.add('answerList');
  answer.classList.add('mx-auto');
  answer.classList.add('my-3');
  answer.classList.add('py-3');
  answer.classList.add('fadeIn');
  //answerbox 내부에 버튼을 넣어줌
  a.appendChild(answer);
  answer.innerHTML = answerText;

  answer.addEventListener('click', function () {
    let children = document.querySelectorAll('.answerList');
    for (let i = 0; i < children.length; i++) {
      children[i].disabled = true;
      children[i].style.webkitAnimation = 'fadeOut 0.5s';
      children[i].style.animation = 'fadeOut 0.5s';
    }
    setTimeout(function () {
      let target = qnaList[qIdx].a[idx].type;
      console.log(target);
      for (let i = 0; i < target.length; i++) {
        console.log(i);
        console.log(target[i]);
        select[target[i]] += 1;
      }
      console.log(select);

      for (let i = 0; i < children.length; i++) {
        children[i].style.display = 'none';
      }
      goNext(++qIdx);
    }, 450);
  });
}

function goNext(qIdx) {
  if (qIdx === endPoint) {
    goResult();
    return;
  }

  let q = document.querySelector('.qBox');
  
  //`q`의 value 처리
  //`qnaList`의 qIdx번째 인덱스의 `q`가 들어옴
  q.innerHTML = qnaList[qIdx].q;
  
  
  // `a` 의 value 처리
  //`qnaList`객체의 qIdx번째 인덱스의 `a`의 배열의 i번 반복
  for (let i in qnaList[qIdx].a) {
    //addAnswer()에 `qnaList`의 qIdx번째 인덱스번째의 `a`의 i번째 인덱스의 answer와 qIdx를 인자로 전달
    addAnswer(qnaList[qIdx].a[i].answer, qIdx);
  }
}

/* 1.main */
function begin() {
  main.style.webkitAnimation = 'fadeOut 1s';
  main.style.animation = 'fadeOut 1s';
  setTimeout(function () {
    //1초의 절반동안 qna 페이드인하면서
    qna.style.webkitAnimation = 'fadeIn 1s';
    qna.style.animation = 'fadeIn 1s';

    setTimeout(function () {
      //1초의 절반동안 main이 사라지고 qna가 나타남
      main.style.display = 'none';
      qna.style.display = 'block';
    }, 500);
    let qIdx = 0;
    goNext(qIdx);
  }, 500)
}