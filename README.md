# MyMBTI
### https://velog.io/@ssonnni/myMBTI-테스트-만들어보기


# 01. HTML
### 각 3개의 섹션 레이아웃하기
총 3개의 섹션으로 나누어 **한 페이지**로 레이아웃하여
1️⃣ 이 보일 때 `display:block` 나머지 2️⃣,3️⃣은 `display:none`으로 처리할 것이다.
**=> SPA(Single Page Application) **
- 1️⃣ 사용자가 처음 들어왔을 때 보여줄 **Main page** `id="main"`
- 2️⃣ 스타트 버튼을 눌렀을 시 보여줄 **QnA page** `id="qna"`
- 3️⃣ 질문 응답의 결과로 보여줄 **Result page** `id="result"` 


### main.css / qna.css / result.css 
 1️⃣,2️⃣,3️⃣ 의 각 css 파일을 만들고 index.html에 링크한다.
 
 ### animation.css
 정교하고 직관적인 애니메이션 기능을 보여주기 위한 css 파일을 별도로 만들어 링크한다.
 - 1️⃣에서 2️⃣로 넘어갈 때 1️⃣은 서서히 사라지고 2️⃣는 서서히 나타나는 애니메이션을 만든다. 
 - `@keyframes` 이용하여 CSS 애니메이션의 **중간 절차를 제어**한다. [자세한설명](https://developer.mozilla.org/ko/docs/Web/CSS/@keyframes)
 - **투명도**를 제어하는 키프레임 애니메이션 `fadeIn` `fadeOut`을 정의한뒤 html DOM객체의 style.animation에 적용한다.

# 03.Javascript
### 3-1 data.js
#### qnaList : 질문과 응답
- `qnaList` : **12개**의 `{qna}` 객체가 담긴 Q&A 리스트 **배열**
    - `q` : 질문,
    - `a` : **3개**의 `{answer,type}` 객체가 담긴 answer 리스트 **배열**
    	- `answer` : 답변,
        `type` : 해당 답변에 가까운 **4가지 타입**이 담긴 **배열** 

#### infoList : 결과와 설명
- `infoList` : **12개**의 `{name,desc}` 객체가 담긴 결과리스트 **배열**
    - `name` : 결과,
    - `desc` : 설명

### 3-2 start.js
#### 메인페이지에서 질문페이지로 넘어가기
#### 질문페이지의 첫번째 질문과 응답 나오게하기
#### 3가지 응답 선택지 반복문과 다음 질문으로 넘어가기
#### 마지막 질문에서 응답결과로 넘어가기
#### 최종결과를 보여주기 위한 알고리즘 구현
#### 최종 응답 계산 함수를 통해 해당 결과 화면에 나타내기
#### 진행률 나타내기

# 04.배포 및 공유하기
### netify 배포하기
### 카카오 공유하기 버튼 및 기능구현
