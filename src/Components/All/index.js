import { Component } from 'react';

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Body from '../Body/index'
import Bottom from '../Bottom/index'
class All extends Component{
    constructor(props) {
        super(props)
        this.state = {
            total:0
            
        }
    }
    Callprac = () => {
        console.log("callfromparent")
        let count = document.querySelectorAll('.item').length
        console.log(count)
        this.setState({
            total:count
        })

    }
    componentDidMount() {

    }
  render() {
      console.log(this.props.match.path)
        return (
          <div>
            <Body num={this.state.total}></Body>
            <Bottom call={this.Callprac}></Bottom>
          </div>
        );
    }
}


export default All;