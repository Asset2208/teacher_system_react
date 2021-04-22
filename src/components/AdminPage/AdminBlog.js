import React, { Component } from 'react';
import { Form, Button, Navbar, Nav, NavDropdown, FormControl, NavItem } from 'react-bootstrap';
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

import Header from '../Header/Header';


class AdminBlog extends Component {

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
                            {/* <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link me-3 me-lg-0" href="#"></a>
                            </li>
                            
                            <li class="nav-item me-3 me-lg-0">
                                <a class="nav-link" href="#">
                                <i class="fab fa-github"></i>
                                </a>
                            </li> */}

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

                            
                            {/* <li class="nav-item dropdown">
                                <a class="nav-link me-3 me-lg-0 dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                data-mdb-toggle="dropdown" aria-expanded="false">
                                <i class="united kingdom flag m-0"></i>
                                </a>
                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                <li>
                                    <a class="dropdown-item" href="#"><i class="united kingdom flag"></i>English
                                    <i class="fa fa-check text-success ms-2"></i></a>
                                </li>
                                <li>
                                    <hr class="dropdown-divider" />
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#"><i class="poland flag"></i>Polski</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#"><i class="china flag"></i>中文</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#"><i class="japan flag"></i>日本語</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#"><i class="germany flag"></i>Deutsch</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#"><i class="france flag"></i>Français</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#"><i class="spain flag"></i>Español</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#"><i class="russia flag"></i>Русский</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#"><i class="portugal flag"></i>Português</a>
                                </li>
                                </ul>
                            </li>

                            
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle hidden-arrow d-flex align-items-center" href="#"
                                id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                                <img src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg" class="rounded-circle" height="22"
                                    alt="" loading="lazy" />
                                </a>
                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                                <li><a class="dropdown-item" href="#">My profile</a></li>
                                <li><a class="dropdown-item" href="#">Settings</a></li>
                                <li><a class="dropdown-item" href="#">Logout</a></li>
                                </ul>
                            </li> */}
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
                                        <a href="#" class="btn btn-primary btn-sm"><i class="fas fa-plus" aria-hidden="true"></i> Add new post</a>
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

                            </div>

                        </div>

                    
                    
                </div>  
            </div>
            
        );
    }
}

export default AdminBlog;
