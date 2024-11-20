import { Suspense, useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const About = () => {
  useEffect(() => {
    document.title = 'BEST CODERS | About';
  }, []);
  return (
    <div>
      <h2>About page</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ipsum quae ut itaque dolore. Culpa non, in reprehenderit explicabo ducimus
        quasi, facilis odio atque perspiciatis velit soluta labore architecto at!
      </p>
      <nav>
        <NavLink to='team'>Team</NavLink>
        <NavLink to='aim'>Aim</NavLink>
        <NavLink to='company'>Company</NavLink>
      </nav>
      <div className='outlet'>
        <Suspense fallback={<h2>Loading about suspense</h2>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};
export default About;
