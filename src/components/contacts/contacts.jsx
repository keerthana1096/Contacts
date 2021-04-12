import React from 'react';
import Card from '@material-ui/core/Card';

import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import '../../styles/contacts.css';
import SearchBar from "material-ui-search-bar";
import { Route, Link, Switch } from "react-router-dom";
import AddContact from '../contactsForms/addContact';
import ContactCard from './contactCard';

class Contacts extends React.Component {
    constructor(props) {
        super(props);
        console.log("Contacts props", props)

        this.state = {
            data: "",
            messages: [''],
            searchValue: "",
            resultData: "",
            id: props.location.id
        }
    }
    onChange = (value) => {
        this.setState({
            searchValue: value
        }, () => console.log(this.state.searchValue))
        console.log("on change is called", event.target.value);

    }


    handleChange = () => {
        console.log(this.state.data[0].name)
        var newlyDisplayed = this.state.data.filter(data => (data.name.toLowerCase().includes(this.state.searchValue.toLowerCase())));
        console.log("result", newlyDisplayed)
        this.setState({
            resultData: newlyDisplayed
        })
    }
    handleClose = () => {
        this.setState({
            searchValue: " "
        }, () => console.log(this.state.searchValue))

    }

    componentDidMount() {
        axios.get("http://localhost:3000/Users/?id=" + this.state.id).then((response) => {
            console.log(response.data[0].contacts)
            this.setState({
                data: response.data[0].contacts
            })
        })
    }

    render() {


        return (<div>

            <Grid container spacing={1}>
                <Grid item xs={3} />
                <Grid item xs={6}>
                    <p className="title">Contacts <Link to="/addcontact"><button className="addButton" >AddContacts</button></Link></p>

                    <SearchBar
                        placeholder='Please click enter after typing '
                        value={this.state.searchValue}
                        onCancelSearch={this.handleClose}
                        onChange={(value) => this.onChange(value)}
                        onRequestSearch={this.handleChange}
                    />
                    <br />
                    <p>You have recieved some messages <Link to={{ pathname: "/message", id: this.state.id }}><button>Show more</button></Link> </p>
                    <Card>


                        {this.state.data != "" && this.state.searchValue == "" ? (<div>
                            {this.state.data.map((i, key) => {
                                return (<div><Paper className="contacts"><Grid container spacing={1}><AccountCircle /><Grid xs={4}>{i.name}<br /></Grid><Grid container spacing={1}><Grid xs={2} /><Grid xs={4}>{i.email}</Grid><Grid xs={4}>{i.PhoneNumber}</Grid><Link to={{ pathname: "/contactcard", data: i, id: this.state.id }}><button>Open Contact </button> </Link></Grid></Grid></Paper><br /></div>)

                            })}</div>) : this.state.searchValue != "" && this.state.resultData != "" ? (<div>{this.state.resultData.map((i, key) => {
                                return (<div><Paper className="contacts"><Grid container spacing={1}><Grid xs={2} /><AccountCircle /><Grid xs={4}>{i.name}<br /></Grid><Grid container spacing={1}><Grid xs={2} /><Grid xs={4}>{i.email}</Grid><Grid xs={4}>{i.PhoneNumber}</Grid><Link to={{ pathname: "/contactcard", name: i.name, id: this.state.id }}><button>Open Contact </button> </Link></Grid></
                                Grid></Paper><br /></div>)

                            })}</div>) : <h5>Loading or no results found</h5>}



                    </Card>
                </Grid>
                <Grid item xs={3} />
            </Grid>
            <Switch>
                <Route path="/addcontact" exact={true} component={AddContact} />
                <Route path="/contactcard" exact strict component={ContactCard} />

            </Switch>

        </div>)
    }
}
export default Contacts;