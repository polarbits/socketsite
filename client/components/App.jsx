import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';
import { browserHistory} from 'react-router';
import Login from './Login.jsx';
import Register from './Register.jsx';
import TodoApp from './TodoApp.jsx';
import 'bootstrap/dist/css/bootstrap.css';

export default class App extends React.Component {
    render() {
        return (
        <Router history={ browserHistory }>
        <div className="container">
          <Route exact path="/" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/sockets" component={TodoApp} />
        </div>
          </Router>
            // <div className="container" style={{textAlign: 'center'}}>
            // <h1>Hello Worlds </h1>
            // </div>
        );
    }
}
