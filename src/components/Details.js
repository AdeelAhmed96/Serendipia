import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from "react-bootstrap/Image";
import { Card, Icon } from 'semantic-ui-react'


class Details extends React.Component{

    render(){
        return (
            <div className={'top'}>
                <Row className={'top'}>
                    <h3>Sleeping Arrangements</h3>
                </Row>
                <Row className={'top'}>
                    <Col  md={3}>
                        <Card color='teal'>
                            <Row>
                                <Icon name='bed' className='icon' />
                                <Icon name='bed' />
                            </Row>
                            <Card.Header className='text'>Bunk Bed</Card.Header>
                        </Card>
                    </Col>
                    <Col  md={3}>
                        <Card color='teal'>
                            <Icon name='bed' className='icon' />
                            <Card.Header className='text'>Private Room</Card.Header>
                        </Card>
                    </Col>
                </Row>

                <Row className={'top'}>
                    <h3>Amenities</h3>
                </Row>

                <Row className={'top'}>
                    <Col md={3}>
                        <Card>
                            <Icon name='ald' className={'amnIcons'} />
                            <Card.Header className={'amenities'}>Central A.C</Card.Header>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card>
                            <Icon name='theme' className={'amnIcons'} />
                            <Card.Header className={'amenities'}>Heating</Card.Header>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card>
                            <Icon name='window maximize' className={'amnIcons'} />
                            <Card.Header className={'amenities'}>Window Screens</Card.Header>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card>
                            <Icon name='box' className={'amnIcons'} />
                            <Card.Header className={'amenities'}>Stove Top / Oven</Card.Header>
                        </Card>
                    </Col>
                </Row>

                <Row className={'top'}>
                    <Col md={3}>
                        <Card>
                            <Icon name='disk' className={'amnIcons'} />
                            <Card.Header className={'amenities'}>Dishwasher</Card.Header>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card>
                            <Icon name='fly' className={'amnIcons'} />
                            <Card.Header className={'amenities'}>Washer / Dryer</Card.Header>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card>
                            <Icon name='wifi' className={'amnIcons'} />
                            <Card.Header className={'amenities'}>Wifi</Card.Header>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card>
                            <Icon name='microsoft' className={'amnIcons'} />
                            <Card.Header className={'amenities'}>Microwave</Card.Header>
                        </Card>
                    </Col>
                </Row>

                <Row className={'top'}>
                    <h3>Meet the housemates</h3>
                </Row>
                <Row className={'top'}>
                    <Col md={4}>
                        <Card>
                            <Image src={ require('./images/4.jpg') } fluid />
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Image src={ require('./images/3.jpg') } fluid />
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Image src={ require('./images/7.jpg') } fluid />
                        </Card>
                    </Col>
                </Row>

            </div>
        );
    }
}

export default Details;
