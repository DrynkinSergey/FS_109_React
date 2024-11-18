import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    document.title = 'BEST CODERS | HOME';
  }, []);
  return <div>HomePage</div>;
};
export default Home;
