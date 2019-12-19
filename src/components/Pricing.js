import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import  './style.css'

class Pricing extends React.Component{

    render(){
        return (
            <div className={'top'}>
                <Card body>
                    <Row className={'top'}>
                        <Col>
                            <h3>$721/Month</h3>
                        </Col>
                    </Row>

                    <Row className={'top'}>
                        <Col md={6}>
                            Check In
                        </Col>
                        <Col md={6}>
                            Check Out
                        </Col>
                    </Row>

                    <Row className={'top'}>
                        <Col md={6}>
                            <Form className='form'>
                                <Form.Control type="text" placeholder="mm/dd/yyyy" />
                            </Form>
                        </Col>
                        <Col md={6}>
                            <Form className='form'>
                                <Form.Control type="text" placeholder="mm/dd/yyyy" />
                            </Form>
                        </Col>
                    </Row>

                    <Row className={'top'}>
                        <Col md={6}>
                            Accommodation
                        </Col>
                        <Col md={6}>
                            $845
                        </Col>
                    </Row>

                    <Row className={'top'}>
                        <Col md={6}>
                            Service Fee
                        </Col>
                        <Col md={6}>
                            $75
                        </Col>
                    </Row>

                    <Row className={'top'}>
                        <Col md={6}>
                            Total
                        </Col>
                        <Col md={6}>
                            $920
                        </Col>
                    </Row>

                    <Row className={'top'}>
                        <Col md={4}></Col>
                        <Col>
                            <Button variant="secondary">Apply</Button>
                        </Col>
                    </Row>

                </Card>
            </div>
        );
    }
}

export default Pricing;
