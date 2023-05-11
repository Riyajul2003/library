import React from 'react'
import Book from './Book';

const Home = () => {
    const arr = [
        {
            id: 0,
            name: "book1", 
            img: "https://img.freepik.com/premium-photo/educational-concept-books-blue_387680-275.jpg",
            details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi cupiditate dolorum harum quae deleniti voluptas numquam, sunt modi quibusdam, illum sequi dolore"
        },
        {
            id: 1,
            name: "book2", 
            img: "https://img.freepik.com/premium-photo/educational-concept-books-blue_387680-275.jpg",
            details: "ectetur, adipisicing elit. Quasi cuore"
        },
        {
            id: 2,
            name: "book3", 
            img: "https://img.freepik.com/premium-photo/educational-concept-books-blue_387680-275.jpg",
            details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, illum sequi dolore"
        },
    ]
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
                arr.map((item)=>(
                    <Book key={item.id} id={item.id} name={item.name} img={item.img} details={item.details} />
                ))
            }
        </div>
    </div>
  )
}

export default Home