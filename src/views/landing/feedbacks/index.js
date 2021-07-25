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
                            <img src={"https://media-exp1.licdn.com/dms/image/C4E03AQGkJgrlHlOPaQ/profile-displayphoto-shrink_200_200/0/1586243318150?e=1632960000&v=beta&t=7QpXOZeGnle2HQ0CKnGQHN5hENduJyvcj_RFOjHyOgA"} alt={"user"} />
                        </div>
                        <p className={"head-font"}>Kavishi</p>
                        <p className={"sub-font"}>This is a very useful platform to do donations very easily
                        This website helps to save our time and get to know the exact requiremnts in hospitals.
                        Since the Donation process is becoming more easy and convinient at the sametime more trustworthy, we are persuaded to do
                        more and more donations.Thank you Easy Donations</p>
                    </div>
                </Col>
                <Col sm={6} md={4}>
                    <div className={"card"}>
                        <div className={"user"}>
                            <img src={"https://avatars.githubusercontent.com/u/51959423?v=4"} alt={"user"} />
                        </div>
                        <p className={"head-font"}>Pathumi</p>
                        <p className={"sub-font"}>Thank you Easy Donations.This is a very useful platform to do donations very easily
                        This website helps to save our time and get to know the exact requiremnts in hospitals.
                        Since the Donation process is becoming more easy and convinient at the sametime more trustworthy, we are persuaded to do
                        more and more donations.</p>
                    </div>
                </Col>
                <Col sm={6} md={4}>
                    <div className={"card"}>
                        <div className={"user"}>
                            <img src={"https://d3p2qewzsoh75c.cloudfront.net/uploads/speakers/200/4bf5423639118fe9335b7050c592a916.jpg"} alt={"user"} />
                        </div>
                        <p className={"head-font"}>Perera</p>
                        <p className={"sub-font"}>Since the Donation process is becoming more easy and convinient at the sametime more trustworthy, we are persuaded to do
                        more and more donations.Thank you Easy Donations.This is a very useful platform to do donations very easily
                        This website helps to save our time and get to know the exact requiremnts in hospitals.
                        </p>
                    </div>
                </Col>
            </Row>
        );
    }
}

export default App;
