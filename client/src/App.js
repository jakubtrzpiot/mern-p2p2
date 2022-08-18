import { Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Admin } from './pages/Admin';
import { Dashboard } from './pages/Dashboard';

export const App = () => {
  return (
    <div className="bg-[#222222] h-screen flex">
      <Routes>
        <Route exact path="/dashboard" element={<Dashboard />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/signup" element={<Signup />}></Route>
        <Route exact path="/admin" element={<Admin />}></Route>
      </Routes>
    </div>
  );
};
