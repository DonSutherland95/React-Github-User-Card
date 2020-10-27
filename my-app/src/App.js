import React, { Component } from 'react'
import axios from "axios"
import UserCard from "./components/UserCard"

export default class App extends Component {
  constructor(){
    super();

    this.state={
      user:[]
    }
  }

  // state={
  //   user:[]
  // }
  componentDidMount(){
    axios.get("https://api.github.com/users/DonSutherland95")
      .then((res)=>{
        // console.log(res.data)
        this.setState({
          user: res.data
        })
      })
      .catch((err)=>{
        console.log(err)
      })
  }
  render() {
    return (
      <div>
        <UserCard userData={this.state.user} />
      </div>
    )
  }
}
