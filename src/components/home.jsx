import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Contacts from './contacts/contacts.jsx';
import { Route, Link, Switch } from "react-router-dom";
import AddContact from './contactsForms/addContact'
import MessageBox from './messages/messageBox';
class Home extends React.Component{
    constructor(props){
        super(props)
        
        this.state={
            id:props.location.id
        }
    }
    render(){
        return(<div><br/>
        <br/>
        <br/>
        <br/>

            <Grid container spacing={1}>
                <Grid xs={2}/>
                <Grid xs={8}>
                   <Card>
                    <center><h3>Welcome to PhoneBook</h3></center><br/>
                    <p>Please select the user for displaying of contacts</p>
                   </Card>
                    
                </Grid>
               <Grid xs={1}/>
               
            </Grid>
            <Switch>
  <Route path="/AddContact" exact={true} Component={AddContact}/>

</Switch>
        </div>)
    }
}
export default Home