
import './App.css';
import Home from './home';
import Login from './login';
import New from './newuser';
import { Route,Routes } from 'react-router';
import Second from './second';
import About from './about';

import Inbox from './inbox';
import Profile from './profile';
import Advisors from './advisors';
import Search from './search';
import Advisorprofile from './advisorprofile';
import Contact from './contact';
import Payment from './payment';
// import Editprofile from './src/editprofile';

import AdvisorRegister from './securityregister';
import SLogin from './securityLogin';
import Edit from './editprofile';
import Feedback from './feedback';



function App() {
  return (
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/newaccount' element={<Second/>}/>
      <Route path='/newuser' element={<AdvisorRegister/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/home/about' element={<About/>}/>
      <Route path='home/inbox' element={<Inbox/>}/>
      <Route path='home/profile' element={<Profile/>}/>
      <Route path='/edit' element={<Edit/>}/>
      <Route path='/home/advisors' element={<Advisors/>}/>
      <Route path='/home/search' element={<Search/>}/>
      <Route path='home/feedback' element={<Feedback/>}/>
      <Route path='/viewadvisor' element={<Advisorprofile/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/contact/payment' element={<Payment/>}/>
      {/* <Route exact path='/' element={<AdvisorRegister/>}></Route> */}

      
    </Routes>
  );
}

export default App;
