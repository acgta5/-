import React, { PureComponent } from 'react';
import Header from './common/header/index.js';
import {Provider} from 'react-redux'
import Home from './pages/home'
import Detail from './pages/detail'
import Login from './pages/login'
import Write from './pages/write'
import {BrowserRouter as Router ,Route} from 'react-router-dom'
import './style.css'
import store from './store/store'
class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
          <Router>
            <Header/>
              <Route exact path="/" component={Home}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/write" component={Write}/>
              <Route exact path="/detail/:id" component={Detail}/>
          </Router>
      </Provider>
    );
  }
}

export default App;
