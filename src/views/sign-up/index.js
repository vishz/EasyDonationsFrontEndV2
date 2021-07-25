// import React, {Component} from 'react';

// class App extends Component {
//     render() {
//         return (
//             <div>
//                 Login
//             </div>
//         );
//     }
// }

// export default App;

import React, {useEffect, useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function App() {

  const classes = useStyles();

  const [formData, setFormData] = useState({
    name: '',
    userName:'',
    address:'',
    email:'',
    mobileNumber:'',
    password:'',
    role:'',
    categoryName:''
  });
const [password2, setPassword2] = useState('')
  const {name, userName, address, email, mobileNumber,password, role, categoryName} = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const checkPassword = (e)=>{
    setPassword2(e.target.value);
    
  }

  const onSubmit = async() => {
    // if(password2!==password) alert('Mismatch Password')
    // const config = {
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   };
      // console.log(formData)
      console.log("haii")
  //     const res = await fetch('http://localhost:8090/api/easyDonations/signUp', {
	// 	method: 'POST',
	// 	headers: {
	// 		Accept: 'application/json',
	// 		'Content-Type': 'application/json',
	// 	},
	// 	body: formData,
	// });
    const res = await axios.post(`signUp`, formData);
    console.log(res)
}

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form}>
          <Grid container spacing={2}>

          <Grid item xs={12} sm={6}>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label2">User Role</InputLabel>
                    <Select
                    labelId="demo-simple-select-label2"
                    id="demo-simple-select2"
                    name='role'
                    value={role}
                    onChange={onChange}
                    >
                    <MenuItem value={'DONOR'}>DONOR</MenuItem>
                    <MenuItem value={'VENDOR'}>VENDOR</MenuItem>
                    <MenuItem value={'HOSPITAL'}>HOSPITAL</MenuItem>
                    <MenuItem value={'ADMIN'}>ADMIN</MenuItem>
                    </Select>
                </FormControl>
            </Grid>

            <Grid item xs={12} >
              <TextField
                name="name"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                value ={name}
                label="Name"
                onChange={onChange}
              />
            </Grid>

            <Grid item xs={12} >
              <TextField
                name="userName"
                variant="outlined"
                required
                fullWidth
                onChange={onChange}
                id="userName"
                value={userName}
                label="User Name"
              />
            </Grid>
            
            <Grid item xs={12} >
              <TextField
                variant="outlined"
                required
                fullWidth
                id="address"
                onChange={onChange}
                label="Address"
                name="address"
                value={address}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                onChange={onChange}
                id="email"
                value={email}
                label="Email Address"
                name="email"
              />
            </Grid>

            <Grid item xs={12} >
              <TextField
                name="mobileNumber"
                variant="outlined"
                required
                fullWidth
                onChange={onChange}
                value={mobileNumber}
                id="mobile"
                label="Mobile"
              />
            </Grid>
            <Grid item xs={12}sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                onChange={onChange}
                name="password"
                label="Password"
                type="password"
                value={password}
                id="password"
              />
            </Grid>
            <Grid item xs={12}sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password2"
                label="Confirm Password"
                type="password"
                id="confirm-password"
                value={password2}
                onChange={checkPassword}
              />
            </Grid>           

            <Grid item xs={12} sm={6}>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                    <Select
                    name='categoryName'
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={categoryName}
                    onChange={onChange}
                    >
                    <MenuItem value={'GOVERNMENT'}>GOVERNMENT</MenuItem>
                    <MenuItem value={'PRIVATE'}>PRIVATE</MenuItem>
                    <MenuItem value={'SEMI-GOVERNMENT'}>SEMI-GOVERNMENT</MenuItem>
                    <MenuItem value={'PHARMACY'}>PHARMACY</MenuItem>
                    <MenuItem value={'SUPERMARKET'}>SUPERMARKET</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={onSubmit}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
      </Box>
    </Container>
  );
}
