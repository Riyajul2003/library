import React, { useEffect, useState } from 'react';
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from "react-router-dom";
import { loginUser } from '../actions/userAction';
import { toast } from 'react-toastify';

export default function Registration() {
  const {message, loading} = useSelector(state=>state.user);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [user, setUser] = useState({
    email: "", password: ""
  })

  let name, value;

  const handleInputs = (e)=>{
    name = e.target.name;
    value = e.target.value;

    setUser({...user, [name]:value});
  }

  const handleLogin = async(e)=>{
    e.preventDefault();

   await dispatch(loginUser(user.email, user.password));
  }

  useEffect(()=>{
    if(message){
      alert(message);
      dispatch({type: "ClearMessages"});
      navigate("/");
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
                    Login page
                  </h2>
                  <div className="mb-3">
                    <Form onSubmit={handleLogin}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control  value={user.email} onChange={handleInputs} name="email" type="email" placeholder="Enter email" />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control value={user.password} onChange={handleInputs} name="password"  type="password" placeholder="Password" />
                      </Form.Group>
                      <div className="d-grid">
                        <Button disabled={loading} variant="primary" type="submit">
                          Submit
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                         you have No account then first register {' '}
                        <NavLink to={"/register"} className="text-primary fw-bold">
                          Register
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
