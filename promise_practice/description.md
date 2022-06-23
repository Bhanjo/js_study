## 코딩테스트 문제

### Promise를 이용해 데이터 패치 및 가공하기

```
제한시간: 60분
실행 환경: node.js(16.13.0v)
```

<hr />

### 구현사항

유저들이 찜한 브랜드 목록을 보려고 한다.
person이라는 유저 목록이 주어졌을 때 다음과 같은 조건으로 브랜드를 가져오려고 한다.

1. 이름에 특정 문자열로 시작하는 유저들이 찜한 브랜드 목록
2. 남성 혹은 여성이 찜한 브랜드 목록
3. 이름에 특정 문자열이 포함되어 있으면서 특정 성별이 찜한 브랜드 목록

#### `목표: 브랜드 목록을 가져오자`

- `getData` => 최종 결과를 출력
- `findPerson` => name과 gender를 받아 요구사항에 맞게 데이터를 패치
  - name만 존재 => name이 perseon.name에 '시작'하는 데이터를 패치해라
    - 'name = jo' => jo1, jo2, jo3, ... , jo(n)
  - gender만 존재 => gender와 '일치'하는 데이터를 패치해라
    - 'gender'는 'M'과 'W'로만 이루어져있다.
  - name과 gender 존재 => 'name'이 person.name에 '포함' 되면서 'gender'가 person.gender와 '일치'하는 데이터를 패치해라
- 데이터 패치 시 반드시 `Promise`를 통해 데이터를 패치해라
  - 만약 추가적인 함수를 통해 person의 데이터를 패치하는 경우에도 Promise를 사용해라
- 중복되는 데이터는 `한 번만 출력`한다.
- 추가적인 함수 작성이 `가능`하다
- 아무 값도 얻지 못했을 시 그에 따른 에러를 발생시킨다.

#### `결과`

- 이름: jo, 성별: null
  - [ 'brandA', 'brandB', 'brandC', 'brandD', 'brandE', 'brandF' ]
- 이름: null, 성별: M
  - [ 'brandA', 'brandB', 'brandE', 'brandF', 'brandG' ]
- 이름: jo, 성별: M
  - [ 'brandA', 'brandB', 'brandE', 'brandF' ]
- 이름: jo, 성별: W
  - [ 'brandB', 'brandC', 'brandD' ]
- 이름: han, 성별: M
  - [ 'brandF', 'brandG' ]
- 이름: han, 성별: W
  - 값이 없다는 에러 출력

#### `기타`

- person은 id, name, gender, likedBrand로 이루어진 `객체`다.
- gender는 'M'과 'W'로만 이루어져 있다.
- 두 값 모두 null이 들어가는 상황은 고려하지 않는다.
- 2 <= name.length <= 100
- 1 <= person.length <= 100,000
- 함수에서 데이터 패치 시 아무 값도 얻지 못했다면 함수 단위로 에러를 발생시킨다.
  - A 함수에서 에러 발생 => A 함수에서 에러 처리
  - B 함수에서 에러 발생 => B 함수에서 에러 처리

### `초기 코드`

```
const persons = [
  {
    id: 0,
    name: "jo0",
    gender: "M",
    likedBrand: ["brandA", "brandB"],
  },
  {
    id: 1,
    name: "jo1",
    gender: "W",
    likedBrand: ["brandB"],
  },
  {
    id: 2,
    name: "jo2",
    gender: "W",
    likedBrand: ["brandB", "brandC", "brandD"],
  },
  {
    id: 3,
    name: "jo3",
    gender: "W",
    likedBrand: ["brandB", "brandC"],
  },
  {
    id: 4,
    name: "jo4",
    gender: "M",
    likedBrand: ["brandE", "brandF"],
  },
  {
    id: 5,
    name: "han",
    gender: "M",
    likedBrand: ["brandF", "brandG"],
  },
];

// 데이터 찾기
const findPerson = (name, gender) => {
  let personData = [];

  // 여기에 조건에 따른 데이터를 패치하세요

  return personData;
};

// 데이터 패치
const getData = (name, gender) => {
  return new Promise(function (resolve, reject) {
    // 여기에 최종적인 답을 출력하는 코드를 작성하세요
  });
};

// 디버깅 코드 구조 절대 변경 불가 (추가 가능)
// 단, data가 2차원 배열이 아닌 1차원 배열로 리턴시에는 data[0]을 data로 수정 가능
getData("jo", null).then(function (data) {
  console.log(data[0]);
});


```
