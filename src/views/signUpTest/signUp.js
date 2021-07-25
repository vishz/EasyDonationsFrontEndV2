import React,{Component} from 'react';
import './signup.css';
import axios from "axios";
import PopUp from './PopUp';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

class Signup extends Component{

    constructor(){
        super();
        this.state = {
            email : "",
            password : "",
            confirmPassword:"",
            name:"",
            mobileNumber:"",
            address1:"",
            position:"DONOR",
            checked:true,
            popup:"false",
            categoryName:"",
            userName:"",
            errors:{
                userName:'',
                name:'',
                // email:'',
                mobileNumber:''
            }
        };
    }
    

    onChange = e => {
        this.setState({
             [e.target.id]: e.target.value 
        });
    }

    handleOptionChange=e => {
        this.setState({
          position: e.target.value
        });
    }

    dropDownChange=e => {
        this.setState({
            categoryName : e.target.value
        })
    }

    nameChange=e => {
        this.setState({
            name : e.target.value
        })
    }

    handleCheck=e=>{ 
        this.setState({
            checked: !this.state.checked
        });
      }

    togglePop = () => {
        this.setState({
            popup: !this.state.popup
        });
    };


    onSubmit = e => {
        e.preventDefault();
        const user = {
            name : this.state.name,
            userName : this.state.userName,
            address : this.state.address1,
            email : this.state.email,
            password : this.state.password,
            mobileNumber : this.state.mobileNumber,
            role : this.state.position,
            categoryName : this.state.categoryName
        };
        // console.log(user);
        axios.post(`http://localhost:8090/api/easyDonations/signUp`,user)
        .then(res => {
            console.log(res);
            console.log(res.data);
            if(res.data.success === true)
                this.props.history.push("/login");
            else{
                alert(res.data.message)
                window.location.reload(true);
            }
        })
    }

    handleChange = (event) => {
        // event.preventDefault();
        const { namex, value } = event.target;
        let errors = this.state.errors;
      
        switch (namex) {
            case 'name': 
                errors.name = 
                value.length < 4
                    ? 'First Name must be 4 characters long!'
                    : '';
                    
                break;
            case 'userName': 
                errors.userName = 
                value.length < 4
                    ? 'Last Name must be 4 characters long!'
                    : '';
                break;
                case 'mobileNumber': 
                errors.mobileNumber = 
                value.length < 10 || value.length>10
                    ? 'Mobile number must be 10 numbers long!'
                    : '';
                break;
            default:
                break;
        }
        
        this.setState({errors, [namex]: value}, ()=> {
            console.log(errors.name)
        })
    }
    
      

    

