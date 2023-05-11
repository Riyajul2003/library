import { Col, Button, Row, Container, Form } from 'react-bootstrap';
import {NavLink} from 'react-router-dom'



export default function Profile() {
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
                    <Form.Control type="text" placeholder="Enter Name"  readOnly/>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="text-center">
                      Email address
                    </Form.Label>
                    <Form.Control type="email" placeholder="Enter email"  readOnly/>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="mobile">
                    <Form.Label className="text-center">Mobile</Form.Label>
                    <Form.Control type="number" placeholder="Enter Mobile"  readOnly/>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicgender">
                  <Form.Label className='text-center'>Gender</Form.Label>
                  <Form.Control type='text' placeholder='Male/Female' readOnly/>
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
                <Button variant="info">
                  <NavLink to="/new" className={"links"}>
                      New Book
                  </NavLink>
                </Button>{' '} 
                <Button variant="warning">Log out</Button>{' '} 
                <Button variant="danger">Delete Account</Button>{' '}
              </div>
            </div>
      </Col>
    </Row>
    </div>
  </Container>
         
       
      )}

(<Profile />);
