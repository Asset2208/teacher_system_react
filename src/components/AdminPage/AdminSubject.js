import React, { Component } from 'react';
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
import SubjectService from '../../services/SubjectService';

import Select from 'react-select';


export default class AdminSubject extends Component {
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
            errors: {},
            subjectEntity : {},
            subjectBranches: [],
            message: "",
            subjects: [],
            showHide : false,
            subjectName: "",
            updateSubjectName: ""
        };

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleUpdateChangeName = this.handleUpdateChangeName.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit = (e) => {
        e.preventDefault();
        
        let subject = {name: this.state.subjectName};
        SubjectService.addSubject(subject).then(res =>{
            SubjectService.getAllSubjects().then((res) => {
                this.setState({ subjects: res.data});
                this.setState({ subjectName: ""});
                this.setState({ showHide: !this.state.showHide });
            })
        });
    }

    handleEditModalShow(subject) {
        this.setState({ subjectEntity: subject, updateSubjectName: subject.name, subjectBranches: subject.subjectBranches, editShowHide: !this.state.editShowHide});
        
        console.log('teacher => ' + JSON.stringify(this.state.subjectBranches));
        
        
    }

    handleModalShowHide() {
        this.setState({ showHide: !this.state.showHide })
    }

    handleEditModalHide() {
        this.setState({ editShowHide: !this.state.editShowHide });
    }

    handleChangeName = event =>{
        this.setState({subjectName: event.target.value});
    }
    handleUpdateChangeName = event =>{
        this.setState({updateSubjectName: event.target.value});
    }

    componentDidMount(){
        SubjectService.getAllSubjects().then((res) => {
            this.setState({ subjects: res.data});
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
                                <Link to="/admin/teacher-feedback" className="list-group-item list-group-item-action py-2 ripple"><i class="fas fa-comment-dots me-3"></i><span>Teacher feedback</span></Link>
                                <Link to="/admin/subject" className="list-group-item list-group-item-action py-2 ripple active"><i className="fas fa-users fa-book me-3"></i><span>Subjects</span></Link>
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
                            <h1 class="main-title float-left">Предметы</h1>
                        </div>
                        <div className="col">
                            <Button variant="primary" onClick={() => this.handleModalShowHide()}>
                                Добавить предмет
                            </Button>
                        </div>
                        
                    </div>

                    
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Subject name</th>
                            <th>Operations</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.subjects.map(subject=>(
                                <tr>
                                <td>{subject.id}</td>
                                <td>{subject.name}</td>
                                <td>
                                
                                <Button className="btn btn-primary btn-sm" onClick={() => this.handleEditModalShow(subject)}>
                                    <i class="far fa-edit"></i> Edit 
                                </Button>                                                        
                                </td>
                                </tr>
                            ))}
                            
                        </tbody>
                        </Table>
                    
                </div>  
                <Modal show={this.state.showHide}>
                    <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
                    <Modal.Title>Добавить предмет</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <div className = "form-group">
                                <label>
                                    Название предмета : 
                                </label>
                                <input type = "text" className = "form-control" value = {this.state.subjectName} onChange = {this.handleChangeName}/>
                            </div>
                            <div className = "form-group">
                                <button className = "btn btn-success" onClick={this.handleSubmit}>Сохранить</button>
                            </div>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={() => this.handleModalShowHide()}>
                        Закрыть
                    </Button>
                    </Modal.Footer>
                </Modal>
                <Modal show={this.state.editShowHide}>
                    <Modal.Header closeButton onClick={() => this.handleEditModalHide()}>
                    <Modal.Title>Изменить предмет</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <div className = "form-group">
                                <label>
                                    Name : 
                                </label>
                                <input type = "text" className = "form-control" value = { this.state.updateSubjectName } onChange = {this.handleUpdateChangeName}/>
                            </div>
                            <div className = "form-group">
                                { this.state.subjectBranches.length != 0 && (
                                    <ul>
                                        <h5>Направления</h5>
                                        {this.state.subjectBranches.map(branch => (
                                            <li>• {branch.name}</li>
                                            ))
                                        }
                                    </ul>
                                )}
                                { this.state.subjectBranches.length == 0 && (
                                    <Alert variant="primary">
                                        По этому пока не добавлены внутренние направления!
                                    </Alert>
                                )}
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
