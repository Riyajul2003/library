import React, { useEffect, useState } from 'react';
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {NavLink, useNavigate} from 'react-router-dom'
import { registerUser } from '../actions/userAction';
import {toast} from 'react-toastify';

export default function Registration() {
  const {message, loading} = useSelector(state=>state.user);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: "", email: "", phone: "", gender: "", password: ""
  })

  let name, value;

  const handleInputs = (e)=>{
    name = e.target.name;
    value = e.target.value;

    setUser({...user, [name]:value});
  }

  const handleRegister = async(e)=>{
    e.preventDefault();

   await dispatch(registerUser(user.name, user.email, user.phone, user.gender, user.password));
  }

  useEffect(()=>{
    if(message){
      alert(message);
      dispatch({
        type: "ClearMessages"
      })
      navigate("/login");
    }
  }, [message])

  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card className="px-4">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center text-uppercase ">
                    Registration Form
                  </h2>
                  <div className="mb-3">
                    <Form onSubmit={handleRegister}>
                      <Form.Group className="mb-3" controlId="Name">
                        <Form.Label className="text-center">Name</Form.Label>
                        <Form.Control  value={user.name} name='name' onChange={handleInputs}type="text" placeholder="Enter Name" />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control value={user.email} name='email' onChange={handleInputs} type="email" placeholder="Enter email" />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="mobile">
                        <Form.Label className="text-center">Mobile</Form.Label>
                        <Form.Control value={user.phone} name='phone' onChange={handleInputs} type="number" placeholder="Enter Mobile" />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicgender">
                      <Form.Label className='text-center'>Gender</Form.Label>
                      <Form.Control value={user.gender} name='gender' onChange={handleInputs} type='text' placeholder='Male/Female'/>
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control value={user.password} name='password' onChange={handleInputs} type="password" placeholder="Password" />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      ></Form.Group>
                      <div className="d-grid">
                        <Button disabled={loading} variant="primary" type="submit">
                          Create Account
                        </Button>
                      </div>
                    </Form>

                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Already have an account??{' '}
                        <NavLink to={"/login"} className="text-primary fw-bold">
                          Sign In
                        </NavLink>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
