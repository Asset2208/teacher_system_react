import React, { Component } from 'react'
import { Button, NavDropdown, Table, Modal, Alert  } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import './css/mdb.min.css';
import './css/admin.css';
import './css/scroll.css';
import '../../bootstrap/css/bootstrap.min.css';
import TeacherService from '../../services/TeacherService';

import Select from 'react-select';

export default class AdminTeacherFeedback extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            redirect: null,
            userReady: false,
            currentUser: {},
            teacherEntity: {},
            jwtToken: "",
            email: "",
            fullName: "",
            errors: {},
            feedbackEntity : {},
            message: "",
            feedbacks: [],
            showHide : false,
            feedbackFullName : "",
            feedbackEmail : "",
            feedbackPluses : "",
            feedbackMinuses : "",
            feedbackReply : "",
            feedbackMark: "",
            updateFullName : "",
            updateEmail : "",
            updatePluses : "",
            updateMinuses : "",
            updateReply : "",
            updateMark: "",
            updateEnabled: false
        };

        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeFullName = this.handleChangeFullName.bind(this);
        this.handlePlusesChange = this.handlePlusesChange.bind(this);
        this.handleMinusesChange = this.handleMinusesChange.bind(this);
        this.handleReplyChange = this.handleReplyChange.bind(this);
        this.handleMarkChange = this.handleMarkChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChangeFullName = event =>{
        this.setState({updateFullName: event.target.value});
    }
    handleChangeEmail = event =>{
        this.setState({updateEmail: event.target.value});
    }
    handlePlusesChange = event =>{
        this.setState({updatePluses: event.target.value});
    }
    handleMinusesChange = event =>{
        this.setState({updateMinuses: event.target.value});
    }
    handleReplyChange = event =>{
        this.setState({updateReply: event.target.value});
    }
    handleMarkChange = event =>{
        this.setState({updateMark: event.target.value});
    }

    handleModalShowHide() {
        this.setState({ showHide: !this.state.showHide })
    }

    handleEditModalShow(id) {
        TeacherService.getTeacherFeedbackById(id).then( res => {
            this.setState({feedbackEntity: res.data});
            this.setState({
                updateFullName: this.state.feedbackEntity.fullName, 
                updateEmail: this.state.feedbackEntity.email, 
                updatePluses: this.state.feedbackEntity.pluses,
                updateMinuses: this.state.feedbackEntity.minuses,
                updateReply: this.state.feedbackEntity.reply,
                updateMark: this.state.feedbackEntity.mark,
                updateEnabled: this.state.feedbackEntity.enabled
            });
            // this.setState({categorySelectEditName: this.state.feedbackEntity.category.name});
        });
        this.setState({ editShowHide: !this.state.editShowHide });
        //console.log('teacher => ' + JSON.stringify(this.state.teacherEntity));
        console.log('teacher => ' + JSON.stringify(this.state.feedbackEntity));
        
    }
    handleEditModalHide() {
        this.setState({ editShowHide: !this.state.editShowHide });
    }

    componentDidMount(){
        TeacherService.getTeacherFeedbacks("all").then((res) => {
            this.setState({ feedbacks: res.data});
        });
        
        // SystemFeedbackService.getSystemFeedbackCategories().then((res) => {
        //     this.setState({ categories: res.data});

        //     const options = this.state.categories.map(d => ({
        //         "value" : d.id,
        //         "label" : d.name
        //       }));
        //       this.setState({ options: options});
        // });
    }

    handleUpdateSubmit = (e) => {
        e.preventDefault();

        let feedbackBody = {
            fullName: this.state.updateFullName, 
            reply: this.state.updateReply,
            minuses: this.state.updateMinuses,
            pluses: this.state.updatePluses,
            mark: this.state.updateMark
        };

        TeacherService.updateTeacherFeedback(this.state.feedbackEntity.id, feedbackBody).then(res => {
            TeacherService.getTeacherFeedbacks("all").then((res) => {
                this.setState({ feedbacks: res.data});
                this.setState({ editShowHide: !this.state.editShowHide });
            })
        }    
        );

        
    }

    makeEnabled = (e) => {
        e.preventDefault();
        let enabledBody = {enabled: true};

        TeacherService.updateEnabled(this.state.feedbackEntity.id, enabledBody).then(res => {
            this.setState({updateEnabled: true});
            TeacherService.getTeacherFeedbacks("all").then((res) => {
                this.setState({ feedbacks: res.data});
            })
            // window.location.replace("/admin/teacher-feedback");
        });
    }
    makeDisabled = (e) => {
        e.preventDefault();
        let enabledBody = {enabled: false};
        TeacherService.updateEnabled(this.state.feedbackEntity.id, enabledBody).then(res => {
            this.setState({updateEnabled: false});
            TeacherService.getTeacherFeedbacks("all").then((res) => {
                this.setState({ feedbacks: res.data});
            })
        });
    }


    render() {
        return (
            <div>
                <head>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" />
                    <script
                    type="text/javascript"
                    src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.3.0/mdb.min.js"
                    ></script>
                </head>
                <header>
                <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white mt-5">
                        <div class="position-sticky">
                            <div class="list-group list-group-flush mx-3 mt-4">
                                
                                <Link to="/admin" class="list-group-item list-group-item-action py-2 ripple"><i class="fas fa-tachometer-alt fa-fw me-3"></i><span>Main dashboard</span></Link>
                                <a href="#" class="list-group-item list-group-item-action py-2 ripple">
                                    <i class="fas fa-chart-area fa-fw me-3"></i><span>Webiste traffic </span>
                                </a>
                                <Link to="/admin/blog" className="list-group-item list-group-item-action py-2 ripple"><i class="fas fa-newspaper fa-fw me-3"></i><span>Blog</span></Link>
                                <Link to="/admin/blog/category" className="list-group-item list-group-item-action py-2 ripple"><i class="fas fa-newspaper fa-fw me-3"></i><span>Blog Category</span></Link>
                                <a href="#" class="list-group-item list-group-item-action py-2 ripple"><i
                                    class="fas fa-chart-line fa-fw me-3"></i><span>Analytics</span></a>
                                <a href="#" class="list-group-item list-group-item-action py-2 ripple"><i
                                    class="fas fa-calendar fa-fw me-3"></i><span>Calendar</span></a>
                                <Link to="/admin/users" className="list-group-item list-group-item-action py-2 ripple"><i className="fas fa-users fa-fw me-3"></i><span>Users</span></Link>
                                <Link to="/admin/cities" className="list-group-item list-group-item-action py-2 ripple"><i class="fas fa-city me-3"></i><span>Cities</span></Link>
                                <Link to="/admin/districts" className="list-group-item list-group-item-action py-2 ripple"><i class="fas fa-building me-3"></i><span>Districts</span></Link>
                                <Link to="/admin/s-feedback" className="list-group-item list-group-item-action py-2 ripple"><i class="fas fa-comment-dots me-3"></i><span>System feedback</span></Link>
                                <Link to="/admin/s-feedback-category" className="list-group-item list-group-item-action py-2 ripple"><i class="far fa-comment-dots me-3"></i><span>System feedback category</span></Link>
                                <Link to="/admin/teacher-feedback" className="list-group-item list-group-item-action py-2 ripple active"><i class="fas fa-comment-dots me-3"></i><span>Teacher feedback</span></Link>
                                <Link to="/admin/subject" className="list-group-item list-group-item-action py-2 ripple"><i className="fas fa-users fa-book me-3"></i><span>Subjects</span></Link>
                                <Link to="/admin/subject-branches" className="list-group-item list-group-item-action py-2 ripple"><i className="fas fa-users fa-book me-3"></i><span>Subjects branches</span></Link>
                            </div>
                        </div>
                    </nav>
                    
                    
                    <nav id="main-navbar" class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
                        <div class="container-fluid">
                            <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#sidebarMenu"
                            aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                            <i class="fas fa-bars"></i>
                            </button>

                            <a class="navbar-brand" href="/">
                            <img src="https://www.artlebedev.com/everything/tutor/logo/process/tutor-process-001.jpg" height="60" alt="" loading="lazy" />
                            </a>

                            <form class="d-none d-md-flex input-group w-auto my-auto">
                            <input autocomplete="off" type="search" class="form-control rounded"
                                placeholder='Search (ctrl + "/" to focus)' style={{minWidth: "225px"}}/>
                            <span class="input-group-text border-0"><i class="fas fa-search"></i></span>
                            </form>

    
                            <ul class="navbar-nav ms-auto d-flex flex-row">

                            <NavDropdown
                                title={
                                        <img className="thumbnail-image" 
                                            src={"https://sun9-18.userapi.com/impg/c857432/v857432602/1ec3a9/JNxnuDlNY2E.jpg?size=640x640&quality=96&sign=f794844e426bf7bc217a99b4c19a6062&type=album"} 
                                            alt="user pic"
                                            style={{height: "35px", borderRadius: 30}}
                                        />
                                } 
                                id="basic-nav-dropdown">
                                
                                <NavDropdown.Item href="#action/3.1">My account</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
                            </NavDropdown>

                            </ul>
                        </div>
                        
                        </nav>
                </header>
            
                <div class="container" style={{width: "75%", marginLeft: "300px", marginTop: "100px"}}>
                
                    <div class="row">
                        <div className="col-10">
                            <h1 class="main-title float-left">Districts</h1>
                        </div>
                        {/* <div className="col">
                            <Button variant="primary" onClick={() => this.handleModalShowHide()}>
                                Add city
                            </Button>
                        </div> */}
                        
                    </div>

                    
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>User full name</th>
                            <th>User email</th>
                            <th>Reply</th>
                            <th>Mark</th>
                            <th>Teacher name</th>
                            <th>Enabled</th>
                            <th>Operations</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.feedbacks.map(feedback=>(
                                <tr>
                                <td>{feedback.id}</td>
                                <td>{feedback.fullName}</td>
                                <td>{feedback.email}</td>
                                <td>{feedback.reply}</td>
                                <td>{feedback.mark}</td>
                                <td>{feedback.teacherFullName}</td>
                                <td>{feedback.enabled.toString()}</td>
                                <td>
                                <Button className="btn btn-primary btn-sm" onClick={() => this.handleEditModalShow(feedback.id)}>
                                    <i class="far fa-edit"></i> Edit 
                                </Button>                                                        
                                </td>
                                </tr>
                            ))}
                            
                        </tbody>
                        </Table>
                    
                </div>  
                {/* <Modal show={this.state.showHide}>
                    <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
                    <Modal.Title>Add district</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <div className = "form-group">
                                <label>
                                    Name : 
                                </label>
                                <input type = "text" className = "form-control" value = {this.state.district} onChange = {this.handleNameChange}/>
                            </div>
                            <div className = "form-group">
                            <Select
                                onChange={this.handleChange.bind(this)}
                                options={this.state.options}
                                required
                            />
                            </div>
                            <div className = "form-group">
                                <button className = "btn btn-success" onClick={this.handleSubmit}>Add district</button>
                            </div>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={() => this.handleModalShowHide()}>
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal> */}

                <Modal show={this.state.editShowHide}>
                    <Modal.Header closeButton onClick={() => this.handleEditModalHide()}>
                    <Modal.Title>Изменить отзыв</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <div className = "form-group">
                                <label>
                                    Name : 
                                </label>
                                <input type = "text" className = "form-control" value = { this.state.updateFullName } onChange = {this.handleChangeFullName}/>
                            </div>
                            <div className = "form-group">
                                <label>
                                    Email : 
                                </label>
                                <input type = "email" className = "form-control" value = { this.state.updateEmail }  readOnly="true" />
                            </div>
                            <div className = "form-group">
                                <label>
                                    Reply : 
                                </label>
                                <input type = "text" className = "form-control" value = { this.state.updateReply } onChange = {this.handleReplyChange}/>
                            </div>
                            <div className = "form-group">
                                <label>
                                    Pluses : 
                                </label>
                                <input type = "text" className = "form-control" value = { this.state.updatePluses } onChange = {this.handlePlusesChange}/>
                            </div>
                            <div className = "form-group">
                                <label>
                                    Minuses : 
                                </label>
                                <input type = "text" className = "form-control" value = { this.state.updateMinuses } onChange = {this.handleMinusesChange}/>
                            </div>
                            <div className = "form-group">
                                <label>
                                    Mark : 
                                </label>
                                <input type = "text" className = "form-control" value = { this.state.updateMark } onChange = {this.handleReplyChange}/>
                            </div>
                            <div className = "form-group">
                                {this.state.updateEnabled == true && (
                                    <Alert variant="primary">
                                        Отзыв опубликован и доступен для публичного просмотра<br/>
                                        <Button variant="danger" onClick={this.makeDisabled}>
                                            Сделать недоступным
                                        </Button>
                                    </Alert>
                                )}
                                {this.state.updateEnabled != true && (
                                    <Alert variant="danger">
                                        Отзыв еще не опубликован и не доступен для публичного просмотра <br/>
                                        <Button variant="primary" onClick={this.makeEnabled}>
                                            Сделать доступным
                                        </Button>
                                    </Alert>
                                )}
                            </div>
                            <div className = "form-group">
                            {/* <Select
                                value={this.state.options.filter(option => option.label === this.state.citySelectEditName)}
                                onChange={this.handleChange.bind(this)}
                                options={this.state.options}
                            /> */}
                            </div>
                            <hr className="my-4"/>
                            <div className = "form-group">
                                <button className = "btn btn-success" onClick={this.handleUpdateSubmit}>Сохранить изменения</button>
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
        )
    }
}
