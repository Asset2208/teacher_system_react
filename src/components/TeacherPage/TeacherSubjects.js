import React, { Component } from 'react'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Form, Col, Button, Accordion,Modal, Card  } from 'react-bootstrap';
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

export default class TeacherSubjects extends Component {
    constructor(props) {
        super(props);

        this.state = {
            redirect: null,
            userReady: false,
            currentUser: {},
            teacherEntity: {},
            teacher: {},
            subjects: [],
            jwtToken: "",
            email: "",
            fullName: "",
            errors: {},
            successful: false,
            showHide : false,
            message: "",
            showTeacherBoard: false,
            cityEntity: {},
            cities: [],
            cityOptions: [],
            subjectOptions: [],
            selectedSubjects: [],
            subjectNames: [],
            updateSubjectName: "",
            updatePrice: 0,
            updateComment: "",
            subjectBranchEntity: {}
        };
        this.updatePriceHanlder = this.updatePriceHanlder.bind(this);
        this.updateCommentHandler = this.updateCommentHandler.bind(this);

        // this.universitySpecialityChangeHandler = this.universitySpecialityChangeHandler.bind(this);
        // this.educationDateStartChangeHandler = this.educationDateStartChangeHandler.bind(this);
        // this.educationDateEndChangeHandler = this.educationDateEndChangeHandler.bind(this);

        // this.updateMainDetailsSubmit = this.updateMainDetailsSubmit.bind(this);
        // this.experienceNameChangeHandler = this.experienceNameChangeHandler.bind(this);
        // this.experienceDateStartChangeHandler = this.experienceDateStartChangeHandler.bind(this);
        // this.experienceDateEndChangeHandler = this.experienceDateEndChangeHandler.bind(this);
        // this.achievementNameChangeHandler = this.achievementNameChangeHandler.bind(this);
        // this.achievementDurationChangeHandler = this.achievementDurationChangeHandler.bind(this);
        // this.submitEducation = this.submitEducation.bind(this);
        // this.submitExperience = this.submitExperience.bind(this);
        // this.submitAchievement = this.submitAchievement.bind(this);

        // this.oldPasswordChangeHandler = this.oldPasswordChangeHandler.bind(this);
        // this.newPasswordChangeHandler = this.newPasswordChangeHandler.bind(this);
        // this.repeatNewPasswordChangeHandler = this.repeatNewPasswordChangeHandler.bind(this);
        // this.updatePasswordSubmit = this.updatePasswordSubmit.bind(this);
        this.submitSubjects = this.submitSubjects.bind(this);
        this.submitUpdateSubjects = this.submitUpdateSubjects.bind(this);
    }

