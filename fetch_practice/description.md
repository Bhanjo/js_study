## Fetch 문제

### fetch를 이용해 데이터를 패치하고 필터링을 해보자

```
제한시간: 60분
실행환경: node.js (16.13.0 v)
```

<hr/>

### 구현사항

다음 API를 활용해 조건에 맞는 데이터를 패치한다.

- getData(): 최종 결과를 반환한다.
- getNames: 문제1의 데이터를 패치한다.
- getEmails: 문제2의 데이터 패치를 패치한다.
- 위 함수명을 지키지 않을 시 불합격 처리된다.

#### 문제\_1

- API: https://jsonplaceholder.typicode.com/comments
- postId가 1인 comment의 name을 출력해라
- async-await을 반드시 포함해 사용해라

#### 문제\_2

- API: https://jsonplaceholder.typicode.com/comments
- postId가 3 혹은 5인 comment의 email을 출력해라
- postId 내림 차순으로 정렬한다. 만약, postId가 같다면 2차 정렬 기준으로 id를 사용한다.
- async-await을 반드시 사용해라

#### 주의사항

- API가 제공하는 검색 조건은 사용하지 않는다. (예: https://~/comments?postId=1)
- comments는 500개다.
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

#### 결과

- 문제\_1

```
[
  id labore ex et quam laborum,
  quo vero reiciendis velit similique earum,
  odio adipisci rerum aut animi,
  alias odio sit,
  vero eaque aliquid doloribus et culpa,
]
```

- 문제\_2

```
[
  Veronica_Goodwin@timmothy.net,
  Oswald.Vandervort@leanne.org,
  Kariane@jadyn.tv,
  Nathan@solon.io,
  Maynard.Hodkiewicz@roberta.com,
  Eliseo@gardner.biz,
  Jayne_Kuhic@sydney.com,
  Nikita@garfield.biz,
  Lew@alysha.tv,
  Hayden@althea.biz,
]
```
