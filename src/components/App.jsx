import { Route, Routes } from 'react-router-dom';
import Header from './Header/Header';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<h2>Homepage</h2>} />
        <Route path='/about' element={<h2>About page</h2>} />
      </Routes>
    </div>
  );
};
export default App;
