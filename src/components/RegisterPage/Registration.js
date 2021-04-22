import React, { Component } from 'react';
import UserService from '../../services/UserService';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class Registration extends Component {

    constructor(props) {
        super(props)

        this.state = {
            // step 2
            fullName: "",
            email: "",
            password: "",
            repeat_password: "",
            successful: false,
            message: "",
            errors: {}
        }
        this.fullNameChangeHandler = this.fullNameChangeHandler.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleRepeatPasswordChange = this.handleRepeatPasswordChange.bind(this);
        this.registerFormSubmit = this.registerFormSubmit.bind(this);
    }

    fullNameChangeHandler = (event) => {
        this.setState({fullName: event.target.value});
    }

    handleEmailChange = (event) => {
        this.setState({email: event.target.value});
    }

    handlePasswordChange = (event) => {
        this.setState({password: event.target.value});
    }

    handleRepeatPasswordChange = (event) => {
        this.setState({repeat_password: event.target.value});

    }
    registerFormSubmit = (e) => {
        e.preventDefault();
        
        if(this.validate()){
            let user = {fullName: this.state.fullName, email: this.state.email, password: this.state.password};

            // step 5
            UserService.register(user).then(
                // res =>{
                //     this.props.history.push("/dashboard");
                response => {
                    this.setState({
                      message: response.data.message,
                      successful: true
                    });
                    this.props.history.push("/");
                  },
                  error => {
                    const resMessage =
                      (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                      error.message ||
                      error.toString();
          
                    this.setState({
                      successful: false,
                      message: "Email is already exists!"
                    });
                  }); 
        }
    }

    validate(){
        let errors = {};
        let isValid = true;
    
        if (typeof this.state.password !== "undefined" && typeof this.state.repeat_password !== "undefined") {
            
          if (this.state.password != this.state.repeat_password) {
            isValid = false;
            errors["password"] = "Passwords don't match.";
          }
        } 
    
        this.setState({
          errors: errors
        });
    
        return isValid;
    }
    

    render(){
        return (
            <div>
                <Header />
                <div className = "container" style={{marginTop: "150px"}}>
                    <div className = "row mt-3">
                        <div className = "col-6 mx-auto">
                            <form onSubmit={this.registerFormSubmit}>
                                <div className = "form-group">
                                    <label>
                                        Full Name : 
                                    </label>
                                    <input type = "text" className = "form-control" value = {this.state.fullName} onChange = {this.fullNameChangeHandler} required/>
                                </div>
                                <div className="text-danger">{this.state.message}</div>
                                <div className = "form-group">
                                    <label>
                                        Email : 
                                    </label>
                                    <input type = "email" className = "form-control" value = {this.state.email} onChange = {this.handleEmailChange} required/>
                                </div>
                                <div className = "form-group">
                                    <label>
                                        Password : 
                                    </label>
                                    <input type = "password" className = "form-control" id="password" value = {this.state.password} onChange = {this.handlePasswordChange} required/>
                                </div>
                                <div className="text-danger">{this.state.errors.password}</div>
                                <div className = "form-group">
                                    <label>
                                        Password : 
                                    </label>
                                    <input type = "password" className = "form-control" id="confirm_password" value = {this.state.repeat_password} onChange = {this.handleRepeatPasswordChange} required/>
                                </div>
                                <div className="text-danger">{this.state.errors.confirm_password}</div>
                                <div className = "form-group">
                                    <button className = "btn btn-success" >SIGN IN</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
            
        )
    }
}

export default Registration