    updatePriceHanlder = event =>{
        this.setState({updatePrice: event.target.value});
    }
    updateCommentHandler = event =>{
        this.setState({updateComment: event.target.value});
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
            this.setState({subjects: this.state.teacher.teacherSubjects});
            // console.log('teacher => ' + JSON.stringify(this.state.subjects));
        });

        SubjectService.getAllSubjects().then(res => {
            this.setState({subjectNames: res.data});
            const options = this.state.subjectNames.map(d => ({
                "value" : d.id,
                "label" : d.name
              }));

              this.setState({ subjectOptions: options});
        });
        
      }

        handleSubjectChange = (e) => {
        this.setState({selectedSubjects: e.map(x => x.value)});
      }

      submitSubjects = (event) => {
        event.preventDefault();

        let subjectBody = {
            teacherId: this.state.teacher.id,
            subjectIds: this.state.selectedSubjects
        }

        console.log(subjectBody);
        TeacherService.addTeacherSubjects(subjectBody).then(res => {
            window.location.replace("/teacher/subjects");
        });

    }
    handleEditModalHide() {
        this.setState({ editShowHide: !this.state.editShowHide });
    }

    handleEditModalShow(subject) {
        this.setState({ 
            subjectBranchEntity: subject, 
            updateSubjectName: subject.name,
            updatePrice: subject.price,
            updateComment: subject.comment,
            editShowHide: !this.state.editShowHide});
    }

    submitUpdateSubjects = (e) => {
        e.preventDefault();
        let subjectBody = {
            id: this.state.subjectBranchEntity.id,
            name: this.state.updateSubjectName,
            price: this.state.updatePrice,
            teacherId: this.state.teacher.id,
            comment: this.state.updateComment
        }

        TeacherService.updateTeacherSubjects(subjectBody).then(res => {
            window.location.replace("/teacher/subjects");
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
                                <Link to="/teacher/carier" className="list-group-item list-group-item-action py-2 ripple"><i class="fas fa-newspaper fa-fw me-3"></i><span>Карьера</span></Link>
                                <Link to="/teacher/subjects" className="list-group-item list-group-item-action py-2 ripple active"><i class="fas fa-chart-line fa-fw me-3"></i><span>Предметная область</span></Link>
                                <Link to={"/teacher/" + this.state.teacher.id + "/feedbacks"} className="list-group-item list-group-item-action py-2 ripple"><i class="fas fa-comment-dots me-3"></i><span>Отзывы обо мне</span></Link>
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
                                        Добавить предметы
                                    </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0" >
                                    <Card.Body style={{height: "500px"}}>
                                        <form>
                                            {/* <Form.Group controlId="formGridAddress1">
                                                <Form.Label>Название университета</Form.Label>
                                                <input className="form-control" type="text" placeholder="Назарбаев университет" onChange = {this.universityNameChangeHandler} ></input>                                                
                                            </Form.Group> */}

                                            <div className="form-group">
                                                <label>Предметы</label>
                                                <Select
                                                    isMulti
                                                    name="colors"
                                                    options={this.state.subjectOptions}
                                                    // value={this.state.subjectOptions.filter(option => option.label === )}
                                                    className="basic-multi-select"
                                                    classNamePrefix="select"
                                                    onChange={this.handleSubjectChange}
                                                />

                                            </div>

                                            {/* <Form.Row>
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
                                            </Form.Row> */}

                                            <div className = "form-group">
                                                <button className = "btn btn-success" onClick={this.submitSubjects}>Добавить</button>
                                            </div>
                                        </form>
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                            
                            {this.state.subjects != null && (
                                <Accordion>
                                    <Card>
                                        <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                            Мои предметы
                                        </Accordion.Toggle>
                                        </Card.Header>
                                        {this.state.subjects.map(subject => (
                                        <Accordion.Collapse eventKey="0">
                                        
                                            <Card.Body>
                                                <hr/>
                                                <form>
                                                    <Form.Group controlId="formGridAddress1">
                                                        <Form.Label>Название предмета</Form.Label>
                                                        <input className="form-control" type="text" placeholder="Назарбаев университет" value={subject.name} readOnly="true" ></input>                                                
                                                    </Form.Group>

                                                    <Form.Row>
                                                        <Form.Group as={Col} md="6" controlId="formGridCity">
                                                        <Form.Label>Цена</Form.Label>
                                                        <input className="form-control" type="text" value={subject.price} onChange = {this.universitySpecialityChangeHandler} ></input>                                                
                                                        </Form.Group>

                                                        <Form.Group as={Col} md="6" controlId="formGridCity">
                                                        <Form.Label>Комментарий</Form.Label>
                                                        <input className="form-control" type="text" value={subject.comment} onChange = {this.universitySpecialityChangeHandler} ></input>                                                
                                                        </Form.Group>
                                                    </Form.Row>

                                                    {/* <div className = "form-group">
                                                        <button className = "btn btn-primary" onClick={() => this.handleEditModalShow(subject)} >Обновить</button>
                                                    </div> */}
                                                </form>
                                                <button className = "btn btn-primary" onClick={() => this.handleEditModalShow(subject)} >Обновить</button>
                                            </Card.Body>
                                        
                                        </Accordion.Collapse>
                                        ))}
                                        </Card>
                                </Accordion>
                            )}
                        </div>
                        <Modal show={this.state.editShowHide}>
                    <Modal.Header closeButton onClick={() => this.handleEditModalHide()}>
                    <Modal.Title>Изменить предмет</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <Form.Group controlId="formGridAddress1">
                                <Form.Label>Название предмета</Form.Label>
                                <input className="form-control" type="text" placeholder="Назарбаев университет" value={this.state.updateSubjectName} readOnly="true" ></input>                                                
                            </Form.Group>

                            <Form.Row>
                                <Form.Group as={Col} md="6" controlId="formGridCity">
                                <Form.Label>Цена</Form.Label>
                                <input className="form-control" type="text" value={this.state.updatePrice} onChange = {this.updatePriceHanlder} ></input>                                                
                                </Form.Group>

                                <Form.Group as={Col} md="6" controlId="formGridCity">
                                <Form.Label>Комментарий</Form.Label>
                                <input className="form-control" type="text" value={this.state.updateComment} onChange = {this.updateCommentHandler} ></input>                                                
                                </Form.Group>
                            </Form.Row>

                            <div className = "form-group">
                                <button className = "btn btn-primary" onClick={this.submitUpdateSubjects} >Обновить</button>
                            </div>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={() => this.handleEditModalHide()}>
                        Закрыть
                    </Button>
                    </Modal.Footer>
                </Modal>
                    </div>
                </div>
                
            </div>
        )
    }
}
