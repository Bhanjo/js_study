// 주어진 데이터
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

// 이름 검색
const searchToName = (name) => {
  let data = [];
  return new Promise((resolve, reject) => {
    // map으로 특정 값이 있는가 판단 있으면 값을 extends
    persons.map((person) => {
      // '정확히 일치'가 아닌 '포함' 판단을 위해 indexOf 사용
      if (person.name.indexOf(name) != -1) {
        data = data.concat(person.likedBrand);
      }
    });
    // 데이터가 있다면 resolve 없다면 reject로 에러처리
    if (data.length > 0) resolve(data);
    else reject(console.log("error occure in searchToName"));
  });
};

// 성별 검색
const searchToGender = (gender) => {
  let data = [];
  return new Promise((resolve, reject) => {
    persons.map((person) => {
      if (person.gender === gender) data = data.concat(person.likedBrand);
    });
    if (data.length > 0) resolve(data);
    else reject(console.log("error occure in searchTogender"));
  });
};

// 이름, 성별로 검색
const searchToNameGender = (name, gender) => {
  let data = [];
  return new Promise((resolve, reject) => {
    persons.map((person) => {
      if (person.name.indexOf(name) != -1 && person.gender === gender)
        data = data.concat(person.likedBrand);
    });
    if (data.length > 0) resolve(data);
    else reject(console.log("error occure in searchToNameGender"));
  });
};

// 중복 값 제거
const filterData = (datas) => {
  // set을 이용해 중복 데이터 필터링
  const set = new Set(datas);
  const filterData = [...set];
  return filterData;
};

// 데이터 찾기
const findPerson = (name, gender) => {
  let personData = [];

  // 입력받은 값에 따라 함수 실행
  if (name && !gender) {
    searchToName(name).then(function (res) {
      personData.push(filterData(res));
    });
  } else if (!name && gender) {
    searchToGender(gender).then(function (res) {
      personData.push(filterData(res));
    });
  } else {
    searchToNameGender(name, gender).then(function (res) {
      personData.push(filterData(res));
    });
  }
  return personData;
};

// 데이터 패치
const getData = (name, gender) => {
  return new Promise(function (resolve, reject) {
    const data = findPerson(name, gender);
    if (data) resolve(data);
    else reject(console.log("something error in getData"));
  });
};

// 테스트 케이스의 데이터는 변경 절대 불가
// case 1
getData("jo", null).then(function (data) {
  console.log(data[0]);
});

// case 2
getData(null, "M").then(function (data) {
  console.log(data[0]);
});

// case 3
getData("jo", "M").then(function (data) {
  console.log(data[0]);
});

// case 4
getData("jo", "W").then(function (data) {
  console.log(data[0]);
});

// case 5
getData("han", "M").then(function (data) {
  console.log(data[0]);
});

// case 6
getData("han", "W").then(function (data) {
  console.log(data[0]);
});
