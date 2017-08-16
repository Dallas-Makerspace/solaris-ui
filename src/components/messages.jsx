import React, { Component } from 'react'
import { Grid, Feed }  from 'semantic-ui-react'

import Message from './message'

export default class Messages extends Component {
    constructor(props) {
        super(props);
        this.chat = props.chat;
        this.state = {
            convo: []
        };
  }
  
  componentDidMount() {
      this.chat.watch().subscribe(
          (messages) => {
              let convo = messages.map(function(message) {
                  return message;
              });
              
              this.setState({convo: convo});
          },
          (err) => {
              console.log(err);
          });
  }
  
  render() {
      let msgsjsx = this.state.convo.map(function(message, i) {
          return (<Message msg={message} key={i} />);
      });
      
      return ( <Feed> {msgsjsx} </Feed> );
      
  }
}