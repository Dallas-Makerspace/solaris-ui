import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { Icon, Menu, Input, Grid } from 'semantic-ui-react'

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    
    render() {
        return (
            <Grid.Row>
                <Grid.Column>
                    <div> Hello World </div>
                </Grid.Column>
            </Grid.Row>
        );
    }
}