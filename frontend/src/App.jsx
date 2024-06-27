import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './components/home/Home';
import UserSignup from './components/usersignup/UserSignup';
import UserLogin from './components/userlogin/UserLogin'
import UserDetails from './components/userdetils/UserDetails';
import AdminSignup from './components/adminsignup/AdminSignup';
import AdminLogin from './components/adminlogin/AdminLogin';
import AdminDashboard from './components/admindashbord/AdminDashboard';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/user/signup",
      element: <UserSignup />
    },
    {
      path: "/user/login",
      element: <UserLogin />
    },
    {
      path: "/user/details",
      element: <UserDetails />
    },
    {
      path: "/admin/signup",
      element: <AdminSignup />
    },
    {
      path: "/admin/login",
      element: <AdminLogin />
    },
    {
      path: "/admin/dashboard",
      element: <AdminDashboard />
    }
  ]);

  return (
    <RouterProvider router={router}>
      {/* Render the application content directly */}
      <Route path="/" exact component={Home} />
      <Route path="/user/signup" component={UserSignup} />
      <Route path="/user/login" component={UserLogin} />
      <Route path="/user/details" component={UserDetails} />
      <Route path="/admin/signup" component={AdminSignup} />
      <Route path="/admin/login" component={AdminLogin} />
      <Route path="/admin/dashboard" component={AdminDashboard} />
    </RouterProvider>
  );
}

export default App;
