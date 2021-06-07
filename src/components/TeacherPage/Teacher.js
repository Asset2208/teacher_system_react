import React, { Component } from 'react'
import Header from '../Header/Header';
import TeacherService from '../../services/TeacherService';
import CityService from '../../services/CityService';
import SubjectService from '../../services/SubjectService';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Select from 'react-select';

import '../AdminPage/css/admin.css';
// import './css/admin.css';

export default class Teacher extends Component {

    constructor(props) {
        super(props);

        this.state = {
            redirect: null,
            userReady: false,
            currentUser: {},
            teacherEntity: {},
            jwtToken: "",
            email: "",
            fullName: "",
            name: "",
            surname: "",
            patronymic: "",
            title: "",
            subjects: "",
            story: "",
            imageUrl: "",
            cityName: "",
            phoneNumber: "",
            old_password: "",
            new_password: "",
            repeat_new_password: "",
            errors: {},
            successful: false,
            message: "",
            showTeacherBoard: false,
            cityEntity: {},
            cities: [],
            cityOptions: [],
            subjectOptions: [],
            selectedSubjects: [],
            subjectNames: []
        };
        this.nameChangeHandler = this.nameChangeHandler.bind(this);
        this.surnameChangeHandler = this.surnameChangeHandler.bind(this);
        this.patronymicChangeHandler = this.patronymicChangeHandler.bind(this);
        this.updateMainDetailsSubmit = this.updateMainDetailsSubmit.bind(this);
        this.phoneChangeHandler = this.phoneChangeHandler.bind(this);
        this.titleChangeHandler = this.titleChangeHandler.bind(this);
        this.storyChangeHandler = this.storyChangeHandler.bind(this);
        this.subjectsChangeHandler = this.subjectsChangeHandler.bind(this);
        this.imageChangeHandler = this.imageChangeHandler.bind(this);
        // this.handleSubjectChange = this.handleSubjectChange.bind(this);

        // this.oldPasswordChangeHandler = this.oldPasswordChangeHandler.bind(this);
        // this.newPasswordChangeHandler = this.newPasswordChangeHandler.bind(this);
        // this.repeatNewPasswordChangeHandler = this.repeatNewPasswordChangeHandler.bind(this);
        // this.updatePasswordSubmit = this.updatePasswordSubmit.bind(this);
    }

    

    updateMainDetailsSubmit = (event) => {
        event.preventDefault();

        let teacherBody = {
            name: this.state.name,
            surname: this.state.surname,
            patronymic: this.state.patronymic,
            email: this.state.email,
            userName: "",
            phoneNumber: this.state.phoneNumber,
            title: this.state.title,
            isOnlineEnabled: false,
            subjects: this.state.subjects,
            story: this.state.story,
            imageUrl: this.state.imageUrl,
            isEnabledAccount: true,
            city: this.state.cityEntity
        };

        let subjectBody = {
            teacherId: this.state.teacherEntity.id,
            subjectIds: this.state.selectedSubjects
        }

        TeacherService.updateTeacherMainDetails(this.state.teacherEntity.id, teacherBody).then(res =>{
            // TeacherService.addTeacherSubjects(subjectBody).then(res => {
                window.location.replace("/teacher");
            // });
            // const url = "/profile";
            // this.props.history.push(url);
        });
    }

    nameChangeHandler = event =>{
        this.setState({name: event.target.value});
    }
    surnameChangeHandler = event =>{
        this.setState({surname: event.target.value});
    }
    patronymicChangeHandler = event =>{
        this.setState({patronymic: event.target.value});
    }
    phoneChangeHandler = event =>{
        this.setState({phoneNumber: event.target.value});
    }
    titleChangeHandler = event =>{
        this.setState({title: event.target.value});
    }
    storyChangeHandler = event =>{
        this.setState({story: event.target.value});
    }
    subjectsChangeHandler = event =>{
        this.setState({subjects: event.target.value});
    }
    imageChangeHandler = event =>{
        this.setState({imageUrl: event.target.value});
    }

    handleChange(e){
        CityService.getCityById(e.value).then( res => {
            this.setState({cityEntity: res.data});
        });
        // this.setState({ id: e.value, city: e.label})
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

        CityService.getCities().then((res) => {
            this.setState({ cities: res.data});
            const options = this.state.cities.map(d => ({
                "value" : d.id,
                "label" : d.city
              }));
              this.setState({ cityOptions: options});
        });

        TeacherService.getTeacherDTOByUserId(this.state.currentUser.id).then(res => {
            this.setState({teacherEntity: res.data});
            this.setState({
                email: this.state.teacherEntity.email, 
                name: this.state.teacherEntity.name,
                surname: this.state.teacherEntity.surname,
                patronymic: this.state.teacherEntity.patronymic,
                title: this.state.teacherEntity.title,
                subjects: this.state.teacherEntity.subjects,
                story: this.state.teacherEntity.story,
                imageUrl: this.state.teacherEntity.imageUrl,
                phoneNumber: this.state.teacherEntity.phoneNumber
            });
            if(this.state.teacherEntity.city != null){
                this.setState({cityName: this.state.teacherEntity.city.city, cityEntity: this.state.teacherEntity.city});
            }

            // console.log('teacher => ' + JSON.stringify(this.state.teacherEntity));
        });
        
        // SubjectService.getAllSubjects().then(res => {
        //     this.setState({subjectNames: res.data});
        //     const options = this.state.subjectNames.map(d => ({
        //         "value" : d.id,
        //         "label" : d.name
        //       }));
        //       this.setState({ subjectOptions: options});
        // });
        
      }

