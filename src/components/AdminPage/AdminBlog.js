import React, { Component } from 'react';
import { Form, Button, Navbar, Nav, NavDropdown, FormControl, NavItem, Modal  } from 'react-bootstrap';
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
import BlogService from '../../services/BlogService';

import Select from 'react-select';


class AdminBlog extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            id: 0,
            city: "",
            selectedOption: null,
            postTitle: "",
            postContent: "",
            postPreContent: "",
            postAuthor: "",
            postImageUrl: "",
            postViews: 1,
            postEnabled: true,
            postCommentEnabled: true,
            updateName: "",
            showHide : false,
            editShowHide: false,
            categories: [],
            posts: [],
            options: [],
            categoryEntity: {},
            postEntity: {},
            categorySelectEditName: ""
        }

        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleContentChange = this.handleContentChange.bind(this);
        this.handleContentChange = this.handleContentChange.bind(this);
        this.handlePreContentChange = this.handlePreContentChange.bind(this);
        this.handleAuthorChange = this.handleAuthorChange.bind(this);
        this.handleImageUrlChange = this.handleImageUrlChange.bind(this);
        // this.handleUpdateViewsChange = this.handleUpdateViewsChange.bind(this);
        this.handleUpdateNameChange = this.handleUpdateNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpdateSubmit = this.handleUpdateSubmit.bind(this);
    }

    componentDidMount(){
        BlogService.getPosts().then((res) => {
            this.setState({ posts: res.data});
        });
        
        BlogService.getBlogCategories().then((res) => {
            this.setState({ categories: res.data});

            const options = this.state.categories.map(d => ({
                "value" : d.id,
                "label" : d.name
              }));
              this.setState({ options: options});
        });
    }

    handleTitleChange = event =>{
        this.setState({postTitle: event.target.value});
    }
    handleContentChange = event =>{
        this.setState({postContent: event.target.value});
    }
    handlePreContentChange = event =>{
        this.setState({postPreContent: event.target.value});
    }
    handleAuthorChange = event =>{
        this.setState({postAuthor: event.target.value});
    }
    handleImageUrlChange = event =>{
        this.setState({postImageUrl: event.target.value});
    }
    
    handleUpdateNameChange = event =>{
        this.setState({updateName: event.target.value});
    }

    handleModalShowHide() {
        this.setState({ showHide: !this.state.showHide })
    }

    handleEditModalShow(id) {
        BlogService.getPostById(id).then( res => {
            this.setState({postEntity: res.data});
            this.setState({updateName: this.state.postEntity.title });
            this.setState({categorySelectEditName: this.state.postEntity.category.name});
        });
        this.setState({ editShowHide: !this.state.editShowHide })
    }
    handleEditModalHide() {
        this.setState({ editShowHide: !this.state.editShowHide })
    }

    handleChange(e){
        BlogService.getBlogCategoryById(e.value).then( res => {
            this.setState({categoryEntity: res.data});
        });
        this.setState({ id: e.value, city: e.label})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let postBody = {title: this.state.postTitle, city: this.state.cityEntity};

        console.log('city => ' + JSON.stringify(postBody));

        BlogService.createPost(postBody).then(res =>{
            window.location.replace("/admin/blog");
        });
    }

    handleUpdateSubmit = (e) => {
        e.preventDefault();
        let postBody = {title: this.state.updateName, city: this.state.cityEntity};
        // console.log('city => ' + JSON.stringify(cityBody));

        BlogService.updatePost(postBody, this.state.postEntity.id).then(res =>{
            window.location.replace("/admin/blog");
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
                                <Link to="/admin/blog" className="list-group-item list-group-item-action py-2 ripple active"><i class="fas fa-newspaper fa-fw me-3"></i><span>Blog</span></Link>
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
                        <h1 class="main-title float-left">Blog posts</h1>
                    </div>


                    <div class="row">
                            <div class="card mb-3">
                                <div class="card-header mt-3">
                                    <div className="row">
                                        <div className="col-10">
                                        <h3><i class="far fa-file-alt"></i> Blog posts</h3>
                                        </div>
                                        <div className="col ml-auto">
                                        <Button variant="primary" onClick={() => this.handleModalShowHide()}>
                                            Add new post
                                        </Button>
                                        </div>
                                        
                                    </div>
                                    
                                </div>

                                <div class="card-body">

                                    <div class="table-responsive">
                                        <table class="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th style={{minWidth: "300px"}} >Article details</th>
                                                    <th style={{width: "100px"}}>Category</th>
                                                    <th style={{minWidth: "110px"}}>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                <tr>
                                                    <td>
                                                        <div className="row">
                                                            <div className="col">
                                                                <div class="blog_list"><img class="img-fluid d-none d-lg-block" alt="image" src="https://via.placeholder.com/180x120" style={{height: "150px"}} /></div>
                                                            </div>
                                                            <div className="col-8">
                                                                <h4> Vivamus condimentum rutrum odio</h4>
                                                                <p>Posted by <b>Administrator</b> at Nov 29 2018</p>
                                                                <p>Nulla cursus maximus lacus at efficitur. In lobortis ante vitae nulla semper, in volutpat libero aliquet. Morbi sit amet nibh vitae metus interdum finibus sed nec nisl. Ut quam dolor, bibendum id maximus ut, suscipit consectetur sem.</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>Blog</td>
                                                    <td>
                                                        <a href="#" class="btn btn-primary btn-sm btn-block"><i class="far fa-edit"></i> Edit</a>                                                        
                                                        <a href="#" class="btn btn-danger btn-sm btn-block mt-2"><i class="fas fa-trash"></i> Delete</a>                                                        
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="row">
                                                            <div className="col">
                                                                <div class="blog_list"><img class="img-fluid d-none d-lg-block" alt="image" src="https://via.placeholder.com/180x120" style={{height: "150px"}} /></div>
                                                            </div>
                                                            <div className="col-8">
                                                                <h4> Vivamus condimentum rutrum odio</h4>
                                                                <p>Posted by <b>Administrator</b> at Nov 29 2018</p>
                                                                <p>Nulla cursus maximus lacus at efficitur. In lobortis ante vitae nulla semper, in volutpat libero aliquet. Morbi sit amet nibh vitae metus interdum finibus sed nec nisl. Ut quam dolor, bibendum id maximus ut, suscipit consectetur sem.</p>
                                                            </div>
                                                        </div>
                                                    </td>

                                                    <td>Blog</td>

                                                    <td>
                                                        <a href="#" class="btn btn-primary btn-sm btn-block"><i class="far fa-edit"></i> Edit</a>                                                        
                                                        <a href="#" class="btn btn-danger btn-sm btn-block mt-2"><i class="fas fa-trash"></i> Delete</a>                                                        
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="row">
                                                            <div className="col">
                                                                <div class="blog_list"><img class="img-fluid d-none d-lg-block" alt="image" src="https://via.placeholder.com/180x120" style={{height: "150px"}} /></div>
                                                            </div>
                                                            <div className="col-8">
                                                                <h4> Vivamus condimentum rutrum odio</h4>
                                                                <p>Posted by <b>Administrator</b> at Nov 29 2018</p>
                                                                <p>Nulla cursus maximus lacus at efficitur. In lobortis ante vitae nulla semper, in volutpat libero aliquet. Morbi sit amet nibh vitae metus interdum finibus sed nec nisl. Ut quam dolor, bibendum id maximus ut, suscipit consectetur sem.</p>
                                                            </div>
                                                        </div>
                                                    </td>

                                                    <td>News</td>

                                                    <td>
                                                        <a href="#" class="btn btn-primary btn-sm btn-block"><i class="far fa-edit"></i> Edit</a>                                                        
                                                        <a href="#" class="btn btn-danger btn-sm btn-block mt-2"><i class="fas fa-trash"></i> Delete</a>                                                        
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="row">
                                                            <div className="col">
                                                                <div class="blog_list"><img class="img-fluid d-none d-lg-block" alt="image" src="https://via.placeholder.com/180x120" style={{height: "150px"}} /></div>
                                                            </div>
                                                            <div className="col-8">
                                                                <h4> Vivamus condimentum rutrum odio</h4>
                                                                <p>Posted by <b>Administrator</b> at Nov 29 2018</p>
                                                                <p>Nulla cursus maximus lacus at efficitur. In lobortis ante vitae nulla semper, in volutpat libero aliquet. Morbi sit amet nibh vitae metus interdum finibus sed nec nisl. Ut quam dolor, bibendum id maximus ut, suscipit consectetur sem.</p>
                                                            </div>
                                                        </div>
                                                    </td>

                                                    <td>News</td>

                                                    <td>
                                                        <a href="#" class="btn btn-primary btn-sm btn-block"><i class="far fa-edit"></i> Edit</a>                                                        
                                                        <a href="#" class="btn btn-danger btn-sm btn-block mt-2"><i class="fas fa-trash"></i> Delete</a>                                                        
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="row">
                                                            <div className="col">
                                                                <div class="blog_list"><img class="img-fluid d-none d-lg-block" alt="image" src="https://via.placeholder.com/180x120" style={{height: "150px"}} /></div>
                                                            </div>
                                                            <div className="col-8">
                                                                <h4> Vivamus condimentum rutrum odio</h4>
                                                                <p>Posted by <b>Administrator</b> at Nov 29 2018</p>
                                                                <p>Nulla cursus maximus lacus at efficitur. In lobortis ante vitae nulla semper, in volutpat libero aliquet. Morbi sit amet nibh vitae metus interdum finibus sed nec nisl. Ut quam dolor, bibendum id maximus ut, suscipit consectetur sem.</p>
                                                            </div>
                                                        </div>
                                                    </td>

                                                    <td>News</td>

                                                    <td>
                                                        <a href="#" class="btn btn-primary btn-sm btn-block"><i class="far fa-edit"></i> Edit</a>                                                        
                                                        <a href="#" class="btn btn-danger btn-sm btn-block mt-2"><i class="fas fa-trash"></i> Delete</a>                                                        
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>


                                </div>
                                <Modal show={this.state.showHide}>
                                <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
                                <Modal.Title>Add category</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <form>
                                        <div className = "form-group">
                                            <label>
                                                Name : 
                                            </label>
                                            <input type = "text" className = "form-control" value = {this.name} onChange = {this.handleTitleChange}/>
                                        </div>
                                        <div className = "form-group">
                                            <button className = "btn btn-success" onClick={this.handleSubmit}>Add category</button>
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
                                <Modal.Title>Edit category</Modal.Title>
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
                                            <button className = "btn btn-success" onClick={this.handleUpdateSubmit}>Edit category</button>
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

                        </div>

                    
                    
                </div>  
            </div>
            
        );
    }
}

export default AdminBlog;
