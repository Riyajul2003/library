import React from 'react'
import Book from './Book';

const MyBooks = () => {
    const arr = [
        {
            id: 0,
            name: "book1", 
            img: "https://img.freepik.com/premium-photo/educational-concept-books-blue_387680-275.jpg",
            details: "dolorum harum quae deleniti voluptas numquam, sunt modi quibusdam, illum sequi dolore"
        },
        {
            id: 1,
            name: "book2", 
            img: "https://img.freepik.com/premium-photo/educational-concept-books-blue_387680-275.jpg",
            details: "ectetur, adipisicing elit. Quasi cuorljfffffffffffffff jjjjjjjjjjjjjjjj addas  dafja e"
        },
        {
            id: 2,
            name: "book3", 
            img: "https://img.freepik.com/premium-photo/educational-concept-books-blue_387680-275.jpg",
            details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, illum sequi dolore"
        },
        {
            id: 3,
            name: "book4", 
            img: "https://img.freepik.com/premium-photo/educational-concept-books-blue_387680-275.jpg",
            details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, illum sequi dolore"
        },
    ]
  return (
    <div className='home'>
        <br />
        <h3 className='text-light text-center'>Books You Borrowed..</h3>
        <br />
        <div className="books">
            {
                arr.map((item)=>(
                    <Book key={item.id} name={item.name} img={item.img} details={item.details} />
                ))
            }
        </div>
    </div>
  )
}

export default MyBooks;