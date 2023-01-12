import Navigation from './Navigation';
import { Outlet, Link } from 'react-router-dom';

function Root() {
  return (
    <>
      <Navigation />
      <>
        <Outlet />
      </>
    </>
  );
}

export default Root;
