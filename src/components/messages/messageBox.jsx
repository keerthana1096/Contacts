import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import patchMessages from '../../actions/updateMessages';
import { Route, Link, Switch } from "react-router-dom";
import Contacts from '../contacts/contacts';
import MessageConfirmation from './messageConfirmation';

class MessageBox extends React.Component{
    constructor(props){
        super(props);

        console.log("Message component props",props)

        this.state={
            data:"",
            messages:[''],
            reply:"",
            id:props.location.id,
            name:props.location.reciver

        }
        console.log("receiveer props",this.state.name)
    }
    componentDidMount() {
        console.log(this.state.id)
     axios.get("http://localhost:3000/Users/?id="+this.state.id).then((response)=>{
         console.log(response.data[0].messages[0].message)
         this.setState({
             data:response.data[0],
             messages:response.data[0].messages
         },console.log(this.state.messages))
     })
    }
  update=(e)=>{
      this.setState({
        reply:e.target.value
      },()=>console.log("reply",this.state.reply))
  }
  handleUpdate=()=>{
      var Username;
      if(this.state.name!=""?Username=this.state.name:Username=this.state.messages[0].sentBy)
  var Response=patchMessages(Username,this.state.data.Username,this.state.reply);
  this.props.history.push({pathname:"/confirmation",res:Response})
  }
    render(){
   
        return(<div>
            <br/>
            <br/>
    <Grid container spacing={1}>
           
    {this.state.name!=null?<div><Card>{this.state.name}<br/><form >
            <input type="textbox" name="reply" placeholder="place your message her" onChange={this.update}></input>
            <button onClick={this.handleUpdate}>Send</button>
            </form></Card></div>:<Card>
           {this.state.messages!=""?(this.state.messages.map((i,key)=>{return(<div> <h3>{i.sentBy}</h3>
            {i.message}<br/> <form >
            <input type="textbox" name="reply" placeholder="place your message her" onChange={this.update}></input>
            <button onClick={this.handleUpdate}>Send</button>
            </form></div>)})):<h4>error</h4>}<br/>
            <br/>
           
            </Card>}
            
                </Grid>
                <Switch>

  
  <Route path="/contact" exact strict component={Contacts}/>
  <Route path="/confirmation" exact strict component={MessageConfirmation}/>
  

</Switch>
        </div>)
    }
}
export default MessageBox;