
import { Component } from 'react';
import TestCom from './Components/TestCom'
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ScenicSpot from './Components/ScenicSpot'
import {Navbar} from './Components/Navbar'
class App extends Component{
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
        console.log(this.props.value)
        return (
            <div>
                <BrowserRouter>
                    <Navbar></Navbar>
                    <Switch>
                        <Route exact path="/scenicSpot" component={ScenicSpot}></Route>
                        <Route path="/scenicSpot/:city" component={TestCom}></Route> 
                    </Switch>
                </BrowserRouter>

            </div>
        );
    }
}


export default App;