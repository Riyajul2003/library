import React, { useEffect } from 'react'
import Book from './Book';
import { useDispatch, useSelector } from 'react-redux';
import { getBorrowBook } from '../actions/bookAction';

const MyBooks = () => {
    const {borrowed} = useSelector(state=>state.book);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getBorrowBook());
    }, [])

  return (
    <div className='home'>
        <br />
        <h3 className='text-light text-center'>Books You Borrowed..</h3>
        <br />
        <div className="books">
            {
                borrowed && borrowed.map((item)=>(
                    <Book key={item._id} id={item._id} name={item.title} img={item.image} details={item.details} />
                ))
            }
        </div>
    </div>
  )
}

export default MyBooks;