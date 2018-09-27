import YTSearch from 'youtube-api-search';

export const API_KEY = 'AIzaSyA9Wn949xPAjsJ_16jsRAuk4d_L08Q8DP8';

const YoutubeSearch = (term) => {
  return new Promise((resolve) => {
    YTSearch({ key: API_KEY, term }, videos => resolve(videos));
  });
}

export default YoutubeSearch;