import React from 'react';
import { Main } from './components/Main';
import { User } from './components/User';
import { connect } from 'tls';


class App extends React.Component {
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
        {/* redux uses props and populates it. From the userReducer in index.js, there's a property named "name" and "age" we can now access */}
        <User username={this.props.user1.name} />
      </div>
    );
  }
}

// this function allows redux to connect with components but you also need another function called connect() to connects react.js with redux
const mapStateToProps = (state) => {
  return {
    user1: state.userReducerGuy,
    math1: state.mathReducerGuy
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => {
      dispatch({
        type: "SET_NAME",
        payload: name
      })
    }
  }
}

//don't need to export default the App in this class. We can now do it this way below
export default connect(mapStateToProps, mapDispatchToProps)(App)
