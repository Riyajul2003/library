import React from 'react'
import {Container, Card } from "react-bootstrap";
import {} from 'react-router-dom';


export default function viewbook() {
  return (
   <Container>
  <Card className="card">
    <img className="card-img-top" src="" alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </Card>

   </Container>
  )
}

