import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import All from '../All'

class ScenicSpot extends Component{
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  componentDidMount() {

  }
  render() {
    console.log(this.props.match)
    return (
      <div>
        <h1>ScenicSpot</h1>
          <Router>
              <Switch>
                <Route exact path="/scenicSpot" component={All}></Route>       
              </Switch>
          </Router>
      </div>
    );
  }
}

export default ScenicSpot