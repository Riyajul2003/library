import React, { useEffect } from 'react'
import Book from './Book';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBooks } from '../actions/bookAction';
import { loadUser } from '../actions/userAction';

const Home = () => {

    const dispatch = useDispatch();
    const {books} = useSelector(state=>state.book);

    useEffect(()=>{
        dispatch(loadUser());
        dispatch(getAllBooks());
    }, [])
    
  return (
    <div className='home'>
        <div className="banner">
            <img className='w-100' src="https://img.freepik.com/premium-photo/educational-concept-books-blue_387680-275.jpg" alt="" />
            <div className='banner-contents'>
                <h1>Welcome to libary</h1>
            <p className="contents">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi cupiditate dolorum harum quae deleniti voluptas numquam, sunt modi quibusdam, illum sequi dolore eos libero praesentium perspiciatis veniam quos, sapiente repellendus.
            </p>
            </div>
        </div>
        <div className="books">
            {
                books && books.map((item)=>(
                    <Book key={item._id} id={item._id} name={item.title} img={item.image} details={item.details} />
                ))
            }
        </div>
    </div>
  )
}

export default Home