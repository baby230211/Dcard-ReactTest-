import { Component } from "react";
import Body from '../Body';
import Bottom from '../Bottom';
class TextCom extends Component{
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
  render() {
    console.log('render 1 time')
    return (
      <div>
        {this.props.match.params.city}
        <div>
          <Body num={this.state.total} city={this.props.match.params.city}></Body>
          <Bottom call={this.Callprac}></Bottom>
        </div>
      </div>
    );
  }
}

export default TextCom