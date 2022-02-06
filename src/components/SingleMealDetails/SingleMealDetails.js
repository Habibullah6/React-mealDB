import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleMealDetails = (props) => {
    const {strMeal, strInstructions, strMealThumb} = props.detail;
    return ( 
    <div>
    <Row xs={1} md={2} className="g-4 p-4">
    <Col className='mx-auto my-3'>
    <Card>
    <Card.Img variant="top" src={strMealThumb}/>
    <Card.Body>
    <Card.Title>{strMeal}</Card.Title>
    <Card.Text>
      {strInstructions.slice(0, 150)}
    </Card.Text>
    <Link to="/not-found">
      <Button>know something</Button>
    </Link>
    </Card.Body>
    </Card>
    </Col>
    </Row>
    </div>
    );
};

export default SingleMealDetails;