import axios from 'axios';

axios.defaults.baseURL = 'https://hn.algolia.com/api/v1';

export const fetchArticles = async (query, page) => {
  const response = await axios.get(`/search`, {
    params: {
      query,
      page,
      hitsPerPage: 100,
    },
  });
  return response.data;
};
export const register = async (query, page) => {
  const response = await axios.get(`/auth`, {
    params: {
      query,
      page,
      hitsPerPage: 100,
    },
  });
  return response.data;
};
