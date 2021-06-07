import React, { Component } from 'react'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Form, Col, Button, Accordion, Card  } from 'react-bootstrap';
import TeacherService from '../../services/TeacherService';
import CityService from '../../services/CityService';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Select from 'react-select';

import '../AdminPage/css/admin.css';
// import './css/admin.css';

export default class TeacherCarier extends Component {

    constructor(props) {
        super(props);

        this.state = {
            redirect: null,
            userReady: false,
            currentUser: {},
            teacherEntity: {},
            teacher: {},
            jwtToken: "",
            email: "",
            fullName: "",
            universityName: "",
            universitySpeciality: "",
            educationDateStart: 0,
            educationDateEnd: 0,
            educationDuration: "",
            experienceName: "",
            experienceDateStart: 0,
            experienceDateEnd: 0,
            experienceDuration: "",
            achievementDuration: "",
            achievementName: "",
            experiences: [],
            educations: [],
            achievements: [],
            errors: {},
            successful: false,
            message: "",
            showTeacherBoard: false,
            cityEntity: {},
            cities: [],
            cityOptions: []
        };
        this.universityNameChangeHandler = this.universityNameChangeHandler.bind(this);
        this.universitySpecialityChangeHandler = this.universitySpecialityChangeHandler.bind(this);
        this.educationDateStartChangeHandler = this.educationDateStartChangeHandler.bind(this);
        this.educationDateEndChangeHandler = this.educationDateEndChangeHandler.bind(this);

        this.updateMainDetailsSubmit = this.updateMainDetailsSubmit.bind(this);
        this.experienceNameChangeHandler = this.experienceNameChangeHandler.bind(this);
        this.experienceDateStartChangeHandler = this.experienceDateStartChangeHandler.bind(this);
        this.experienceDateEndChangeHandler = this.experienceDateEndChangeHandler.bind(this);
        this.achievementNameChangeHandler = this.achievementNameChangeHandler.bind(this);
        this.achievementDurationChangeHandler = this.achievementDurationChangeHandler.bind(this);
        this.submitEducation = this.submitEducation.bind(this);
        this.submitExperience = this.submitExperience.bind(this);
        this.submitAchievement = this.submitAchievement.bind(this);

        // this.oldPasswordChangeHandler = this.oldPasswordChangeHandler.bind(this);
        // this.newPasswordChangeHandler = this.newPasswordChangeHandler.bind(this);
        // this.repeatNewPasswordChangeHandler = this.repeatNewPasswordChangeHandler.bind(this);
        // this.updatePasswordSubmit = this.updatePasswordSubmit.bind(this);
    }

    submitEducation = (event) => {
        event.preventDefault();

        let educationBody = {
            universityName: this.state.universityName, 
            speciality: this.state.universitySpeciality,
            dateStart: this.state.educationDateStart,
            dateEnd: this.state.educationDateEnd,
            teacherId: this.state.teacher.id
        };


        TeacherService.addTeacherEducation(educationBody).then(res => {
            window.location.replace("/teacher/carier");
        });

    }
    submitExperience = (event) => {
        event.preventDefault();

        let experienceBody = {
            experienceTitle: this.state.experienceName, 
            dateStart: this.state.experienceDateStart,
            dateEnd: this.state.experienceDateEnd,
            teacherId: this.state.teacher.id
        };

        TeacherService.addTeacherExperience(experienceBody).then(res => {
            window.location.replace("/teacher/carier");
        });
    }
    submitAchievement = (event) => {
        event.preventDefault();


        let achievementBody = {
            achievementTitle: this.state.achievementName, 
            duration: this.state.achievementDuration,
            teacherId: this.state.teacher.id
        };

        TeacherService.addTeacherAchievement(achievementBody).then(res => {
            window.location.replace("/teacher/carier");
        });
    }