    //   handleSubjectChange = (e) => {
    //     this.setState({selectedSubjects: e.map(x => x.value)});
    //   }

    render() {
        return (
            <div>
                <Header/>
                <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white mt-5">
                        <div class="position-sticky">
                            <div class="list-group list-group-flush mx-3 mt-4"> 
                                <Link to="/teacher" class="list-group-item list-group-item-action py-2 ripple active"><i class="fas fa-tachometer-alt fa-fw me-3"></i><span>Основные данные</span></Link>
                                <Link to="/teacher/carier" className="list-group-item list-group-item-action py-2 ripple"><i class="fas fa-newspaper fa-fw me-3"></i><span>Карьера</span></Link>
                                <Link to="/teacher/subjects" className="list-group-item list-group-item-action py-2 ripple"><i class="fas fa-chart-line fa-fw me-3"></i><span>Предметная область</span></Link>
                                <Link to={"/teacher/" + this.state.teacherEntity.id + "/feedbacks"} className="list-group-item list-group-item-action py-2 ripple"><i class="fas fa-comment-dots me-3"></i><span>Отзывы обо мне</span></Link>
                                
                            </div>
                        </div>
                    </nav>
                <div className="container" style={{marginTop: "150px"}}>
                    <div className="row mt-3">
                        <div className="col-6 mx-auto">
                            {/* <form className="mt-5" onSubmit={this.updateFullNameSubmit}> */}
                            <p className="text-center"><img src={this.state.imageUrl} style={{width: "50%"}}></img></p>
                            <form className="mt-5" onSubmit={this.updateMainDetailsSubmit}>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" className="form-control" value={this.state.email} name="email" readonly="readonly" />
                                </div>
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" required className="form-control" value={this.state.name} onChange = {this.nameChangeHandler}/>
                                    <small className="form-text text-muted"></small>
                                </div>
                                <div className="form-group">
                                    <label>Surname</label>
                                    <input type="text" required className="form-control" value={this.state.surname} onChange = {this.surnameChangeHandler}/>
                                    <small className="form-text text-muted"></small>
                                </div>
                                <div className="form-group">
                                    <label>Patronymic</label>
                                    <input type="text" className="form-control" value={this.state.patronymic} onChange = {this.patronymicChangeHandler}/>
                                    <small className="form-text text-muted"></small>
                                </div>
                                <div className="form-group">
                                    <label>Phone number</label>
                                    <input type="text" className="form-control" value={this.state.phoneNumber} onChange = {this.phoneChangeHandler}/>
                                    <small className="form-text text-muted"></small>
                                </div>
                                <div className="form-group">
                                    <label>Title</label>
                                    <textarea type="text" required className="form-control" value={this.state.title} onChange = {this.titleChangeHandler} placeholder="математике"></textarea>
                                    <small className="form-text text-muted">Репетитор по ...</small>
                                </div>
                                <div className="form-group">
                                    <label>Story</label>
                                    <textarea type="text" required className="form-control" value={this.state.story} onChange = {this.storyChangeHandler}></textarea>
                                    <small className="form-text text-muted">Расскажите немного о себе</small>
                                </div>
                                <div className="form-group">
                                    <label>Subjects</label>
                                    <textarea type="text" required className="form-control" value={this.state.subjects} onChange = {this.subjectsChangeHandler}></textarea>
                                    <small className="form-text text-muted">Можете перечислить основные предметы</small>
                                </div>
                                {/* <div className="form-group">
                                    <label>Subjects</label>
                                    <Select
                                        isMulti
                                        name="colors"
                                        options={this.state.subjectOptions}
                                        // value={this.state.subjectOptions.filter(option => option.label === )}
                                        className="basic-multi-select"
                                        classNamePrefix="select"
                                        onChange={this.handleSubjectChange}
                                    />

                                </div> */}
                                <div className="form-group">
                                    <label>ImageUrl</label>
                                    <input type="text" required className="form-control" value={this.state.imageUrl} onChange = {this.imageChangeHandler} />
                                    <small className="form-text text-muted"></small>
                                </div>
                                
                                <div className="form-group">
                                    <label>City</label>
                                    {this.state.cityName == "" && (
                                        <Select
                                            onChange={this.handleChange.bind(this)}
                                            options={this.state.cityOptions}
                                            required
                                        />
                                    )}
                                    {this.state.cityName != "" && (
                                        <Select
                                        value={this.state.cityOptions.filter(option => option.label === this.state.cityName)}
                                        onChange={this.handleChange.bind(this)}
                                        options={this.state.cityOptions}
                                    />
                                    )}
                                    
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

                            
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
