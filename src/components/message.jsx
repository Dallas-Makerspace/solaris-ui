import React, { Component } from 'react'
import { Feed, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


export default class Message extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  
  render() {
    return (
      <Feed.Event>
        <Feed.Label>
          <Icon name="comment"/>
        </Feed.Label>
        <Feed.Content>
          <Feed.Summary><Link to={ "/#!user/" + this.props.msg.author}>{this.props.msg.author}</Link></Feed.Summary>
          <Feed.Extra text>{this.props.msg.text}</Feed.Extra>
        </Feed.Content>
      </Feed.Event>
    );
  }
}