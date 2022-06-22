import fetch from "node-fetch";
const API_URL = "https://jsonplaceholder.typicode.com/comments";
const ans = [];

async function getNames(id) {
  const fetchs = await fetch(`${API_URL}?postId=${id}`);
  return fetchs;
}

function filterNames(json) {
  try {
    let names = [];
    json.map((item) => {
      names = names.concat(item.name);
    });
    return names;
  } catch (e) {
    console.log("error occure filterNames", e);
  }
}

async function getEmails(id1, id2) {
  let datas = [];
  const maxId = id1 >= id2 ? id1 : id2;
  const minId = id1 < id2 ? id1 : id2;

  const fetchsMaxId = await fetch(`${API_URL}?postId=${maxId}`)
    .then((res) => res.json())
    .then((res) => (datas = datas.concat(res)));

  const fetchMinId = await fetch(`${API_URL}?postId=${minId}`)
    .then((res) => res.json())
    .then((res) => (datas = datas.concat(res)));

  return datas;
}

function filterEmails(json) {
  let emails = [];
  try {
    json.map((item) => {
      emails = emails.concat(item.email);
    });
    return emails;
  } catch (e) {
    console.log("error! filterEmails", e);
  }
}

const getData = async (id1, id2, id3) => {
  let ans = [];
  await getNames(id1)
    .then((res) => res.json())
    .then((json) => (ans = ans.concat(filterNames(json))));

  await getEmails(id2, id3).then(
    (json) => (ans = ans.concat(filterEmails(json)))
  );

  return ans;
};

getData(1, 3, 5).then((res) => console.log(res));
