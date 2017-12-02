import React from "react";

class HeaderForm extends React.Component{
  constructor(props){
    super(props);
    this.state={}
  }

  handleEvent = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value)
    this.setState({
     [name]: value
    });
  }


 render(){
   return(
     <div>
       <form>
        <input type="text" placeholder="first name" name="first_name" onChange={this.handleEvent}/>
        <input type="text" placeholder="last name" name="last_name" onChange={this.handleEvent}/>
        <input type="text" placeholder="email" name="email" onChange={this.handleEvent}/>
        <input type="number" placeholder="age" name="age" onChange={this.handleEvent}/>
          <button type="submit" onClick={(e) =>{
            e.preventDefault();
            this.props.addUser(this.state);
          }}>Add Name</button>
       </form>
     </div>
   );
 }

}


export default HeaderForm;
