import React from 'react';
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';

export default function Registration() {
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
                    <Form>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Book Title
                        </Form.Label>
                        <Form.Control type="text" placeholder="The Wings of Fire" />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label className="text-center">
                          Book Author
                        </Form.Label>
                        <Form.Control type="text" placeholder="APJ Kalam" />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Cover Image</Form.Label>
                        <Form.Control type="text" placeholder="https://books-cover/wing-of-fire.png" />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Details </Form.Label>
                        <Form.Control as="textarea" rows={5} placeholder='Write details of the book...' />
                      </Form.Group>

                      <div className="d-grid">
                        <Button variant="primary" type="submit">
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
