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
import AdminUsers from './AdminUsers';

import Header from '../Header/Header';


class Admin extends Component {

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
                <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-white mt-5">
                        <div class="position-sticky">
                            <div class="list-group list-group-flush mx-3 mt-4">
                                
                                <Link to="/admin" class="list-group-item list-group-item-action py-2 ripple active"><i class="fas fa-tachometer-alt fa-fw me-3"></i><span>Main dashboard</span></Link>
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
                                <Link to="/admin/subject" className="list-group-item list-group-item-action py-2 ripple"><i className="fas fa-users fa-book me-3"></i><span>Subjects</span></Link>
                                <Link to="/admin/subject-branches" className="list-group-item list-group-item-action py-2 ripple"><i className="fas fa-users fa-book me-3"></i><span>Subjects branches</span></Link>
                            </div>
                        </div>
                </nav>
                {/* <nav id="main-navbar">
                    <Header/>
                </nav> */}
                
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
                            
                            <NavDropdown.Item href="#action/3.1">My accounts</NavDropdown.Item>
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
            
            <div class="container pt-4" style={{width: "70%", marginLeft: "300px", marginTop: "100px"}}>
                {/* <AdminUsers /> */}

                <section class="mb-4">
                    <div class="card">
                    <div class="card-header text-center py-3">
                        <h5 class="mb-0 text-center">
                        <strong>Sales Performance KPIs</strong>
                        </h5>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                        <table class="table table-hover text-nowrap">
                            <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Product Detail Views</th>
                                <th scope="col">Unique Purchases</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Product Revenue</th>
                                <th scope="col">Avg. Price</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">Value</th>
                                <td>18,492</td>
                                <td>228</td>
                                <td>350</td>
                                <td>$4,787.64</td>
                                <td>$13.68</td>
                            </tr>
                            <tr>
                                <th scope="row">Percentage change</th>
                                <td>
                                <span class="text-danger">
                                    <i class="fas fa-caret-down me-1"></i><span>-48.8%%</span>
                                </span>
                                </td>
                                <td>
                                <span class="text-success">
                                    <i class="fas fa-caret-up me-1"></i><span>14.0%</span>
                                </span>
                                </td>
                                <td>
                                <span class="text-success">
                                    <i class="fas fa-caret-up me-1"></i><span>46.4%</span>
                                </span>
                                </td>
                                <td>
                                <span class="text-success">
                                    <i class="fas fa-caret-up me-1"></i><span>29.6%</span>
                                </span>
                                </td>
                                <td>
                                <span class="text-danger">
                                    <i class="fas fa-caret-down me-1"></i><span>-11.5%</span>
                                </span>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Absolute change</th>
                                <td>
                                <span class="text-danger">
                                    <i class="fas fa-caret-down me-1"></i><span>-17,654</span>
                                </span>
                                </td>
                                <td>
                                <span class="text-success">
                                    <i class="fas fa-caret-up me-1"></i><span>28</span>
                                </span>
                                </td>
                                <td>
                                <span class="text-success">
                                    <i class="fas fa-caret-up me-1"></i><span>111</span>
                                </span>
                                </td>
                                <td>
                                <span class="text-success">
                                    <i class="fas fa-caret-up me-1"></i><span>$1,092.72</span>
                                </span>
                                </td>
                                <td>
                                <span class="text-danger">
                                    <i class="fas fa-caret-down me-1"></i><span>$-1.78</span>
                                </span>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                    </div>
                </section>