    updateMainDetailsSubmit = (event) => {
        event.preventDefault();

        // let teacherBody = {
        //     name: this.state.name,
        //     surname: this.state.surname,
        //     patronymic: this.state.patronymic,
        //     email: this.state.email,
        //     userName: "",
        //     phoneNumber: this.state.phoneNumber,
        //     title: this.state.title,
        //     isOnlineEnabled: false,
        //     subjects: this.state.subjects,
        //     story: this.state.story,
        //     imageUrl: this.state.imageUrl,
        //     isEnabledAccount: false,
        //     city: this.state.cityEntity 
        // };

        // TeacherService.updateTeacherMainDetails(this.state.teacherEntity.id, teacherBody).then(res =>{
        //     window.location.replace("/teacher");
        //     // const url = "/profile";
        //     // this.props.history.push(url);
        // });
    }

    universityNameChangeHandler = event =>{
        this.setState({universityName: event.target.value});
    }
    universitySpecialityChangeHandler = event =>{
        this.setState({universitySpeciality: event.target.value});
    }
    educationDateStartChangeHandler = event =>{
        this.setState({educationDateStart: event.target.value});
    }
    educationDateEndChangeHandler = event =>{
        this.setState({educationDateEnd: event.target.value});
    }
    experienceNameChangeHandler = event =>{
        this.setState({experienceName: event.target.value});
    }
    experienceDateStartChangeHandler = event =>{
        this.setState({experienceDateStart: event.target.value});
    }
    experienceDateEndChangeHandler = event =>{
        this.setState({experienceDateEnd: event.target.value});
    }
    achievementNameChangeHandler = event =>{
        this.setState({achievementName: event.target.value});
    }
    achievementDurationChangeHandler = event =>{
        this.setState({achievementDuration: event.target.value});
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
    
        this.setState({ userReady: true });

        TeacherService.getTeacherDTOByUserId(this.state.currentUser.id).then(res => {
            this.setState({teacher: res.data});
            // console.log('teacher => ' + JSON.stringify(this.state.teacherEntity));
        });

        TeacherService.getTeacherLifeDTOByUserId(this.state.currentUser.id).then(res => {
            this.setState({teacherEntity: res.data});
            this.setState({
                experiences: this.state.teacherEntity.experiences,
                educations: this.state.teacherEntity.educations,
                achievements: this.state.teacherEntity.achievements,
            });

            console.log('teacher => ' + JSON.stringify(this.state.teacherEntity));
        });
        CityService.getCities().then((res) => {
            this.setState({ cities: res.data});

            const options = this.state.cities.map(d => ({
                "value" : d.id,
                "label" : d.city
              }));
              this.setState({ cityOptions: options});
        });
      }

