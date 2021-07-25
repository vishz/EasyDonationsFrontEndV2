import React, {Component} from 'react';
import {Col, Row} from "reactstrap";
import Slideshow from '../../../components/slideshow'
import './style.scss';

class App extends Component {
    state = {
      list: [
          {name: "Pathumi", description:"Galle", imgUrl:"https://avatars.githubusercontent.com/u/51959423?v=4"},
          {name: "Kavishi", description:"Ambalangoda", imgUrl:"https://media-exp1.licdn.com/dms/image/C4E03AQGkJgrlHlOPaQ/profile-displayphoto-shrink_200_200/0/1586243318150?e=1632960000&v=beta&t=7QpXOZeGnle2HQ0CKnGQHN5hENduJyvcj_RFOjHyOgA"},
          {name: "Perera", description:"Colombo", imgUrl:"https://d3p2qewzsoh75c.cloudfront.net/uploads/speakers/200/4bf5423639118fe9335b7050c592a916.jpg"},
          {name: "Mithula", description:"Kurunagela", imgUrl:"https://i1.wp.com/www.colombotelegraph.com/wp-content/uploads/2015/05/meee-2.jpg?ssl=1"},
          {name: "Dulinda", description:"Anuradapura", imgUrl:"https://media-exp1.licdn.com/dms/image/C5603AQG2dO-cZpiIMg/profile-displayphoto-shrink_200_200/0/1606651054736?e=1632960000&v=beta&t=AoJZhc_A9mLuKe74I7vPCiR1H_sp-QFLXjKOqKTqnNc"},
          ]
    };
    render() {
        let {list} = this.state;
        return (
            <Row className={"recent-donors m-0"}>
                <Col xs={12}>
                    <center>
                        <p className={"normal-head-font"}>Recent Donors</p>
                    </center>
                </Col>
                <Col md={12}>
                    <Slideshow list={list} autoplay={true}/>
                </Col>
            </Row>
        );
    }
}

export default App;
