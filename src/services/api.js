import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api';
const KEY = 'key=27615297-cbddad2d0ddf2be561a52608f';

export const getImages = async (searchValue, page) => {
  const response = await axios(
    `${BASE_URL}/?${KEY}&q=${searchValue}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${page}`
  );

  return response.data;
};
