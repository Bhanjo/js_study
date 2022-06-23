## Fetch 문제

### fetch를 이용해 데이터를 패치하고 필터링을 해보자

```
제한시간: 60분
실행환경: node.js (16.13.0 v)
```

<hr/>

### 구현사항

다음 API를 활용해 조건에 맞는 데이터를 패치한다.

- getData(id1, id2, id3): 최종 결과를 반환한다.
- getNames(id1): 문제1의 데이터를 패치한다.
- getEmails(id2, id3): 문제2의 데이터 패치를 패치한다.
- 위 함수명을 지키지 않을 시 불합격 처리된다.

#### 문제\_1

- API: https://jsonplaceholder.typicode.com/comments
- postId가 1인 comment의 name을 출력해라
- async-await을 반드시 포함해 사용해라

#### 문제\_2

- API: https://jsonplaceholder.typicode.com/comments
- postId가 3 혹은 5인 comment의 email을 출력해라
- postId 내림 차순으로 정렬한다. 만약, postId가 같다면 id를 오름차순으로 2차 정렬한다.
- async-await을 반드시 사용해라

#### 주의사항

- 시작 전 문제 폴더 내에서 `yarn install node-fetch`를 실행해 패키지를 설치한다.
- API가 제공하는 검색 조건을 사용한다. (예: https://~/comments?postId=1)
  - 단, 문제2의 경우 다중 조건을 사용하지 않고 각각 데이터 패치한다. (다중조건 사용시 불합격)
  - HTTP 메서드는 'GET' 요청이다.
- comments는 500개다.
- comments는 postId 기준 오름차순 정렬이 되어 있다.
- postId가 동일할 시 id 기준 오름차순 정렬이 되어있다.
- id는 중복된 값이 주어지지 않는다.
- API 구조는 다음과 같다.

```
{
  "postId": Number,
  "id": Number,
  "name": String,
  "email": String,
  "body": String"
},
```

- 추가 함수 작성은 가능하다.
- getEmails에서는 파라미터 두 개만 받는다. (id2, id3)
- 최종 결과는 문제1과 문제2를 합한 하나의 배열로 출력한다.
- 만약,Cannot use import statement outside a module과 같은 에러가 발생한다면 package.json에 아래의 내용을 추가한다.

```
{
  "name": "fetch-practice",
  "version": "0.0.0",
  "type": "module",
  // 이미 있던 내용을 추가하세요
}

```

#### 결과

- 문제\_1

```
[
  'id labore ex et quam laborum',
  'quo vero reiciendis velit similique earum',
  'odio adipisci rerum aut animi',
  'alias odio sit',
  'vero eaque aliquid doloribus et culpa',
]
```

- 문제\_2

```
[
  'Noemie@marques.me',
  'Khalil@emile.co.uk',
  'Sophia@arianna.co.uk',
  'Jeffery@juwan.us',
  'Isaias_Kuhic@jarrett.net',
  'Veronica_Goodwin@timmothy.net',
  'Oswald.Vandervort@leanne.org',
  'Kariane@jadyn.tv',
  'Nathan@solon.io',
  'Maynard.Hodkiewicz@roberta.com'
]
```

- 최종 결과

```
[
  'id labore ex et quam laborum',
  'quo vero reiciendis velit similique earum',
  'odio adipisci rerum aut animi',
  'alias odio sit',
  'vero eaque aliquid doloribus et culpa',
  'Noemie@marques.me',
  'Khalil@emile.co.uk',
  'Sophia@arianna.co.uk',
  'Jeffery@juwan.us',
  'Isaias_Kuhic@jarrett.net',
  'Veronica_Goodwin@timmothy.net',
  'Oswald.Vandervort@leanne.org',
  'Kariane@jadyn.tv',
  'Nathan@solon.io',
  'Maynard.Hodkiewicz@roberta.com'
]
```

#### 초기 코드

```
import fetch from "node-fetch";

const API_URL = "https://jsonplaceholder.typicode.com/comments";
const ans = [];

// API 호출해 데이터 패치
async function getNames(id) {
  // id에 해당하는 name 패치
}

// API 호출해 데이터 패치
async function getEmails(id1, id2) {
  // id1, id2에 맞는 email 패치
}

const getData = async (id1, id2, id3) => {
  let ans = [];
  return ans;
};

// 결과 코드 절대 변경 불가 (단, 파라미터만 변경 가능)
getData(1, 3, 5).then((res) => console.log(res));

```
