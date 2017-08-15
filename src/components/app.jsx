import React, {Component} from 'react'

export default class App extends Component {
    render() {
        return (
            <div>
                <form>
                    <div className='center'>
                        <button>Send Message</button>
                        <input placeholder='By'></input>
                        <input placeholder='write a message here'></input>
                    </div>
                </form>
                <Messages />
            </div>
        );
    };
}