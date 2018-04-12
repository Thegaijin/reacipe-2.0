import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux'; // Connect react and redux

import history from '../helpers/history';
import Home from '../components/Home';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <Router history={history}>
        {/* <PrivateRoute path="/dashboard" component={Dashboard} /> */}
        <Route exact path="/" component={Home} />
        {/* <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} /> */}
      </Router>
    );
  }
}

// function mapStateToProps(state) {}

// const connectedApp = connect(mapStateToProps)(App);
// export { connectedApp as App };
export default App;
