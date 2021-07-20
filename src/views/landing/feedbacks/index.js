import React, {Component} from 'react';
import {Col, Row} from "reactstrap";
import './style.scss';

class App extends Component {
    render() {
        return (
            <Row className={"feedbacks m-0"}>
                <Col xs={12}>
                    <center>
                        <p className={"normal-head-font"}>Feedbacks</p>
                        <br/><br/>
                    </center>
                </Col>
                <Col sm={6} md={4}  >
                    <div className={"card"}>
                        <div className={"user"}>
                            <img src={"https://fortify-asia.com/static/media/image_1.39a73962.png"} alt={"user"} />
                        </div>
                        <p className={"head-font"}>Alex</p>
                        <p className={"sub-font"}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                            the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                            of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                            but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                </Col>
                <Col sm={6} md={4}>
                    <div className={"card"}>
                        <div className={"user"}>
                            <img src={"https://fortify-asia.com/static/media/image_4.492d8d39.png"} alt={"user"} />
                        </div>
                        <p className={"head-font"}>Jhon</p>
                        <p className={"sub-font"}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                            the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                            of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                            but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                </Col>
                <Col sm={6} md={4}>
                    <div className={"card"}>
                        <div className={"user"}>
                            <img src={"https://fortify-asia.com/static/media/boy-3.502e74bd.jpg"} alt={"user"} />
                        </div>
                        <p className={"head-font"}>James</p>
                        <p className={"sub-font"}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                            the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                            of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                            but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                </Col>
            </Row>
        );
    }
}

export default App;
