import React, { Component } from 'react';
import { Form, Button, Navbar, Nav, NavDropdown, FormControl, NavItem, Table, Modal } from 'react-bootstrap';
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
import CityService from '../../services/CityService';


class AdminCities extends Component {

    constructor(props){
        super(props);
        this.state = {
            city: "",
            updateName: "",
            showHide : false,
            editShowHide: false,
            cities: [],
            cityEntity: {}
        }

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleUpdateNameChange = this.handleUpdateNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpdateSubmit = this.handleUpdateSubmit.bind(this);
    }

    componentDidMount(){
        CityService.getCities().then((res) => {
            this.setState({ cities: res.data});
        });
    }

    handleNameChange = event =>{
        this.setState({city: event.target.value});
    }
    handleUpdateNameChange = event =>{
        this.setState({updateName: event.target.value});
    }

    handleModalShowHide() {
        this.setState({ showHide: !this.state.showHide })
    }

    handleEditModalShow(id) {
        CityService.getCityById(id).then( res => {
            this.setState({cityEntity: res.data});
            this.setState({updateName: this.state.cityEntity.city });
        });
        this.setState({ editShowHide: !this.state.editShowHide })
    }
    handleEditModalHide() {
        this.setState({ editShowHide: !this.state.editShowHide })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let cityBody = {city: this.state.city};
        console.log('city => ' + JSON.stringify(cityBody));

        CityService.createCity(cityBody).then(res =>{
            window.location.replace("/admin/cities");
        });
    }

    handleUpdateSubmit = (e) => {
        e.preventDefault();
        let cityBody = {city: this.state.updateName};
        console.log('city => ' + JSON.stringify(cityBody));

        CityService.updateCity(cityBody, this.state.cityEntity.id).then(res =>{
            window.location.replace("/admin/cities");
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
                                <Link to="/admin/cities" className="list-group-item list-group-item-action py-2 ripple  active"><i class="fas fa-city me-3"></i><span>Cities</span></Link>
                                <Link to="/admin/districts" className="list-group-item list-group-item-action py-2 ripple"><i class="fas fa-building me-3"></i><span>Districts</span></Link>
                                <Link to="/admin/s-feedback" className="list-group-item list-group-item-action py-2 ripple"><i class="fas fa-comment-dots me-3"></i><span>System feedback</span></Link>
                                <Link to="/admin/s-feedback-category" className="list-group-item list-group-item-action py-2 ripple"><i class="far fa-comment-dots me-3"></i><span>System feedback category</span></Link>
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
                        <h1 class="main-title float-left">Cities</h1>
                    </div>

                    <Button variant="primary" onClick={() => this.handleModalShowHide()}>
                        Add city
                    </Button>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>City name</th>
                            <th>Operations</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.cities.map(city=>(
                                <tr>
                                <td>{city.id}</td>
                                <td>{city.city}</td>
                                <td>
                                <Button className="btn btn-primary btn-sm" onClick={() => this.handleEditModalShow(city.id)}>
                                    <i class="far fa-edit"></i> Edit 
                                </Button>
                                    <a href="#" class="btn btn-danger btn-sm ml-3"><i class="fas fa-trash"></i> Delete</a>                                                        
                                </td>
                                </tr>
                            ))}
                            
                        </tbody>
                        </Table>
                    
                </div>  
                <Modal show={this.state.showHide}>
                    <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
                    <Modal.Title>Add city</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <div className = "form-group">
                                <label>
                                    Name : 
                                </label>
                                <input type = "text" className = "form-control" value = {this.name} onChange = {this.handleNameChange}/>
                            </div>
                            <div className = "form-group">
                                <button className = "btn btn-success" onClick={this.handleSubmit}>Add city</button>
                            </div>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={() => this.handleModalShowHide()}>
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={this.state.editShowHide}>
                    <Modal.Header closeButton onClick={() => this.handleEditModalHide()}>
                    <Modal.Title>Edit city</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <div className = "form-group">
                                <label>
                                    Name : 
                                </label>
                                <input type = "text" className = "form-control" value = { this.state.updateName } onChange = {this.handleUpdateNameChange}/>
                            </div>
                            <div className = "form-group">
                                <button className = "btn btn-success" onClick={this.handleUpdateSubmit}>Edit city</button>
                            </div>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={() => this.handleEditModalHide()}>
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal>
            </div>
            
        );
    }
}

export default AdminCities;
