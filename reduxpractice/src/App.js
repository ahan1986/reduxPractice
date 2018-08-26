import React, { Component } from 'react';
import { Main } from './components/Main';
import { User } from './components/User';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: 'Andrew'
    }

    this.changeUsername = this.changeUsername.bind(this);
  }

  changeUsername (newName) {
    this.setState({
      username: newName
    });
  }

  render() {
    return (
      <div className='container'>
        <Main changeUsername={this.changeUsername} />
        <User username={this.state.username} />
      </div>
    );
  }
}

export default App;


