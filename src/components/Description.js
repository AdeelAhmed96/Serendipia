import React from 'react';
//import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import  './style.css'
import { FaBox } from "react-icons/fa";
import { Container } from 'semantic-ui-react'
import { Icon } from 'semantic-ui-react'

class Description extends React.Component{

    render(){
        return (
            <div className={'top'}>
                <Row className={'top'}>
                    <h3>Powell Street</h3>
                </Row>
                <Row className={'top'}>
                    <FaBox />
                    <p className={'points'}>North Beach</p>
                </Row>
                <Row className={'top'}>
                    <FaBox />
                    <p  className={'points'}>3 Bathrooms</p>
                </Row>
                <Row className={'top'}>
                    <FaBox />
                    <p  className={'points'}>Dryer/Washer</p>
                </Row>
                <Row className={'top'}>
                    <p>Currently we are operating two hostels branches in Lahore for students and professionals as well. Lahore Hostel johar town branch is located at 158/D Architects Engineers Housing Society, near UCP. Our wapda town branch is located at 147/H1, wapda town. Our all hostels are well furnished and properly managed by the professional staff. Both branches are located at very well known places near major educational institutes and local businesses in the city. We offer ultimate convenience, comfort, cleanliness and cost efficiency best rooms to suit all requirements and budgets for both students and jobholders on rent basis.</p>
                </Row>

            </div>

        );
    }
}

export default Description;
