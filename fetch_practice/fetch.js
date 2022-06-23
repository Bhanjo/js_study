import fetch from "node-fetch";
const API_URL = "https://jsonplaceholder.typicode.com/comments";
const ans = [];

// API 호출해 값(json) 반환
async function fetcher(id) {
  const fetchs = await fetch(`${API_URL}?postId=${id}`);
  return fetchs.json();
}

// 이름 얻기
async function getNames(id) {
  const fetchs = await fetcher(id);
  return fetchs;
}

// 이메일 얻기
async function getEmails(id1, id2) {
  let datas = [];
  const maxId = id1 >= id2 ? id1 : id2;
  const minId = id1 < id2 ? id1 : id2;

  const maxIdData = await fetcher(maxId);
  datas = datas.concat(maxIdData);
  const minIdData = await fetcher(minId);
  datas = datas.concat(minIdData);

  return datas;
}

function filterData(json, condition) {
  try {
    let data = [];
    json.map((item) => {
      if (condition === "name") data = data.concat(item.name);
      if (condition === "email") data = data.concat(item.email);
    });
    return data;
  } catch (e) {
    console.log("error occure filterData", e);
  }
}

const getData = async (id1, id2, id3) => {
  let ans = [];
  const names = await getNames(id1);
  ans = ans.concat(filterData(names, "name"));

  const emails = await getEmails(id2, id3);
  ans = ans.concat(filterData(emails, "email"));

  return ans;
};

getData(1, 3, 5).then((res) => console.log(res));
