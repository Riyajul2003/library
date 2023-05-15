import React, { useEffect, useState } from 'react';
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addABook } from '../actions/bookAction';

export default function Registration() {

  const {message, loading} = useSelector(state=>state.book);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [book, setBook] = useState({
    title: "", author: "", image: "", details: ""})

  let name, value;

  const handleInputs = (e)=>{
    name = e.target.name;
    value = e.target.value;

    setBook({...book, [name]:value});
  }

  const handleAddBook = async(e)=>{
    e.preventDefault();

   await dispatch(addABook(book.title, book.author, book.image, book.details));
  }

  useEffect(()=>{
    if(message){
      alert(message);
      dispatch({
        type: "ClearMessages"
      })
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
                    Add a New Book
                  </h2>
                  <div className="mb-3">
                    <Form onSubmit={handleAddBook}>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Book Title
                        </Form.Label>
                        <Form.Control name="title" value={book.title} onChange={handleInputs}  type="text" placeholder="The Wings of Fire" />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label className="text-center">
                          Book Author
                        </Form.Label>
                        <Form.Control name="author" value={book.author} onChange={handleInputs}  type="text" placeholder="APJ Kalam" />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Cover Image</Form.Label>
                        <Form.Control name="image" value={book.image} onChange={handleInputs}  type="text" placeholder="https://books-cover/wing-of-fire.png" />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Details </Form.Label>
                        <Form.Control  name="details" value={book.details} onChange={handleInputs} as="textarea" rows={5} placeholder='Write details of the book...' />
                      </Form.Group>

                      <div className="d-grid">
                        <Button disabled={loading} variant="primary" type="submit">
                          Submit
                        </Button>
                      </div>
                    </Form>
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
