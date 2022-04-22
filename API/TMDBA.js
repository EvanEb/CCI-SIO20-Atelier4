// API/TMDBApi.js
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const API_TOKEN = "98e3a54a01805646ca6dcdf04ef4e549";

const getFilmsFromApiWithSearchedText = async (text, page = 1) => {
  await slowNetwork();
  const url =
    "https://api.themoviedb.org/3/search/movie?api_key=" +
    API_TOKEN +
    "&language=fr&query=" +
    text +
    "&page=" +
    page;
  const response = await axios.get(url);
  let i = 0;
  const val = uuidv4();
  response.data.results.forEach(function (part, index) {
    this[index].listId = val + page + i++;
  }, response.data.results);
  return response.data;
};

const getFilmDetailFromApi = async (id) => {
  const url =
    "https://api.themoviedb.org/3/movie/" +
    id +
    "?api_key=" +
    API_TOKEN +
    "&language=fr";
  const response = await axios.get(url);
  response.data.listId = uuidv4();
  return response.data;
};

const getImageFromApi = (name) => {
  if (name === null || name === undefined)
    return require("../Assets/filmVide.png");
  let uri = "https://image.tmdb.org/t/p/w300" + name;
  return { uri: uri };
};

const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};
async function slowNetwork() {
  await sleep(200);
}

export {
  getFilmsFromApiWithSearchedText,
  getImageFromApi,
  getFilmDetailFromApi,
};
