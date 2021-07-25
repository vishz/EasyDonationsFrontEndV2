import React, {Component} from 'react';
import {Col, Row} from "reactstrap";
import Video from '../../../assets/videos/video-1.mp4'
import './style.scss';

class App extends Component {
    render() {
        return (
            <Row className={"donation-steps m-0"}>
                <Col md={6}>
                    <p className={"normal-head-font"}>Steps to Follow</p>
                    <p className={"normal-sub-font"}>Step 01 - <span>Sign Up to the system as a Donor, Vendor,Hospital or Admin
                    </span></p>
                    <p className={"normal-sub-font"}>Step 02 - <span>Log In to the Relevant dashboard by entering correct user name and password
                    </span></p>
                    <p className={"normal-sub-font"}>Step 03 - <span>If Donor ,choose donation option and do a donation to exact donation requirements
                    </span></p>
                    <p className={"normal-sub-font"}>Step 04 - <span>If Vendor, submit budgets for relevant donation requirements
                    </span></p>
                    <p className={"normal-sub-font"}>Step 05 - <span>If Hospital, submit Donations requirements.
                    </span></p>
                    <p className={"normal-sub-font"}>Step 06 - <span>If admin, see all important details of the processes happening in the platform
                    </span></p>
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
