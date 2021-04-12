import React from 'react';
import Card from '@material-ui/core/Card';

import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';

import { Route, Link, Switch } from "react-router-dom";
import AddContact from '../contactsForms/addContact';
class ContactCard extends React.Component{
    constructor(props){
        super(props);
        console.log("contact card props props",props)
        this.state={
            id:props.location.id,
            data:props.location.data
        }
      console.log("contact card props",this.state.data)
    }
    // componentDidMount(){
    //     axios.get("http://localhost:3000/Users/?Username="+this.state.id).then((response) => {
    //         console.log(response.data[0].contacts)
    //         this.setState({
    //             data: response.data[0].contacts
    //         })
    //     })
    // }
    render(){
        return(<div>
             <br/>
             <br/>
             <Grid container spacing={1}>
             <Grid xs={2}/>
             <Grid xs={8}>
                 <Card>
               <Grid xs={8}>
               <h4>Contact details</h4>    
            Name:{this.state.data.name}<br/>Email:{this.state.data.email}<br/>Phonenumber:{this.state.data.PhoneNumber}<br/>
               Company:{this.state.data.Company}<br/>Address:{this.state.data.Address}</Grid>

              <br/>
               <Link to={{pathname:"/message",reciver:this.state.data.name,id:this.state.id}}><button >Send Message</button></Link>
                 <br/>
                 </Card>
                 </Grid>
             </Grid>
        </div>)
    }
}
export default ContactCard;