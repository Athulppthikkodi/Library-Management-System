
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AdminLogin from './component/adminlogin';
import LandingPage from './component/landingpage';
import UserLogin from './component/userlogin';
import AdminPortal from './component/adminhome';
import UserPortal from './component/userportal';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
       <Route path='/' element={<LandingPage/>}/>
       <Route path='/admin-login' element={<AdminLogin/>}/>
       <Route path='/user-login' element={<UserLogin/>}/>
       <Route path='/admin/*' element={<AdminPortal/>}/>
       <Route path='/user/*' element={<UserPortal/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
