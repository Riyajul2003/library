import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useParams} from 'react-router-dom'

function BasicExample({name, img, details}) {
    const params = useParams();

  return (
    <Card className='book text-center' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {details}
        </Card.Text>
        <Button onClick={()=>{
            alert(params.id);
        }} variant="primary">View Details</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;