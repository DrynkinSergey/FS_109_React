import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from '../pages/Home/Home';
import Tasks from '../pages/Tasks/Tasks';
import Register from '../pages/Register/Register';
import Login from '../pages/Login/Login';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from '../redux/auth/operations';
import { selectIsRefreshing } from '../redux/auth/selectors';
import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? null : (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path='tasks'
          element={
            <PrivateRoute>
              <Tasks />
            </PrivateRoute>
          }
        />
      </Route>
      <Route path='register' element={<RestrictedRoute component={<Register />} redirectTo='/tasks' />} />
      <Route path='login' element={<RestrictedRoute component={<Login />} redirectTo='/tasks' />} />
    </Routes>
  );
};
export default App;
