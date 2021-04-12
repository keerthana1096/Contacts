//React Imports
import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import MailIcon from '@material-ui/icons/Mail';
import AccountCircle from '@material-ui/icons/AccountCircle';

import MoreIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import AddContact from './contactsForms/addContact';
import Contacts from './contacts/contacts'
import MessageBox from './messages/messageBox';
import MessageConfirmation from './messages/messageConfirmation'
import Home from './home';
import ContactCard from './contacts/contactCard'

const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  accountCircle: {
    marginLeft: 0,
    marginRight:0,
    fontSize: 50,
    marginTop: 5,
    color:"white",
               }
});

class NavBar extends React.Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
    data:"",
    messages:""
  };
componentDidMount(){
  axios.get('http://localhost:3000/Users').then((response)=>{
    this.setState({
      data:response.data
    },()=>console.log("users data",this.state.data))
  })
}

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
  
    this.setState({ anchorEl: null });
    
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  render() {
    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
   
    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
       
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
      {this.state.data!=""? (this.state.data.map((i,key)=>{return(<div><Link to={{pathname:"/contact",id:i.id}}><MenuItem onClick={this.handleMenuClose} style={{textDecoration:"none",color:"black"}}>{i.Username}</MenuItem></Link></div>)})):null }
       
      </Menu>
    );
  
    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={this.handleMobileMenuClose}
      >
             {this.state.data!=""? (this.state.data.map((i,key)=>{return(<div><Link to={{pathname:"/contact",id:i.id}}><MenuItem onClick={this.handleMenuClose} style={{textDecoration:"none",color:"black"}}>{i.Username}</MenuItem></Link></div>)})):null }
       
               
               

              
    
       </Menu>
    );

    return (
      <div className={classes.root}>
        <AppBar position="static" style={{backgroundColor:"rgb(194, 71, 142)"}}>
          <Toolbar>
            <Typography className={classes.title} variant="title" color="inherit" noWrap>
        <Link to={{pathname:"/contacts",id:"1"}}>   <h3 style={{textDecoration:"none",color:"white"}}>PhoneBook</h3></Link>
            </Typography>
           
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
            
              <IconButton
                aria-owns={isMenuOpen ? 'material-appbar' : null}
                aria-haspopup="true"
                onClick={this.handleProfileMenuOpen}
                //color="white"
              >
               
                 <AccountCircle className={classes.accountCircle} /> 
                
                </IconButton>
              
              
              </div>
               <div> 
             
              </div>
            <div className={classes.sectionMobile}>
              <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMenu}
        {renderMobileMenu}

<Switch>
<Route path="/" exact strict component={Home} />
  <Route path="/addcontact" exact strict component={AddContact}/> 
  <Route path="/contact" exact strict component={Contacts}/>
  <Route path="/message" exact strict component={MessageBox}/>
  <Route path="/confirmation" exact strict component={MessageConfirmation}/>
  <Route path="/contactcard"  exact strict component={ContactCard}/>
</Switch>

     
      </div>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
