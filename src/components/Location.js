import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import GoogleMap from './GoogleMap'

class Location extends React.Component{

    render(){
        return (
            <div className={'top'}>
                <Row className={'top'}>
                    <h3>The Neighborhood</h3>
                </Row>
                <Row className={'top'}>
                    <GoogleMap />
                </Row>

                <Row className={'top'}>
                    <h3>NearBy Houses</h3>
                </Row>
                <Row className={'top'}>
                    <Col md={4}>
                        <Card>
                            <Card.Img src={ require('./images/11.jpg') } fluid />
                            <h4 className={'centre'}>Union Street</h4>
                            <Card.Text>1 bed available</Card.Text>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card >
                            <Card.Img src={ require('./images/10.jpg') } fluid />
                            <h4 className={'centre'}>Powell Street</h4>
                            <Card.Text>1 bed available</Card.Text>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Location;