                <section>
                    <div class="row">
                    <div class="col-xl-3 col-sm-6 col-12 mb-4">
                        <div class="card">
                        <div class="card-body">
                            <div class="d-flex justify-content-between px-md-1">
                            <div class="align-self-center">
                                <i class="fas fa-pencil-alt text-info fa-3x"></i>
                            </div>
                            <div class="text-end">
                                <h3>278</h3>
                                <p class="mb-0">New Posts</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 col-12 mb-4">
                        <div class="card">
                        <div class="card-body">
                            <div class="d-flex justify-content-between px-md-1">
                            <div class="align-self-center">
                                <i class="far fa-comment-alt text-warning fa-3x"></i>
                            </div>
                            <div class="text-end">
                                <h3>156</h3>
                                <p class="mb-0">New Comments</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 col-12 mb-4">
                        <div class="card">
                        <div class="card-body">
                            <div class="d-flex justify-content-between px-md-1">
                            <div class="align-self-center">
                                <i class="fas fa-chart-line text-success fa-3x"></i>
                            </div>
                            <div class="text-end">
                                <h3>64.89 %</h3>
                                <p class="mb-0">Bounce Rate</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 col-12 mb-4">
                        <div class="card">
                        <div class="card-body">
                            <div class="d-flex justify-content-between px-md-1">
                            <div class="align-self-center">
                                <i class="fas fa-map-marker-alt text-danger fa-3x"></i>
                            </div>
                            <div class="text-end">
                                <h3>423</h3>
                                <p class="mb-0">Total Visits</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="row">
                    <div class="col-xl-3 col-sm-6 col-12 mb-4">
                        <div class="card">
                        <div class="card-body">
                            <div class="d-flex justify-content-between px-md-1">
                            <div>
                                <h3 class="text-danger">278</h3>
                                <p class="mb-0">New Projects</p>
                            </div>
                            <div class="align-self-center">
                                <i class="fas fa-rocket text-danger fa-3x"></i>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 col-12 mb-4">
                        <div class="card">
                        <div class="card-body">
                            <div class="d-flex justify-content-between px-md-1">
                            <div>
                                <h3 class="text-success">156</h3>
                                <p class="mb-0">New Clients</p>
                            </div>
                            <div class="align-self-center">
                                <i class="far fa-user text-success fa-3x"></i>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 col-12 mb-4">
                        <div class="card">
                        <div class="card-body">
                            <div class="d-flex justify-content-between px-md-1">
                            <div>
                                <h3 class="text-warning">64.89 %</h3>
                                <p class="mb-0">Conversion Rate</p>
                            </div>
                            <div class="align-self-center">
                                <i class="fas fa-chart-pie text-warning fa-3x"></i>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 col-12 mb-4">
                        <div class="card">
                        <div class="card-body">
                            <div class="d-flex justify-content-between px-md-1">
                            <div>
                                <h3 class="text-info">423</h3>
                                <p class="mb-0">Support Tickets</p>
                            </div>
                            <div class="align-self-center">
                                <i class="far fa-life-ring text-info fa-3x"></i>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="row">
                    <div class="col-xl-3 col-sm-6 col-12 mb-4">
                        <div class="card">
                        <div class="card-body">
                            <div class="d-flex justify-content-between px-md-1">
                            <div>
                                <h3 class="text-info">278</h3>
                                <p class="mb-0">New Posts</p>
                            </div>
                            <div class="align-self-center">
                                <i class="fas fa-book-open text-info fa-3x"></i>
                            </div>
                            </div>
                            <div class="px-md-1">
                            <div class="progress mt-3 mb-1 rounded" style={{height: "7px"}}>
                                <div class="progress-bar bg-info" role="progressbar" style={{width: "80%"}} aria-valuenow="80"
                                aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 col-12 mb-4">
                        <div class="card">
                        <div class="card-body">
                            <div class="d-flex justify-content-between px-md-1">
                            <div>
                                <h3 class="text-warning">156</h3>
                                <p class="mb-0">New Comments</p>
                            </div>
                            <div class="align-self-center">
                                <i class="far fa-comments text-warning fa-3x"></i>
                            </div>
                            </div>
                            <div class="px-md-1">
                            <div class="progress mt-3 mb-1 rounded" style={{height: "7px"}}>
                                <div class="progress-bar bg-warning" role="progressbar" style={{width: "35%"}} aria-valuenow="35"
                                aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 col-12 mb-4">
                        <div class="card">
                        <div class="card-body">
                            <div class="d-flex justify-content-between px-md-1">
                            <div>
                                <h3 class="text-success">64.89 %</h3>
                                <p class="mb-0">Bounce Rate</p>
                            </div>
                            <div class="align-self-center">
                                <i class="fas fa-mug-hot text-success fa-3x"></i>
                            </div>
                            </div>
                            <div class="px-md-1">
                            <div class="progress mt-3 mb-1 rounded" style={{height: "7px"}}>
                                <div class="progress-bar bg-success" role="progressbar" style={{width: "60%"}} aria-valuenow="60"
                                aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 col-12 mb-4">
                        <div class="card">
                        <div class="card-body">
                            <div class="d-flex justify-content-between px-md-1">
                            <div>
                                <h3 class="text-danger">423</h3>
                                <p class="mb-0">Total Visits</p>
                            </div>
                            <div class="align-self-center">
                                <i class="fas fa-map-signs text-danger fa-3x"></i>
                            </div>
                            </div>
                            <div class="px-md-1">
                            <div class="progress mt-3 mb-1 rounded" style={{height: "7px"}}>
                                <div class="progress-bar bg-danger" role="progressbar" style={{width: "40%"}} aria-valuenow="40"
                                aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>

                <section>
                    <div class="row">
                    <div class="col-xl-6 col-md-12 mb-4">
                        <div class="card">
                        <div class="card-body">
                            <div class="d-flex justify-content-between p-md-1">
                            <div class="d-flex flex-row">
                                <div class="align-self-center">
                                <i class="fas fa-pencil-alt text-info fa-3x me-4"></i>
                                </div>
                                <div>
                                <h4>Total Posts</h4>
                                <p class="mb-0">Monthly blog posts</p>
                                </div>
                            </div>
                            <div class="align-self-center">
                                <h2 class="h1 mb-0">18,000</h2>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-md-12 mb-4">
                        <div class="card">
                        <div class="card-body">
                            <div class="d-flex justify-content-between p-md-1">
                            <div class="d-flex flex-row">
                                <div class="align-self-center">
                                <i class="far fa-comment-alt text-warning fa-3x me-4"></i>
                                </div>
                                <div>
                                <h4>Total Comments</h4>
                                <p class="mb-0">Monthly blog posts</p>
                                </div>
                            </div>
                            <div class="align-self-center">
                                <h2 class="h1 mb-0">84,695</h2>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="row">
                    <div class="col-xl-6 col-md-12 mb-4">
                        <div class="card">
                        <div class="card-body">
                            <div class="d-flex justify-content-between p-md-1">
                            <div class="d-flex flex-row">
                                <div class="align-self-center">
                                <h2 class="h1 mb-0 me-4">$76,456.00</h2>
                                </div>
                                <div>
                                <h4>Total Sales</h4>
                                <p class="mb-0">Monthly Sales Amount</p>
                                </div>
                            </div>
                            <div class="align-self-center">
                                <i class="far fa-heart text-danger fa-3x"></i>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-md-12 mb-4">
                        <div class="card">
                        <div class="card-body">
                            <div class="d-flex justify-content-between p-md-1">
                            <div class="d-flex flex-row">
                                <div class="align-self-center">
                                <h2 class="h1 mb-0 me-4">$36,000.00</h2>
                                </div>
                                <div>
                                <h4>Total Cost</h4>
                                <p class="mb-0">Monthly Cost</p>
                                </div>
                            </div>
                            <div class="align-self-center">
                                <i class="fas fa-wallet text-success fa-3x"></i>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                </div>  
            </div>
            
        );
    }
}

export default Admin;
