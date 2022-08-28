import { Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Admin } from './pages/Admin';
import { Dashboard } from './pages/Dashboard';
import { Home } from './pages/Home';

export const App = () => {
  return (
    <div className="flex min-w-[340px] h-full md:h-screen items-center justify-center">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/u/:id" element={<Dashboard />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
};
