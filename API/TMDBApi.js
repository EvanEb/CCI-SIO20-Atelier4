// API/TMDBApi.js
import axios from 'axios'

const API_TOKEN = '1f7a0cd2ac41ea5e96363f8b11170329'


const getFilmsFromApiWithSearchedText = async (text) => {
  await slowNetwork()
  const url =
    'https://api.themoviedb.org/3/search/movie?api_key=' +
    API_TOKEN +
    '&language=fr&query=' +
    text
  const response = await axios.get(url)
  console.log('--getFilmsFromApiWithSearchedText--')
  console.log(response.data)
  console.log('--fin getFilmsFromApiWithSearchedText--')
  return response.data
}
const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}
async function slowNetwork() {
  await sleep(5000)
}



export default getFilmsFromApiWithSearchedText 
