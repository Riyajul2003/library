import { Col, Button, Row, Container, Form } from 'react-bootstrap';
import {NavLink, useNavigate} from 'react-router-dom'
import { deleteProfile, loadUser, logoutUser } from '../actions/userAction';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';



export default function Profile() {

  const {message, user, loading} = useSelector(state=>state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(()=>{
    dispatch(loadUser());

    if(message){
      alert(message);
      dispatch({type: "ClearMessages"})
    }
  }, [message])

  const handleLogout = async(e)=>{
    await dispatch(logoutUser());

    dispatch(loadUser());
  }

  const handleDelete = async(e)=>{
    const flg = window.confirm("Are you sure ?");
    if(flg){
      await dispatch(deleteProfile());
    }
  }

  useEffect(()=>{
    if(message){
      alert(message);
      dispatch({type: "ClearMessages"});
      navigate("/login");
    }
  }, [message])

  return ( 
  
  <Container>
    <div className="center">
    <Row className="w-100 m-2 p-4 d-flex justify-content-center align-items-center bg-light rounded">
      <Col>
            <div className="mb-3 mt-md-4">
              <h2 className="fw-bold mb-2 text-center text-uppercase ">
                User Profile
              </h2>
              <div className="mb-3">
                <Form>
                  <Form.Group className="mb-3" controlId="Name">
                    <Form.Label className="text-center">Name</Form.Label>
                    <Form.Control type="text" defaultValue={user?.name} placeholder="Enter Name"  readOnly/>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="text-center">
                      Email address
                    </Form.Label>
                    <Form.Control type="email" defaultValue={user?.email} placeholder="Enter email"  readOnly/>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="mobile">
                    <Form.Label className="text-center">Mobile</Form.Label>
                    <Form.Control type="number" defaultValue={user?.phone} placeholder="Enter Mobile"  readOnly/>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicgender">
                  <Form.Label className='text-center'>Gender</Form.Label>
                  <Form.Control type='text' defaultValue={user?.gender} placeholder='Male/Female' readOnly/>
                  </Form.Group>
                </Form>
               
              </div>
            </div>
      </Col>
      <Col>
      <div className=" mt-4">
              <h2 className="fw-bold m-2 text-center text-uppercase ">
                User Controll
              </h2>
              <br />
              <br />
              <div className='profile d-flex justify-content-center align-items-center flex-column'>
                  <Button variant="primary">
                    <NavLink to="/books" className={"links"}>
                      Borrowed Books
                    </NavLink>
                  </Button>{' '}
                {
                  user?.role === "admin" ? 
                <Button variant="info">
                  <NavLink to="/new" className={"links"}>
                      New Book
                  </NavLink>
                </Button> : null
                }

                <Button onClick={handleLogout} variant="warning">Log out</Button>{' '} 
                <Button onClick={handleDelete} variant="danger">Delete Account</Button>{' '}
              </div>
            </div>
      </Col>
    </Row>
    </div>
  </Container>
         
       
      )}

(<Profile />);
