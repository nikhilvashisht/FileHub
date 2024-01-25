import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/";

async function loginv2(username, password) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var formdata = new FormData();
  formdata.append("username", String(username));
  formdata.append("password", String(password));

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
    mode: "no-cors",
  };

  fetch("http://127.0.0.1:8000/register/", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}

async function login(username, password) {
  var response = await axios(
    {
      method: "POST",
      url: BASE_URL + "register/",
      data: {
        username: username,
        password: password,
      },
    },
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  console.log(response.data);
}

async function getNotes(username) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var formdata = new FormData();

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  var response = await fetch(
    `http://127.0.0.1:8000/get/${username}`,
    requestOptions
  );

  return response;
}

async function openFile(username, file_name) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var formData = new FormData();

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(`http://127.0.0.1:8000/open/${username}/${file_name}`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      return JSON.parse(result);
    });
}

async function saveFile(username, file_name, data) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var formData = new FormData();
  formData.append("data", data);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formData,
    redirect: "follow",
  };

  fetch(`http://127.0.0.1/save/${username}/${file_name}`, requestOptions)
    .then((response) => console.log(response))
    .then((result) => console.log(result));
}

export { login, getNotes, openFile, loginv2, saveFile };
