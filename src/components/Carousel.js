import Carousel from 'react-bootstrap/Carousel'
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from "react-bootstrap/Card";

import { Button, Header, Image, Modal } from 'semantic-ui-react'
import ModalImage from "react-modal-image";

// const ModalImage = () => (
//     <Modal trigger={<Button>Show Modal</Button>}>
//         <Image wrapped size='large' src={require('./images/11.jpg')} />
//     </Modal>
// )

class Demo extends React.Component {
    state = {
        options: [
            { text: 'doNothing', value: 'doNothing' },
            { text: 'openModal', value: 'openModal' }
        ],
        open: false
    };

    onClose = () => this.setState({open: false});
    onChange = (selected) => {
        // if the correct one is selected then...
        // this.setState({open: true});
    }

    render() {
        return (
            <div>
                <Modal open={this.state.open} onClose={this.onClose}>
                    <Modal.Header>Select a Photo</Modal.Header>
                    <Modal.Content image>
                        <Modal.Description>
                            <p>Some contents.</p>
                        </Modal.Description>
                    </Modal.Content>
                </Modal>
            </div>
        )
    }
}

function ControlledCarousel() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        setDirection(e.direction);
    };

    const modal = ''

    return (
        <div className={'top'}>
            <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        //onClick={this.modal}
                        className="d-block w-100"
                        src={require('./images/9.jpg')}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={require('./images/10.jpg')}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={require('./images/11.jpg')}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <ModalImage
                small={require('./images/11.jpg')}
                large={require('./images/11.jpg')}
            />

        </div>

    );
}

export default ControlledCarousel;
