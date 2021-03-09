import React, { Component } from 'react';
import './App.css'
import axios from 'axios'
// const numbers = [1, 2, 3, 4, 5];
// const listItems = numbers.map((number) =>
//   <li>{number}</li>
// );

const wait=function(delay) {
    return new Promise(resolve => {
        setTimeout(resolve, delay);
    });
};

class Body extends Component{
  constructor(props) {
    super(props);
    this.state = {
      arr: [1, 2, 3, 4, 5],
      data: [],
      loading:false
    }
  }
  doIt = async () => {
    console.log("load")
    this.setState({
      loading:true
    })
    await wait(2000)
    this.CallForLoad(this.props.num)
  }

  CallApi = () => {
    let city=(this.props.city)? this.props.city :''
    let targetURL = `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/${city}?$top=30&$format=JSON`
    axios.get(targetURL, {
      'Access-Control-Allow-Origin':'*'
    })
      .then(res => {
        console.log(res.data)
        this.setState({
          data:res.data
        })
        
    })
    .catch(function(err) {
        console.log(err)
    })
    
  }
  CallForLoad = (skip) => {
    let city=(this.props.city)? this.props.city :''
    axios.get(`https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/${city}`, {
      params: {
        "$top": "30",
        "$format": "JSON",
        "$skip":skip
      }
    }).then(res => {
      console.log(res.data)
      let concat=this.state.data.concat(res.data)
      this.setState({
        data: concat,
        loading:false
      })
    }).catch(err => {
      console.log(err)
    })
  }
  componentDidUpdate(prevProps,prevState) {
    if (this.props.num !== prevProps.num) {
      this.doIt()
    }
    if (this.props.city !== prevProps.city) {
      this.CallApi()
    }
  }
  componentDidMount() {
    this.CallApi()
  }
  render() {
    let title;
    if (this.state.loading) {
      title =
        <div className="Loading">
          loading
        </div>
    }
    return (
      <div>
        {title}
        <div className="contain">
          {this.state.data.map((item) => (
            <div className="item" key={item.ID}>
              <div className="address">
                {item.Address}
              </div>
              <div className="text">
                {item.Description}
              </div>
            </div>
          ))}

        </div>
      </div>
    );
  }
}

export default Body