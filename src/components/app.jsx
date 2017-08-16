import React, {Component} from 'react'
import { Container, Grid, Segment } from 'semantic-ui-react'

import Messages from './messages'
import AppMenu from './menu'
import Home from './home'

export default class App extends Component 
{
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
          <Container>
             <AppMenu/>
             <Segment stacked></Segment>
             <Grid columns={2} divided>
                <Home/>
            </Grid>
          </Container>
        );
    }
}