import React, {Component} from 'react';
import {Col, Row} from "reactstrap";
import Video from '../../../assets/videos/video-2.mp4'
import './style.scss';

class App extends Component {
    render() {
        return (
            <Row className={"about-donation m-0"}>
                <Col md={6}>
                    <p className={"normal-head-font"}>About Easy Donations</p>
                    <p className={"normal-sub-font"}>
                    “Easy Donation”.  is a web platform which assists to fulfill hospital requirements through donations. In this web platform, basically let the users who are hospitals, vendors and donors to get registered with the platform. Where they can make their own donation requirements’ requests and do donations. Registered hospitals can make their own preferences and they can mention their budget and the donation requirement needs. 
                    </p>
                </Col>
                <Col md={6}>
                    <video width="100%" height="" controls>
                        <source src={Video} type="video/mp4"/>
                    </video>
                </Col>
            </Row>
        );
    }
}

export default App;