    render() {
        return (
            <div>
                <Header/>
                <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white mt-5">
                        <div class="position-sticky">
                            <div class="list-group list-group-flush mx-3 mt-4"> 
                                <Link to="/teacher" class="list-group-item list-group-item-action py-2 ripple"><i class="fas fa-tachometer-alt fa-fw me-3"></i><span>Основные данные</span></Link>
                                <Link to="/teacher/carier" className="list-group-item list-group-item-action py-2 ripple active"><i class="fas fa-newspaper fa-fw me-3"></i><span>Карьера</span></Link>
                                <Link to="/teacher/subjects" className="list-group-item list-group-item-action py-2 ripple"><i class="fas fa-chart-line fa-fw me-3"></i><span>Предметная область</span></Link>
                                <Link to={"/teacher/" + this.state.teacherEntity.id + "/feedbacks"} className="list-group-item list-group-item-action py-2 ripple"><i class="fas fa-comment-dots me-3"></i><span>Отзывы обо мне</span></Link>
                            </div>
                        </div>
                    </nav>
                <div className="container" style={{marginTop: "150px", marginBottom: "150px"}}>
                    <div className="row mt-3">
                        <div className="col-6 mx-auto">
                            <Accordion style={{border: "1px solid grey"}}>
                                <Card>
                                    <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                        Добавить данные об образовании
                                    </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <form>
                                            <Form.Group controlId="formGridAddress1">
                                                <Form.Label>Название университета</Form.Label>
                                                <input className="form-control" type="text" placeholder="Назарбаев университет" onChange = {this.universityNameChangeHandler} ></input>                                                
                                            </Form.Group>

                                            <Form.Row>
                                                <Form.Group as={Col} md="6" controlId="formGridCity">
                                                <Form.Label>Специальность</Form.Label>
                                                <input className="form-control" type="text" onChange = {this.universitySpecialityChangeHandler} ></input>                                                
                                                </Form.Group>

                                                <Form.Group as={Col} md="3" controlId="formGridState">
                                                <Form.Label>Дата начала</Form.Label>
                                                <Form.Control type="number" min="1950" max="2021" onChange = {this.educationDateStartChangeHandler}/>
                                                </Form.Group>

                                                <Form.Group as={Col} md="3" controlId="formGridZip">
                                                <Form.Label>Дата окончания</Form.Label>
                                                <Form.Control type="number" min="1950" max="2021" onChange = {this.educationDateEndChangeHandler} />
                                                </Form.Group>
                                            </Form.Row>

                                            <div className = "form-group">
                                                <button className = "btn btn-success" onClick={this.submitEducation}>Добавить</button>
                                            </div>
                                        </form>
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                    Добавить данные об опыте
                                    </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="1">
                                    <Card.Body>
                                    <Form>
                                        <Form.Row>
                                        <Form.Group as={Col} controlId="formGridCity">
                                            <Form.Label>Компания, должность</Form.Label>
                                            <Form.Control type="text" onChange = {this.experienceNameChangeHandler}  />
                                            </Form.Group>
                                        </Form.Row>
                                        <Form.Row>
                                            <Form.Group as={Col} md="4" controlId="formGridState">
                                            <Form.Label>Дата начала</Form.Label>
                                            <Form.Control type="number" min="1950" max="2021" onChange = {this.experienceDateStartChangeHandler} />
                                            </Form.Group>

                                            <Form.Group as={Col} md="4" controlId="formGridZip">
                                            <Form.Label>Дата окончания</Form.Label>
                                            <Form.Control type="number" min="1950" max="2021" onChange = {this.experienceDateEndChangeHandler} />
                                            </Form.Group>
                                        </Form.Row>

                                        <Button variant="primary" type="submit" onClick={this.submitExperience}>
                                            Submit
                                        </Button>
                                    </Form>
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                        Добавить данные о достижениях
                                    </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="2">
                                    <Card.Body>
                                    <Form>
                                        <Form.Row>
                                            <Form.Group as={Col} md="9" controlId="formGridCity">
                                            <Form.Label>Описание</Form.Label>
                                            <Form.Control type="text" onChange = {this.achievementNameChangeHandler}  />
                                            </Form.Group>

                                            <Form.Group as={Col}  controlId="formGridState">
                                            <Form.Label>Дата</Form.Label>
                                            <Form.Control type="text" onChange = {this.achievementDurationChangeHandler}   />
                                            </Form.Group>
                                        </Form.Row>

                                        <Button variant="primary" type="submit" onClick={this.submitAchievement}>
                                            Submit
                                        </Button>
                                    </Form>
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                            {/* <form className="mt-5" onSubmit={this.updateFullNameSubmit}> */}
                            <hr className="my-4" />
                            {this.state.educations != null && (
                                <Accordion style={{border: "1px solid grey"}}>
                                
                                    <Card>
                                    <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                        Данные об образовании
                                    </Accordion.Toggle>
                                    </Card.Header>
                                    {this.state.educations.map(education => (
                                    <Accordion.Collapse eventKey="0">
                                    
                                        <Card.Body>
                                            <hr/>
                                            <form>
                                                <Form.Group controlId="formGridAddress1">
                                                    <Form.Label>Название университета</Form.Label>
                                                    <input className="form-control" type="text" placeholder="Назарбаев университет" value={education.universityName} onChange = {this.universityName} ></input>                                                
                                                </Form.Group>

                                                <Form.Row>
                                                    <Form.Group as={Col} md="6" controlId="formGridCity">
                                                    <Form.Label>Специальность</Form.Label>
                                                    <input className="form-control" type="text" value={education.speciality} onChange = {this.universitySpecialityChangeHandler} ></input>                                                
                                                    </Form.Group>

                                                    <Form.Group as={Col} md="3" controlId="formGridState">
                                                    <Form.Label>Дата начала</Form.Label>
                                                    <Form.Control type="number" min="1950" max="2021" value={education.dateStart} onChange = {this.educationDateStartChangeHandler}/>
                                                    </Form.Group>

                                                    <Form.Group as={Col} md="3" controlId="formGridZip">
                                                    <Form.Label>Дата окончания</Form.Label>
                                                    <Form.Control type="number" min="1950" max="2021" value={education.dateEnd} onChange = {this.educationDateEndChangeHandler} />
                                                    </Form.Group>
                                                </Form.Row>

                                                <div className = "form-group">
                                                    <button className = "btn btn-primary" onClick={this.submitEducation}>Обновить</button>
                                                </div>
                                            </form>
                                        </Card.Body>
                                       
                                    </Accordion.Collapse>
                                     ))}
                                    </Card>
                                
                                </Accordion>
                            )}
                            <hr className="my-4" />
                            {this.state.experiences != null && (
                                <Accordion style={{border: "1px solid grey"}}>
                                
                                    <Card>
                                    <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                        Данные об опыте
                                    </Accordion.Toggle>
                                    </Card.Header>
                                    {this.state.experiences.map(experience => (
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>
                                        <Form>
                                            <Form.Row>
                                            <Form.Group as={Col} controlId="formGridCity">
                                                <Form.Label>Компания, должность</Form.Label>
                                                <Form.Control type="text" value={experience.experienceTitle} onChange = {this.experienceNameChangeHandler}  />
                                                </Form.Group>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Group as={Col} md="4" controlId="formGridState">
                                                <Form.Label>Дата начала</Form.Label>
                                                <Form.Control type="number" value={experience.dateStart} min="1950" max="2021" onChange = {this.experienceDateStartChangeHandler} />
                                                </Form.Group>

                                                <Form.Group as={Col} md="4" controlId="formGridZip">
                                                <Form.Label>Дата окончания</Form.Label>
                                                <Form.Control type="number" value={experience.dateEnd} min="1950" max="2021" onChange = {this.experienceDateEndChangeHandler} />
                                                </Form.Group>
                                            </Form.Row>

                                            <Button variant="primary" type="submit" onClick={this.submitExperience}>
                                                Обновить
                                            </Button>
                                        </Form>
                                        </Card.Body>
                                        </Accordion.Collapse>
                                        ))}
                                    </Card>
                                
                                </Accordion>
                            )}
                            <hr className="my-4" />
                            {this.state.achievements != null && (
                                <Accordion style={{border: "1px solid grey"}}>
                                
                                    <Card>
                                    <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                        Данные о достижения
                                    </Accordion.Toggle>
                                    </Card.Header>
                                    {this.state.achievements.map(achievement => (
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>
                                        <Form>
                                            <Form.Row>
                                                <Form.Group as={Col} md="9" controlId="formGridCity">
                                                <Form.Label>Описание</Form.Label>
                                                <Form.Control type="text" value={achievement.achievementTitle} onChange = {this.achievementNameChangeHandler}  />
                                                </Form.Group>

                                                <Form.Group as={Col}  controlId="formGridState">
                                                <Form.Label>Дата</Form.Label>
                                                <Form.Control type="text" value={achievement.duration} onChange = {this.achievementDurationChangeHandler}   />
                                                </Form.Group>
                                            </Form.Row>

                                            <Button variant="primary" type="submit" onClick={this.submitAchievement}>
                                                Обновить
                                            </Button>
                                        </Form>
                                        </Card.Body>
                                        </Accordion.Collapse>
                                        ))}
                                    </Card>
                                
                                </Accordion>
                            )}
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
