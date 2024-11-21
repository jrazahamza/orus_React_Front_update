import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/login';
import Signup from './components/signup';
import BookingTable from './components/UserDashboard/UserDashBoard';
import AdminDashboard from './components/AdminDashboard/AdminDashBoard';
import UserDashBoard from './components/UserDashboard/UserDashBoard';
import PromptSuggestion from './components/UserDashboard/PromptSuggestion';
import QuestionRecommendation from './components/UserDashboard/QuestionsPropmt';
import UserBookingDashBoard from './components/UserDashboard/UserBookingDashboard';
import FlightSearch from './components/UserDashboard/FlightSearch';

function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Login/>} />
    <Route path='/Signup' element={<Signup/>} />
    <Route path='/bookingtable'  element={<BookingTable/>}  />
    <Route path='/AdminDashboard'  element={<AdminDashboard/>}  />
    <Route path='/users' element={<UserDashBoard/>} />
    <Route path='/PromptSuggestion' element={<PromptSuggestion/>} />
    <Route path='/QuestionRecommendation' element={<QuestionRecommendation/>} />
    <Route path='/UserBookingDashBoard' element={<UserBookingDashBoard/>} />
    <Route path='/FlightSearch' element={<FlightSearch/>} />
  </Routes>


  </BrowserRouter>
  </>
  );
}

export default App;
