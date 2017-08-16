import React, {Component} from 'react'
import { Input, Form, Button, Grid } from 'semantic-ui-react'

import db from './database'
import Messages from './messages'

export default class App extends Component 
{
    collection = db('messages')
    
    constructor(props) {
        super(props);
        
        this.state = {
            author: false,
            text: false,
        };
    }
    
    handleChangeAuthor(event) {
        this.setState({author: event.target.value});
    }
    
    handleChangeText(event) {
        this.setState({text: event.target.value});
    }
    
    sendMessage() {
        if(this.state.text === false || this.state.author === false) {
            //this.setState({text: 'Invalid Submission'});
            alert("Invalid message submission");
            return;
        }
        
        let message = {
            text: this.state.text,
            author: this.state.author
        };
        
        this.collection.store(message);
    }
    
    render() {
        return (
            <Grid.Row>
                <Grid.Column>
                    <Messages chat={this.collection} />
                </Grid.Column>
                <Grid.Column>
                    <Form>
                        <Input
                            onChange={this.handleChangeAuthor.bind(this)}
                            placeholder='By'/>
                        <Input
                            onChange={this.handleChangeText.bind(this)}
                            placeholder='write a message here'/>
                        <Button 
                            compact={true}
                            onClick={this.sendMessage.bind(this)}
                            content='Send Message' />
                    </Form>
                </Grid.Column>
            </Grid.Row>
        );
    }
}