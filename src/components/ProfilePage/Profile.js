import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import UserService from '../../services/UserService';
import TeacherService from '../../services/TeacherService';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Alert, Button } from 'react-bootstrap';

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: null,
      userReady: false,
      currentUser: {},
      jwtToken: "",
      email: "",
      fullName: "",
      old_password: "",
      new_password: "",
      repeat_new_password: "",
      errors: {},
      successful: false,
      message: "",
      showTeacherBoard: false
    };
    this.fullNameChangeHandler = this.fullNameChangeHandler.bind(this);
    this.updateFullNameSubmit = this.updateFullNameSubmit.bind(this);
    this.oldPasswordChangeHandler = this.oldPasswordChangeHandler.bind(this);
    this.newPasswordChangeHandler = this.newPasswordChangeHandler.bind(this);
    this.repeatNewPasswordChangeHandler = this.repeatNewPasswordChangeHandler.bind(this);
    this.updatePasswordSubmit = this.updatePasswordSubmit.bind(this);
  }

    updateFullNameSubmit = (event) => {
        event.preventDefault();
        UserService.updateName(this.state.currentUser.id, this.state.fullName).then(res =>{
            window.location.replace("/profile");
            // const url = "/profile";
            // this.props.history.push(url);
        });
    }

    createTeacherPage() {
      UserService.addTeacherRole(this.state.currentUser.id).then(res =>{
        // window.location.replace("/profile");
      });
      let teacher = {userId: this.state.currentUser.id, email: this.state.currentUser.email};
      TeacherService.createInitialTeacher(teacher).then(res => {
        window.location.replace("/profile");
      });
    }

    updatePasswordSubmit = (event) => {
        event.preventDefault();
        if(this.validate()){
            let password_body = {old_password: this.state.old_password, new_password: this.state.new_password};

            // step 5
            UserService.updatePassword(this.state.old_password, this.state.new_password).then(
                // res =>{
                //     this.props.history.push("/dashboard");
                response => {
                    this.setState({
                      message: response.data,
                      successful: true
                    });
                    // this.props.history.push("/");
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
                      message: resMessage
                    });
                  }); 
        }
    } 

    fullNameChangeHandler = (event) => {
        this.setState({fullName: event.target.value});
    }

    oldPasswordChangeHandler = (event) => {
        this.setState({old_password: event.target.value});
    }

    newPasswordChangeHandler = (event) => {
        this.setState({new_password: event.target.value});
    }

    repeatNewPasswordChangeHandler = (event) => {
        this.setState({repeat_new_password: event.target.value});
    }

    validate(){
        let errors = {};
        let isValid = true;
    
        if (typeof this.state.old_password !== "undefined" && typeof this.state.new_password !== "undefined" && typeof this.state.repeat_new_password !== "undefined") {
            
          if (this.state.new_password != this.state.repeat_new_password) {
            isValid = false;
            errors["password"] = "New password don't match.";
          }
        } 
    
        this.setState({
          errors: errors
        });
    
        return isValid;
    }

  async componentDidMount() {
    this.state = {
        jwtToken:JSON.parse(localStorage.getItem('user'))
    }
    try{
        const bearer = "Bearer "+ this.state.jwtToken['jwtToken'];

        const response = await fetch("http://localhost:8080/profile", {
        method:'GET',
        headers: {
          "Content-Type": "application/json",
          "Authorization": bearer
        }
    });

    if(response.status>=200 && response.status < 300){
        let res = await response.json();
        this.setState({currentUser: res});
        this.setState({email: this.state.currentUser.email, fullName: this.state.currentUser.fullName});
        res.roles.map((role) => {
          if(role.role == "ROLE_TEACHER"){
              this.setState({showTeacherBoard: true});
          }
      });
        // console.log(res);
    } 
    else{
        window.location.replace("/");
    }

    }
    catch{
        window.location.replace("/");
    }
    
    const currUser = this.state.currentUser;

    if (!currUser) 
        this.setState({ redirect: "/login" });

    this.setState({ userReady: true })
  }

  render() {

    if (this.state.redirect) {
        return <Redirect to={this.state.redirect} />
    }
    const { showTeacherBoard } = this.state;

    return (
        <div>
          <Header />
          <div className="container" style={{marginTop: "150px"}}>
            {!showTeacherBoard && (
              <Alert variant="primary">
                You don't have teacher page! 
                Click <Alert.Link onClick={() => this.createTeacherPage()}>here</Alert.Link> to create teacher account!
                
                
              </Alert>
            )}
            {(this.state.userReady) ?
            <div className="row mt-3">
                <div className="col-6 mx-auto">
                  <form className="mt-5" onSubmit={this.updateFullNameSubmit}>
                      <div className="form-group">
                          <label>Email</label>
                          <input type="email" className="form-control" value={this.state.email} name="email" readonly="readonly" />
                      </div>
                      <div className="form-group">
                          <label></label>
                          <input type="text" required className="form-control" name="full_name" value={this.state.fullName} onChange = {this.fullNameChangeHandler}/>
                          <small className="form-text text-muted"></small>
                      </div>
                      <div className="form-group">
                          <button className="btn btn-success" style={{backgroundColor: "#17339B", border: "none"}} >Update profile</button>
                      </div>
                  </form>

                  <hr className="my-4"></hr>
                  
                  {this.state.message && (
                      <div className="form-group">
                          <div
                          className={
                              this.state.successful
                              ? "alert alert-success"
                              : "alert alert-danger"
                          }
                          role="alert"
                          >
                          {this.state.message}
                          </div>
                      </div>
                  )}

                  <form className="mt-5" onSubmit={this.updatePasswordSubmit}>
                      <div className="form-group">
                          <label>Old password</label>
                          <input type="password" className="form-control" value={this.state.old_password} name="old_password" onChange = {this.oldPasswordChangeHandler} required />
                      </div>
                      <div className="text-danger">{this.state.errors.password}</div>
                      <div className="form-group">
                          <label>New password</label>
                          <input type="password" className="form-control" value={this.state.new_password} name="new_password" onChange = {this.newPasswordChangeHandler} required />
                      </div>
                      <div className="form-group">
                          <label>Repeat new password</label>
                          <input type="password" className="form-control" value={this.state.repeat_new_password} name="repeat_new_password" onChange = {this.repeatNewPasswordChangeHandler} required />
                      </div>
                      
                      <div className="form-group">
                          <button className="btn btn-success" style={{backgroundColor: "#17339B", border: "none"}} >Update password</button>
                      </div>
                  </form>
              </div>
              </div>
          : null}
        </div>
        <Footer />
      </div>
    );
  }
}