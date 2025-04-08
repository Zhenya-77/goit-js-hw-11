import axios from "axios";

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '49685797-d155f5292c9f3a9a86069a294'; 

export async function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  const response = await axios.get(BASE_URL, { params });
  return response.data;
}
