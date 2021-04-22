import React, { useState, useEffect, useContext, Component} from 'react';
import UserService from '../../services/UserService';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";


class Login extends Component{

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
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // const [cookieJWT, setCookieJWT, removeCookieJWT] = useCookies(['jwt']);

    // const user = useContext(UserContext);

    handleEmailChange = event =>{
        this.setState({email: event.target.value});
    }

    handlePasswordChange = event =>{
        this.setState({password: event.target.value});
    }

    handleSubmit = event =>{
        const inputData = {email: this.state.email, password: this.state.password};
        // auth(inputData);
        event.preventDefault();

        UserService.login(inputData).then(
            () => {
              this.props.history.push("/profile");
              window.location.reload();
            },
            error => {
              const resMessage =
                (error.response &&
                  error.response.data &&
                  error.response.data.message) ||
                error.message ||
                error.toString();

                console.log(resMessage);
    
              this.setState({
                loading: false,
                message: "Incorrect login or password!"
              });
            }
          );
    }

    // async function auth(data){
        
    //     const response = await fetch("http://localhost:8000/auth", {
    //         method: "POST",
    //         mode: "cors",
    //         cache: "no-cache",
    //         credentials: "same-origin",
    //         headers: {
    //           "Content-Type": "application/json"
    //         },
    //         redirect: "follow",
    //         referrerPolicy: "no-referrer",
    //         body: JSON.stringify(data)
    //       });

    //     if(response.status==200){
    //         let jwt = await response.json();
    //         setCookieJWT('jwt', jwt);
    //     }

    // }

    // async function test(){   
             
        // const bearer = "Bearer "+cookieJWT['jwt'].jwtToken;

        // const response = await fetch("http://localhost:8000/profile", {
        //     method:'GET',
        //     headers: {
        //       "Content-Type": "application/json",
        //       "Authorization": bearer
        //     }
        // });

        // if(response.status==200){
        //     let res = await response.json();
        //     console.log(res);
        // }    
    // }
    
    render(){
        return (
            <div>
                <Header />
                    <div className = "container" style={{marginTop: "150px"}}>
                        <div className = "row mt-3">
                            <div className = "col-6 mx-auto">
                                <form onSubmit = {this.handleSubmit}>
                                    
                                    <div className = "form-group">
                                        <label>
                                            Email : 
                                        </label>
                                        <input type = "email" className = "form-control" value = {this.email} onChange = {this.handleEmailChange}/>
                                    </div>
                                    <div className = "form-group">
                                        <label>
                                            Password : 
                                        </label>
                                        <input type = "password" className = "form-control" value = {this.password} onChange = {this.handlePasswordChange}/>
                                    </div>
                                    <div className = "form-group">
                                        <button className = "btn btn-success" >SIGN IN</button>
                                    </div>
                                    <div className="text-danger">{this.state.message}</div>
                                    
                                    {/* <div className = "form-group">
                                        <button className = "btn btn-danger" type = "button" onClick={test}>TEST</button>
                                    </div> */}
                                </form>
                            </div>
                        </div>
                    </div>
                <Footer />
            </div>
        )
    }
    
}

export default Login;