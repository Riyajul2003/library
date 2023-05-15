import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';

function Book({id, name, img}) {
  return (
    <Card className='book text-center'>
      <Card.Img variant="top" src={img} style={{height : "13rem"}} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <NavLink to={`/book/${id}`}>
        <Button variant="primary">View Details</Button>
        </NavLink>      
      </Card.Body>
    </Card>
  );
}

export default Book;