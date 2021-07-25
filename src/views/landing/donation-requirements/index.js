import React,{Component} from 'react';
import './style.scss'
import {Col, Row} from "reactstrap";
import * as config from "../../../const/config";
import {withRouter} from "react-router";
import axiosPublic from "../../../axios/axios_public";
import DonateNow from "../../../components/donate-now";

let VIEW_ALL_OPEN_REQUIRMENT_API = `landingPage/viewOpenRequirements`;


class App extends Component{
    state = {
      list: [
          {item:"Instrument Sterilizer", qty: "Hospital1", imgUrl: "https://www.narang.com/autoclave-sterilizers/instrument-sterilizers-ss/images/instruments-sterilizers-elec-se311.jpg"},
          {item:"Hospital Bed", qty: "Hospital2", imgUrl: "https://cdn.shopify.com/s/files/1/1912/5817/articles/how-to-start-hospital-equipments-business-in-nigeria.jpg?v=1518511155"},
          {item:"Medical Cabinet", qty: "Hospital3", imgUrl: "https://res.cloudinary.com/healthmanagement-org/image/upload/v1609410747/pr/00257121_pr_image.jpg"},
          {item:"ECG Machine", qty: "Hospital4", imgUrl: "https://www.narang.com/diagnostic-equipments-products/ecg-machine/images/digital-3-6-channel-ecg-dp2030.jpg"},
          {item:"Digital Blood Pressure Monitor", qty: "Hospital5", imgUrl: "https://www.narang.com/diagnostic-equipments-products/digital-blood-pressure-monitor/images/digital-blood-pressure-monitor-dp2057.jpg"},
          {item:"Medical Refrigerators", qty: "Hospital6", imgUrl: "https://www.narang.com/medical-freezers-refrigerators/freezers/images/freezers.jpg"},
          {item:"Anesthesia Machine With Multiple Working Modes", qty: "1Hospital2", imgUrl: "https://www.narang.com/anaesthesia-equipments-products/anesthesia-machine/images/anesthesia-machine-an312.jpg"},
          {item:"Sphygmomanometer", qty: "Hospital2", imgUrl: "https://www.narang.com/diagnostic-equipments-products/sphygmomanometers-spares/images/sphygmomanometer-mercurial-sp001.jpg"},
      ],isDonate: false
    };
    componentDidMount() {
        axiosPublic.get(VIEW_ALL_OPEN_REQUIRMENT_API)
            .then(response => {
                if(response.data.success) {
                    this.setState({
                        list: response.data.body
                    })
                }
            })
            .catch(err => {

            })
    }
    render() {
        let {list,isDonate} = this.state;
        let {isLanding} = this.props;
        return (
            <div className={`donation-requirements ${!isLanding ? `margin-wrapper`:``}`}>
                <center>
                    <p className={"normal-head-font"}>{isLanding ? "Donation Requirements":null}</p>
                </center>
                <Row className={"m-0"}>
                    {
                        list.length !== 0 ?
                            list.map((obj,index)=>{
                                if(isLanding && index > 5) return;
                                return <Col sm={6} md={4} key={index}>
                                    <div className={"card"}>
                                        <img src={obj.imgUrl} />
                                        <p className={"head-font"}>{`ITEM: ${obj.item}`}</p>
                                        <p className={"sub-font"}>{`HOSPITAL: ${obj.qty}`}</p>
                                        <button className={"donate-btn"} onClick={()=>this.setState({isDonate: true})}>Donate Now</button>
                                    </div>
                                </Col>
                            })
                            :null
                    }
                    {isLanding && list.length > 5 ? <button className={"donate-btn common-btn"} onClick={()=>this.props.history.push(`${config.BASE_ROUTE}donation-requirements`)}>See All</button> : null}
                </Row>

                {/* donate now*/}
                {isDonate && <DonateNow closeHandler={()=>this.setState({isDonate: false})}/>}
            </div>
        );
    }
}
export default withRouter(App);
