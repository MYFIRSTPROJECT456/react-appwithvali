import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import $ from 'jquery'

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      fields: {
        name:'',
        email:'',
        phone:'',
        address:'',
        // message:''
      },
      errors: {}
    }
  }

  handleValidation(){
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //Name
    if(fields["name"].length == 0){
      formIsValid = false;
      errors["name"] = "Cannot be empty";
    }

    if(fields["name"] > 1){
      if(!fields["name"].match(/^[a-zA-Z]+$/)){
        formIsValid = false;
        errors["name"] = "Only letters";
      }      	
    }

    //Email
    if(fields["email"].length == 0){
      formIsValid = false;
      errors["email"] = "Cannot be empty";
    }

    if(fields["email"].length > 1){
      let lastAtPos = fields["email"].lastIndexOf('@');
      let lastDotPos = fields["email"].lastIndexOf('.');

      if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
      }
    }
    //phone
    if(fields["phone"].length == 0){
      formIsValid = false;
      errors["phone"] = "Cannot be empty";
    }

    if(fields["phone"].length > 1){
    if(!fields["phone"].match([0-9])){
        formIsValid = false;
        errors["phone"] = "Only Numbers";
      }      	
    }

    //address
    if(fields["address"].length == 0){
      formIsValid = false;
      errors["address"] = "Cannot be empty";
    }

    if(fields["address"].length > 1){
      if(!fields["address"].match(/^[a-zA-Z]+$/)){
        formIsValid = false;
        errors["address"] = "Only letters";
      }      	
    }
    //message
    if(!fields["message"]){
      formIsValid = false;
      errors["message"] = "Cannot be empty";
    }

    if(typeof fields["message"] !== "undefined"){
      // console.log('comme');
      if(!fields["message"].match(/^[a-zA-Z]+$/)){
        formIsValid = false;
        errors["message"] = "Only letters";
      }      	
    }

    this.setState({errors: errors});
    return formIsValid;
  }

  contactSubmit(e){
    e.preventDefault();
    if(this.handleValidation()){
      
    }else{
      
    }

  }

  handleChange(field, e){    		
    let fields = this.state.fields;
    fields[field] = e.target.value;        
    this.setState({fields});
  }
  render() {
    return (
      <div>        	
        <form name="contactform" className="contactform" onSubmit= {this.contactSubmit.bind(this)}>
          <div className="col-md-6">
            <fieldset>
              <input ref="name" type="text" size="30" placeholder="Name" onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]}/>
              <span className="error">{this.state.errors["name"]}</span>
              <br/>
              <input refs="email" type="text" size="30" placeholder="Email" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]}/>
              <span className="error">{this.state.errors["email"]}</span>
              <br/>
              <input refs="phone" type="text" size="30" placeholder="Phone" onChange={this.handleChange.bind(this, "phone")} value={this.state.fields["phone"]}/>
              <span className="error">{this.state.errors["phone"]}</span>

              <br/>
              <input refs="address" type="text" size="30" placeholder="Address" onChange={this.handleChange.bind(this, "address")} value={this.state.fields["address"]}/>
              <span className="error">{this.state.errors["address"]}</span>
              <br/>
            </fieldset>
          </div>
          <div className="col-md-6">
            <fieldset>
              <textarea refs="message" cols="28" rows="10"
                className="comments" placeholder="Message" onChange={this.handleChange.bind(this, "message")}>{this.state.fields["message"]}</textarea>
              <span className="error">{this.state.errors["message"]}</span>
            </fieldset>
          </div>
          <div className="col-md-12">
            <fieldset>
              <button className="btn btn-lg pro" id="submit" value="Submit">Send Message</button>
            </fieldset>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
