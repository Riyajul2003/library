import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate, useParams} from 'react-router-dom'
import { getBook } from '../actions/bookAction';
import { useEffect, useState } from 'react';
import { borrowReturnBook, deleteBook } from '../actions/bookAction';
import {loadUser} from '../actions/userAction';

function BasicExample() {
    const params = useParams();
    const [flag, setFlag] = useState(false);

  const {book, message, loading} = useSelector(state=>state.book);
  const navigate = useNavigate();

  const dispatch = useDispatch();


  const handleBorrowReturn = async()=>{
    await dispatch(borrowReturnBook(params.id));
  }

  const DeleteBook = async()=>{
    await dispatch(deleteBook(params.id))
    navigate("/");
  }

  useEffect(()=>{
    dispatch(getBook(params.id));

    if(message){
      alert(message);
      dispatch({
        type: "ClearMessages"
      })
    }
  }, [message])


  return (
    <div className="bookcard">
    <img className="img1" src={book?.image}  alt="Card image cap"/>
    <div className="book-details">
      <h5 className="card-title">Book title: {book?.title} </h5>
      <h5 className="card-title">Book author: {book?.author} </h5>
      <p className="card-text"><h5>Book Delails:</h5>{book?.details}</p>

      <div className="d-flex align-items-center">
      <button onClick={handleBorrowReturn} type="button" className="btn btn-primary">Borrow or Return</button>
      <button onClick={DeleteBook} type="button" className="ms-2 btn btn-danger">Delete</button>
      </div>

    </div>
  </div>
  );
}

export default BasicExample;