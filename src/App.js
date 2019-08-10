import React from 'react';
import { connect } from 'react-redux'
import PublicAppRouter from './components/public/routes'
import PrivateAppRouter from './components/private/routes'
import 'antd/dist/antd.css'


class AppContainer extends React.Component {

  render() {
    const { isLoggedIn } = this.props.authentication;
    return <App isLoggedIn={isLoggedIn} />
  }
}


function App({ isLoggedIn }) {


  return (

    <div className="App">

      {isLoggedIn ? <PrivateAppRouter /> : <PublicAppRouter />}


    </div>
  );
}

const mapStateToProps = state => {
  return {
    authentication: state.authentication
  }
}

export default connect(mapStateToProps, {})(AppContainer);
