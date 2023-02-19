import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Register from './pages/Register/Register';
import LogIn from './pages/Login/LogIn';
import Home from './components/home';

import Client from './pages/Client/client';
import Admin from './pages/Admin/Admin';
import USERS from './pages/Admin/USERS';
import Feeds from './pages/Admin/Feeds';
import Loader from './pages/Login/Loader';
import Signup from './pages/Login/Signup';
import Desc from './pages/Client/Desc';
import NavBar from './components/navBar';
function App() {
  return (
    <div className="App">
      < NavBar/>
      <div className='container'>
         <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<LogIn />} />
        <Route exact path="/register" element={<Signup />} />
     
        <Route exact path='/profile'  element={<Client />} >
        <Route path='descwriter' element={<Desc></Desc>}></Route>
          </Route>
        
        <Route exact path='/admin'  element={<Admin />} />
        <Route exact path='/users'  element={<USERS />} />
        <Route exact path='/loader' element={<Loader />} />
        <Route exact path='/feeds' element={<Feeds />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
