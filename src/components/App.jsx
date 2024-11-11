import Articles from './Articles/Articles';
import { useEffect } from 'react';
import { useState } from 'react';
import { fetchArticles } from '../services/api';
import Loader from './Loader/Loader';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const { hits } = await fetchArticles();
        setArticles(hits);
      } catch (error) {
        console.error(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, []);

  return (
    <div>
      {isLoading && <Loader />}
      <Articles articles={articles} />
      {isError && <h2>Щось сталось! Онови сторінку...</h2>}
    </div>
  );
};
export default App;
//   axios.get('https://hn.algolia.com/api/v1/search?query=react').then(res => setArticles(res.data.hits));
