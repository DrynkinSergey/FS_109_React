import Articles from './Articles/Articles';
import { useEffect } from 'react';
import { useState } from 'react';
import { fetchArticles } from '../services/api';
import Loader from './Loader/Loader';
import SearchBar from './SearchBar/SearchBar';
import toast from 'react-hot-toast';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState('react');
  const [page, setPage] = useState(0);
  const [nbPages, setNbPages] = useState(0);

  useEffect(() => {
    if (nbPages === page) {
      toast.success('You already download all posts!💬');
    }
  }, [nbPages, page]);
  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const { hits, nbPages } = await fetchArticles(query, page);
        setNbPages(nbPages);
        setArticles(prev => [...prev, ...hits]);
      } catch (error) {
        console.error(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [query, page]);

  const handleChangeQuery = query => {
    setArticles([]);
    setQuery(query);
    setPage(0);
    toast.error('Query changed');
  };

  return (
    <div>
      <SearchBar onChangeQuery={handleChangeQuery} />
      {nbPages > page && <button onClick={() => setPage(prev => prev + 1)}>Load more</button>}
      {isLoading && <Loader />}
      <Articles articles={articles} />
      {isError && <h2>Щось сталось! Онови сторінку...</h2>}
    </div>
  );
};
export default App;
//   axios.get('https://hn.algolia.com/api/v1/search?query=react').then(res => setArticles(res.data.hits));
