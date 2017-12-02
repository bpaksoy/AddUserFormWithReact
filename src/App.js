import React, { Component } from 'react';
import logo from './logo.svg';
//import './App.css';
import HeaderForm from "./HeaderForm";
import UserList from "./UserList";

class App extends Component {
 constructor(props){
   super(props);
   this.state = {users: []}
 }

 getAll(){
  fetch("http://localhost:8080/users")
   .then(data => data.json())
    .then(response =>{
      this.setState({ users:response })
    })
 }

componentDidMount(){
  this.getAll();
}

 addUser = (user) => {
    console.log("user here is", user);
    fetch("http://localhost:8080/users", {
      method:"post",
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }).then(data =>{
      console.log("done!");
      this.getAll();
    });
 }

 deleteUser = (id) => {
   fetch("http://localhost:8080/delete/" + id )
   .then(data =>{
     this.getAll();
   });
 }



  render() {
    return (
      <div className="App">
       <HeaderForm addUser={this.addUser} />
       <UserList users={this.state.users} deleteUser={this.deleteUser}/>
      </div>
    );
  }
}

export default App;
