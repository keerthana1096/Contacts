import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import '../../styles/confirmation.css'
class MessageConfirmation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            response: props.res
        }
    }
    render() {
        return (<div>
            <br />
            <br />
            <br />

            <Grid container spacing={1}>
                <Grid xs={2}></Grid>
                <Grid xs={5}>
                    <Card className="Card">
                        {this.state.response == "200" ? <p >Your message was sent</p> : <p> Pending confirmation for  message</p>}
                    </Card>
                </Grid>
            </Grid>


        </div>)
    }
}
export default MessageConfirmation;