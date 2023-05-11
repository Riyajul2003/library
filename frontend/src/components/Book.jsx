import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';

function BasicExample({id, name, img}) {
  return (
    <Card className='book text-center' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <NavLink to={`/book/${id}`}>
        <Button variant="primary">View Details</Button>
        </NavLink>      
      </Card.Body>
    </Card>
  );
}

export default BasicExample;