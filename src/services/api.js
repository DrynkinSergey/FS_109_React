import axios from 'axios';

export const fetchArticles = async () => {
  const response = await axios.get('https://hn.algolia.com/api/v1/search?query=react');
  return response.data;
};
