import React from 'react';
import { connect } from 'react-redux'
import PublicAppRouter from './components/public/routes'


class AppContainer extends React.Component {

  render() {
    const { isLoggedIn } = this.props.authentication;
    return <App isLoggedIn={isLoggedIn} />
  }
}


function App({ isLoggedIn }) {


  return (

    <div className="App">

      {isLoggedIn ? "logged in" : <PublicAppRouter />}


    </div>
  );
}

const mapStateToProps = state => {
  return {
    authentication: state.authentication
  }
}

export default connect(mapStateToProps, {})(AppContainer);