    render(){
        const checked=this.state.checked;

        return(
            <div className="container" >
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-8 mx-auto">
                        <div className="card card-signin my-5">
                            <div className="card-body">
                                <h5 className="card-title text-center">EASY DONATIONS <br/>Signup</h5>
                                <form className="form-signin" onSubmit={this.onSubmit}>
                                
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-sm">
                                                <div className="form-label-group">
                                                    <input type="text" id="name" name="name" className="form-control" placeholder="Full name" onChange={this.onChange}
                                                        value={this.state.name} onChange={this.nameChange} maxLength="30" required/>
                                                    <label htmlFor= "name">Full Name</label>
                                                    <span id="warn">{this.state.errors.name}</span>
                                                </div>
                                            </div>
                                            <div className="col-sm">
                                                <div className="form-label-group">
                                                    <input type="text" id="userName" name="userName" className="form-control" placeholder="User name" onChange={this.onChange}
                                                        value={this.state.userName}   maxLength="30" required/>
                                                    <label htmlFor= "userName">User Name</label>
                                                    <span id="warn">{this.state.errors.userName}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="container">
                                        <div className="row">
                                            <div className="col-sm">
                                                <div className="form-label-group">
                                                    <input type="email" id="email" name="email" className="form-control" placeholder="Email address"  onChange={this.onChange}
                                                        value={this.state.email} required/>
                                                    <label htmlFor= "email"> Email Address</label>
                                                </div>
                                            </div>
                                            <div className="col-sm">
                                                <div className="form-label-group">
                                                    <input type="number" id="mobileNumber" name="mobileNumber"  className="form-control" placeholder="Mobile number" onChange={this.onChange}
                                                        value={this.state.mobileNumber}    required/>
                                                    <label htmlFor= "mobileNumber">Mobile Number</label>
                                                    <span id="warn">{this.state.errors.mobileNumber}</span>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>

                                    <div className="container">
                                        <div className="row">
                                            <div className="col-sm">
                                                <div className="form-label-group">
                                                    <input type="text" id="address1" name="address1" className="form-control" placeholder="Address Line 1" onChange={this.onChange}
                                                        value={this.state.address1} required/>
                                                    <label htmlFor= "address1">Home Address</label>
                                                </div>
                                            </div>
                                            {/* <div className="col-sm">
                                                <div className="form-label-group">
                                                    <input type="text" id="address2" name="address2" className="form-control" placeholder="Address Line 2" onChange={this.onChange}
                                                        value={this.state.address2} required/>
                                                    <label htmlFor= "address2">Address Line 2</label>
                                                </div>
                                            </div> */}
                                            {/* <div className="col-sm">
                                            <div className="form-label-group">
                                                <input type="text" id="address3" name="address3" className="form-control" placeholder="Address Line 3" onChange={this.onChange}
                                                        value={this.state.address3} required/>
                                                    <label htmlFor= "address3">Address Line 3</label>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>    
                                    

                                    <div className="container">
                                        <div className="row">
                                            <div className="col-sm">
                                                <label className="form-check-label" htmlFor="inlineRadio1">User Type</label>
                                            </div>

                                            <div className="col-sm">
                                                <div className="form-check form-check-inline" >
                                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="ADMIN" onChange={this.handleOptionChange} />
                                                    <label className="form-check-label" htmlFor="inlineRadio1">Admin</label>
                                                </div>
                                            </div>
                                            <div className="col-sm">
                                                <div className="form-check form-check-inline" >
                                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="VENDOR" onChange={this.handleOptionChange} />
                                                    <label className="form-check-label" htmlFor="inlineRadio2">Vendor</label>
                                                </div>
                                            </div>
                                            <div className="col-sm">
                                                <div className="form-check form-check-inline" >
                                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="DONOR" onChange={this.handleOptionChange} />
                                                    <label className="form-check-label" htmlFor="inlineRadio3">Donor</label>
                                                </div>
                                            </div>
                                            <div className="col-sm">
                                                <div className="form-check form-check-inline" >
                                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="HOSPITAL" onChange={this.handleOptionChange} />
                                                    <label className="form-check-label" htmlFor="inlineRadio4">Donor</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <br></br>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-sm">
                                            <div className="form-label-group">
                                        <input type="password" id="password" name="password" className="form-control" placeholder="Password" onChange={this.onChange}
                                            value={this.state.password} required/>
                                        <label htmlFor= "password">Password</label>
                                    </div>  
                                            </div>
                                            <div className="col-sm">
                                            <div className="form-label-group">
                                        <input type="password" id="confirmPassword" name="confirmPassword" className="form-control" placeholder="Confirm Password" onChange={this.onChange}
                                            value={this.state.confirmPassword} required/>
                                        <label htmlFor= "confirmPassword">Confirm Password</label>
                                    </div> 
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-sm">
                                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                    <Select
                    name='categoryName'
                    labelId="categoryName"
                    id="categoryName"
                    value={this.state.categoryName}
                    onChange={this.dropDownChange}
                    style={{minWidth:'140px'}}
                                        
                    >
                    <MenuItem value={'GOVERNMENT'}>GOVERNMENT</MenuItem>
                    <MenuItem value={'PRIVATE'}>PRIVATE</MenuItem>
                    <MenuItem value={'SEMI-GOVERNMENT'}>SEMI-GOVERNMENT</MenuItem>
                    <MenuItem value={'PHARMACY'}>PHARMACY</MenuItem>
                    <MenuItem value={'SUPERMARKET'}>SUPERMARKET</MenuItem>
                    </Select>
                                            </div>

                                    <div className="container">
                                        <div className="row">
                                            <div className="form-check form-check-inline">
                                                {/* handleCheck={this.handleCheck()} */}
                                                <input className="form-check-input" type="checkbox" onChange={this.handleCheck}/>
                                                {/* {this.togglePop} onClick={this.togglePop} */}
                                                <label className="form-check-label" htmlFor="inlineCheckbox1"> By creating an account, you agree to the EASY DONATIONS<a id="policy" href="/policy"> Agreement and Privacy Policy  </a></label>
                                                {this.state.popup ? <PopUp toggle={this.togglePop} /> : null}    
                                            </div>
                                        </div>
                                    </div>
                                    <br></br>
                                    {/* disabled={isEnabled} */}
                                    <button className="btn btn-lg btn-primary btn-block text-uppercase" id="submitbutton"type="submit" disabled={checked} >Sign Up</button>
                                    <br></br>
                                    <a href="/login" className="link">Already have an account? Sign in..</a>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Signup;