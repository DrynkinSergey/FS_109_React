import { Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
// import Home from '../pages/Home/Home';
// import About from '../pages/About/About';
// import NotFound from '../pages/NotFound/NotFound';
// import Aim from './NestedRoutes/Aim';
// import Company from './NestedRoutes/Company';
// import Team from './NestedRoutes/Team';
// import Users from '../pages/Users/Users';
// import UserDetails from '../pages/UserDetails/UserDetails';
// import Posts from './NestedRoutes/Posts';
import { lazy, Suspense } from 'react';

const About = lazy(() => import('../pages/About/About'));
const Posts = lazy(() => import('./NestedRoutes/Posts'));
const Home = lazy(() => import('../pages/Home/Home'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));
const Aim = lazy(() => import('./NestedRoutes/Aim'));
const Company = lazy(() => import('./NestedRoutes/Company'));
const Team = lazy(() => import('./NestedRoutes/Team'));
const Users = lazy(() => import('../pages/Users/Users'));
const UserDetails = lazy(() => import('../pages/UserDetails/UserDetails'));

const App = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<h2>Loading first suspense</h2>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/users' element={<Users />} />
          <Route path='/users/:userId' element={<UserDetails />}>
            <Route path='info' element={<h2>test info</h2>} />
            <Route path='posts' element={<Posts />} />
          </Route>

          <Route path='/about' element={<About />}>
            <Route path='aim' element={<Aim />} />
            <Route path='company' element={<Company />} />
            <Route path='team' element={<Team />} />
          </Route>

          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};
export default App;
