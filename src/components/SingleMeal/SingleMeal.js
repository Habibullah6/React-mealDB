import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleMeal = props => {
    const {strMeal, strYoutube, strMealThumb, idMeal} = props.meal;
    return (
    <Col>  
        <Card className='shadow-lg border-0'>
        <Card.Img variant="top" src={strMealThumb} className='img-fluid'/>
        <Card.Body>
        <Card.Title>{strMeal}</Card.Title>
          <Card.Text>
           <a href={strYoutube}>how to cook...</a>
          </Card.Text>
          <Link to={`/details/${idMeal}`}>
             <Button variant='dark'>Details</Button>
          </Link>
        </Card.Body>
        </Card>
    </Col>
    )
};

export default SingleMeal;