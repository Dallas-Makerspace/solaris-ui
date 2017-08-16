import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { Icon, Menu, Input, Grid } from 'semantic-ui-react'

export default class AppMenu extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    
    render() {
        return (
             <Menu stackable>
                <Menu.Item as={Link} to='/#!dashboard'>
                   <Icon name="home" />
                </Menu.Item>
                <Menu.Item as={Link} to='/#!user'>
                   <Icon name="user" />
                </Menu.Item>
                
                <Menu.Menu position='right'>
                    <div className='ui right aligned category search item'>
                        <div className='ui transparent icon input'>
                            <Input className='prompt' type='text' placeholder='Search messages...' />
                            <Icon name="search" />
                        </div>
                        <div className='results' />
                    </div>
                </Menu.Menu>
             </Menu>
        );
    }
}
