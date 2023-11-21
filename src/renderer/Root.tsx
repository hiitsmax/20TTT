import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';

function Root() {
  return (
    <div className="w-full h-full">
      <div className="m-4 h-full flex flex-col">
        <div className="flex-none">
          <NavBar />
        </div>
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Root;
