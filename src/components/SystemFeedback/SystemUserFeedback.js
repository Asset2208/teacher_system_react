import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SystemFeedbackService from '../../services/SystemFeedbackService';
import { Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import './css/contacts.css';


class SystemUserFeedback extends Component {

  constructor(props){
    super(props);
    this.state = {
        id: this.props.match.params.id,
        fullName: "",
        email: "",
        message: "",
        categoryName: "",
        categories: [],
        options: [],
        categoryEntity: {},
        categorySelectEditName: "",
        currentUser: undefined,
        jwtToken: "",
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
  }

    handleNameChange = event =>{
        this.setState({fullName: event.target.value});
    }
    handleEmailChange = event =>{
        this.setState({email: event.target.value});
    }
    handleMessageChange = event =>{
        this.setState({message: event.target.value});
    }

  handleSubmit = (e) => {
    e.preventDefault();
    let feedbackBody = {fullName: this.state.fullName, email: this.state.email, message: this.state.message, category: this.state.categoryEntity};

    // console.log('city => ' + JSON.stringify(postBody));

    SystemFeedbackService.createSystemFeedback(feedbackBody).then(res =>{
        window.location.replace("/");
    });
  }

  handleChange(e){
    SystemFeedbackService.getSystemFeedbackCategoryById(e.value).then( res => {
        this.setState({categoryEntity: res.data});
    });
    this.setState({ id: e.value, name: e.label})
}

  async componentDidMount(){
    
    SystemFeedbackService.getSystemFeedbackCategories().then((res) => {
        this.setState({ categories: res.data});

        const options = this.state.categories.map(d => ({
            "value" : d.id,
            "label" : d.name
          }));
          this.setState({ options: options});
    });

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
            this.setState({
                currentUser: res,
              });
        } 
        }
        catch{
            
        }
  }

  render() {
    return (
      <div>
          <Header />
        <div class="container contentblock" style={{marginTop: "150px"}}>
                <div class="row">
                    <div class="col-md-8 offset-2 rightcontent">
                        <h1 class="title">Напишите нам</h1>
                        <div class="emailusform">
                            <form id="submitForm">
                                <div class="formrow">
                                <Select
                                    onChange={this.handleChange.bind(this)}
                                    options={this.state.options}
                                    required
                                />
                                    <label class="valid">Тип обратной связи</label>
                                </div>
                                <div class="row">
                                    <div class="halfleft formrow">
                                        <input type="text" class="form-control" onChange = {this.handleNameChange} required="required" />
                                        <label>Имя (латинскими буквами)</label>
                                        
                                    </div>
                                    <div class="halfright formrow">
                                        <input type="email" class="form-control"
                                            required="required" onChange = {this.handleEmailChange}/>
                                        <label>Электронная почта</label>
                                        
                                    </div>
                                </div>
                                <div class="formrow">
                                    <textarea placeholder="Сообщение (максимум 150 слов)" class="form-control" 
                                            required="required" onChange = {this.handleMessageChange}></textarea>
                                    
                                </div>
                            
                                <div class="formrow">
                                    <div class="row">
                                        <div class="col-md-9"></div>
                                        <div class="col-md-3">
                                            <button id="submitButton" class="btn btn-success" onClick={this.handleSubmit}
                                                    type="submit">
                                                Отправить
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        <Footer />
      </div>
      )
  }
    
}

export default SystemUserFeedback;
