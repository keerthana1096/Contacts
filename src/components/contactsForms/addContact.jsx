import React from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import addContacts  from '../../actions/addContacts';
import { Route, Link, Switch ,   Redirect } from "react-router-dom";
import Contacts from '../contacts/contacts';
import axios from 'axios';
class AddContact extends React.Component{
constructor(props){
    super(props)
        this.state={
            name:"",
            email:"",
            PhoneNumber:"",
            Company:"",
            Address:""

        }
    
    }
    submitForm=()=>{
     var res=addContacts(this.state,1);
     return(<Redirect to="/contact"/>)
        }
render(){
    return(<div><br/>
    <br/>

        <form >
            <Paper>
               <center><h3>Add contact details</h3></center> 
                <br/>
                <br/>
            <Grid container spacing={1}>
                <Grid xs={1}/>
                <Grid xs={5}>
        <TextField placeholder=" Enter Contact name"  variant="outlined" onChange={(value)=>{this.setState({name:value},()=>console.log(this.state.name))}} /><br/>
        <TextField placeholder=" Enter Contact email"  variant="outlined" onChange={(value)=>{this.setState({email:value},()=>console.log(this.state.email))}} /><br/>
        <TextField placeholder="Enter  Contact company"  variant="outlined" onChange={(value)=>{this.setState({company:value},()=>console.log(this.state.Company))}} />
        </Grid>
        <Grid xs={5}>
        <TextField placeholder="Enter Contact Phonenumber"  variant="outlined" onChange={(value)=>{this.setState({PhoneNumber:value},()=>console.log(this.state.PhoneNumber))}} /><br/>
        <TextField placeholder="Enter  Contact address"  variant="outlined" onChange={(value)=>{this.setState({Address:value},()=>console.log(this.state.Address))}} />
        </Grid>
        </Grid>
        <button onClick={this.submitForm}>Submit</button>
        </Paper>
        </form>
        <Switch>
        <Route path="/contact" exact strict component={Contacts}/>
         </Switch>
    </div>)
}
}
export default AddContact