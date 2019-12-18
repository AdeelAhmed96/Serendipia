import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Description from './Description'
import  './style.css'
import Card from "react-bootstrap/Card";

class Images extends React.Component{

    render(){
        return (
            <Container class='container'>
                <Row>
                    <Card>
                        <Card.Img src={ require('./image.jpg') } fluid />
                    </Card>
                </Row>
                <Row>
                    <Col xs={4} md={4}>
                        <Card  className='left'>
                            <Card.Img src={ require('./image.jpg') } fluid />
                        </Card>
                    </Col>
                    <Col xs={4} md={4}>
                        <Card>
                            <Card.Img src={ require('./image.jpg') } fluid />
                        </Card>
                    </Col>
                    <Col xs={4} md={4}>
                        <Card  className='right'>
                            <Card.Img src={ require('./image.jpg') } fluid />
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Description />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Images;