import React from 'react';
import Header from './components/Header'
import Images from './components/Images'
import Carousel from './components/Carousel'
import Description from './components/Description'
import Details from './components/Details'
import Location from './components/Location'
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import Modal from './components/Modal'
//import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Container } from 'semantic-ui-react'
import  './components/style.css'


class App extends React.Component{

   state = {
       images: ['11.jpg' , '10.jpg' , '9.jpg']
   }

  render(){
    return (
        <div>
            <Header />
            <Container>
                <Row>
                    <Col md={8} >
                        <Modal images={this.state.images} />
                        <Description />
                        <Details />
                        <Location />
                    </Col>
                    <Col  md={4}>
                        <div className={'stuck'}>
                            <Pricing />
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
  }
}

export default App;
