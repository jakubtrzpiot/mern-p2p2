import { Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Admin } from './pages/Admin';
import { Dashboard } from './pages/Dashboard';
import { Home } from './pages/Home';

export const App = () => {
  return (
    <div className="flex min-w-[340px] lg:h-screen items-center justify-center">
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/u/:id" element={<Dashboard />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/signup" element={<Signup />}></Route>
        <Route exact path="/admin" element={<Admin />}></Route>
      </Routes>
    </div>
  );
};
