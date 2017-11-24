import React, { Component } from 'react';
import { Route } from 'react-router'
import Dashboard from './Components/Dashboard';
import NewsList from './Components/News';
import NewsDetail from './Components/News/detail';
import Navigation from "./navigation";




class App extends Component {
  render() {
    return (
      
        <div>
          <Navigation context={this.context}/>
          <div>
          <Route exact path="/" component={NewsList} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route path="/newsdetail/:id" component={NewsDetail} />
          </div>
        </div>
    );
  }
}

export default App;
