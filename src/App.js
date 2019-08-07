import React from 'react';
import { connect } from 'react-redux'
import Main from "./components/public/main"


class AppContainer extends React.Component {

  render() {
    const { isLoggedIn } = this.props.authentication;
    return <App isLoggedIn={isLoggedIn} />
  }
}


function App({ isLoggedIn }) {


  return (

    <div className="App">

      {isLoggedIn ? "logged in" : <Main />}


    </div>
  );
}

const mapStateToProps = state => {
  return {
    authentication: state.authentication
  }
}

export default connect(mapStateToProps, {})(AppContainer);
