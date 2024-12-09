import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from '../pages/Home/Home';
import Tasks from '../pages/Tasks/Tasks';
import Register from '../pages/Register/Register';
import Login from '../pages/Login/Login';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='tasks' element={<Tasks />} />
      </Route>
      <Route path='register' element={<Register />} />
      <Route path='login' element={<Login />} />
    </Routes>
  );
};
export default App;
