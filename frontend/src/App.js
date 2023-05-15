import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login'
import Registration from './components/Registration';
import Profile from "./components/Profile";
import NewBook from './components/NewBook';
import MyBooks from './components/MyBooks';
import BookDetails from './components/BookDetails';
import Viewbook from './components/Viewbook';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadUser } from './actions/userAction';

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
dispatch(loadUser());
  }, []
  )
  return (
    <>
    <Header/>
    
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Registration/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/new' element={<NewBook/>} />
        <Route path='/books' element={<MyBooks/>} />
        <Route path='/book/:id' element={<BookDetails/>} />
        <Route path='/viewbook' element={<Viewbook/>} />

      </Routes>
      
    </>
  );
}

export default App;
