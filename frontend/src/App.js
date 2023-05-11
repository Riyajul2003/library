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
import viewbook from './components/viewbook';

function App() {
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
        <Route path='/viewbook' element={<viewbook/>} />

      </Routes>
    </>
  );
}

export default App;
