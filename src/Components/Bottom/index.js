import React, { Component } from 'react';


const unobserve = () => {
    let io = new IntersectionObserver(
    (entries)=> {
      if (entries[0].intersectionRatio === 1) {
        console.log(entries)
        
      }
    },
    {threshold:[1]}
  )
  io.unobserve(document.querySelector('.bottom'))
}


class Bottom extends Component{
  constructor(props) {
    super(props);
    this.state = {
      numbers:0
    }
  }
  observe = () => {
    let io = new IntersectionObserver(
      (entries)=> {
        if (entries[0].intersectionRatio === 1) {
          console.log(entries)
          this.props.call()
        }
      },
      {threshold:[1]}
    )
    io.observe(document.querySelector('.bottom'))
  }
  componentDidMount() {
    this.observe()
  }
  componentWillUnmount() {
    unobserve()
  }
  render() {
    return (
      <div className="bottom">
        我是頁尾
      </div>
    );
  }
}

export default Bottom