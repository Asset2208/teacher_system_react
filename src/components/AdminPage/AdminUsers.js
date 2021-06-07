import React, { Component } from 'react';
import { Form, Button, Navbar, Nav, NavDropdown, FormControl, NavItem } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import './css/scroll.css';

class AdminUsers extends Component {
    render() {
        return (
            <div>
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
                                <Link to="/admin/users" className="list-group-item list-group-item-action py-2 ripple  active"><i className="fas fa-users fa-fw me-3"></i><span>Users</span></Link>
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
                                
                                <NavDropdown.Item href="#action/3.1">My account</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
                            </NavDropdown>
                            </ul>
                        </div>
                        
                        </nav>
                </header>
                
                <div class="container pt-4" style={{width: "70%", marginLeft: "300px", marginTop: "100px"}}>
    
                    <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                <div class="card mb-3">
                                    <div class="card-header">
                                        <span class="pull-right">
                                            <button class="btn btn-primary btn-sm" data-toggle="modal" data-target="#modal_add_user">
                                                <i class="fas fa-user-plus" aria-hidden="true"></i> Add new user</button>
                                        </span>
                                        <div class="modal fade custom-modal" tabindex="-1" role="dialog" aria-labelledby="modal_add_user" aria-hidden="true" id="modal_add_user">
                                            <div class="modal-dialog">
                                                <div class="modal-content">
    
                                                    <form action="#" method="post" enctype="multipart/form-data">
    
                                                        <div class="modal-header">
                                                            <h5 class="modal-title">Add new user</h5>
                                                            <button type="button" class="close" data-dismiss="modal">
                                                                <span aria-hidden="true">&times;</span>
                                                                <span class="sr-only">Close</span>
                                                            </button>
                                                        </div>
    
                                                        <div class="modal-body">
    
                                                            <div class="row">
                                                                <div class="col-lg-12">
                                                                    <div class="form-group">
                                                                        <label>Full name (required)</label>
                                                                        <input class="form-control" name="name" type="text" required />
                                                                    </div>
                                                                </div>
                                                            </div>
    
                                                            <div class="row">
                                                                <div class="col-lg-6">
                                                                    <div class="form-group">
                                                                        <label>Valid Email (required)</label>
                                                                        <input class="form-control" name="email" type="email" required />
                                                                    </div>
                                                                </div>
    
                                                                <div class="col-lg-6">
                                                                    <div class="form-group">
                                                                        <label>Password (required)</label>
                                                                        <input class="form-control" name="password" type="text" required />
                                                                    </div>
                                                                </div>
                                                            </div>
    
                                                            <div class="row">
    
                                                                <div class="col-lg-6">
                                                                    <div class="form-group">
                                                                        <label>Role</label>
                                                                        <select name="role_id" class="form-control" required>
                                                                            <option value="">- select -</option>
                                                                            <optgroup label="Staff member">
                                                                                <option value="1">Administrator</option>
                                                                                <option value="2">Manager</option>
                                                                                <option value="3">Author</option>
                                                                            </optgroup>
    
                                                                            <optgroup label="Registered member">
                                                                                <option value="4">User</option>
                                                                            </optgroup>
                                                                        </select>
                                                                    </div>
                                                                </div>
    
                                                                <div class="col-lg-6">
                                                                    <div class="form-group">
                                                                        <label>Skype (optional)</label>
                                                                        <input class="form-control" name="skype" type="text" />
                                                                    </div>
                                                                </div>
                                                            </div>
    
    
                                                            <div class="row">
                                                                <div class="col-lg-6">
                                                                    <div class="form-group">
                                                                        <label>Email verified</label>
                                                                        <select name="email_verified" class="form-control">
                                                                            <option value="1">YES</option>
                                                                            <option value="0">NO</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
    
                                                                <div class="col-lg-6">
                                                                    <div class="form-group">
                                                                        <label>Active</label>
                                                                        <select name="active" class="form-control">
                                                                            <option value="1">YES</option>
                                                                            <option value="0">NO</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
    
                                                            </div>
    
                                                            <div class="form-group">
                                                                <label>Avatar image (optional):</label>
                                                                <br />
                                                                <input type="file" name="image" />
                                                            </div>
    
                                                        </div>
    
                                                        <div class="modal-footer">
                                                            <button type="button" class="btn btn-primary">Add user</button>
                                                        </div>
    
                                                    </form>
    
                                                </div>
                                            </div>
                                        </div>
                                        <h3>
                                            <i class="far fa-user"></i> All users</h3>
                                    </div>
    
                                    <div class="card-body">
    
                                        <div class="table-responsive">
                                            <table class="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th style={{minWidth: "300px"}}>User details</th>
                                                        <th style={{width: "120px"}}>Role</th>
                                                        <th style={{minWidth: "110px"}}>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
    
                                                    <tr>
                                                        <td>
                                                            <div className="row">
                                                                <div class="user_avatar_list d-none d-none d-lg-block col ">
                                                                    <img alt="image" src={"https://sun9-18.userapi.com/impg/c857432/v857432602/1ec3a9/JNxnuDlNY2E.jpg?size=640x640&quality=96&sign=f794844e426bf7bc217a99b4c19a6062&type=album"} alt="user pic"style={{height: "110px", borderRadius: 30}} />
                                                                </div>
                                                                <div className="col">
                                                                <h4>Demo Administrator</h4>
                                                            <p>webmaster@website.com</p>
                                                                </div>
                                                            </div>
                                                            
                                                            
                                                            <p>Bio: Nulla cursus maximus lacus at efficitur. In lobortis ante vitae nulla semper, in volutpat libero aliquet. Morbi sit amet nibh vitae metus interdum finibus sed nec nisl nec sidios.</p>
                                                        </td>
    
                                                        <td>Administrator</td>
    
    
                                                        <td>
                                                            <a href="#" class="btn btn-primary btn-sm btn-block"><i class="far fa-edit"></i> Edit</a>
                                                            <a href="#" class="btn btn-danger btn-sm btn-block mt-2"><i class="fas fa-trash"></i> Delete</a>
                                                        </td>
                                                    </tr>
    
                                                    <tr>
                                                    <td>
                                                            <div className="row">
                                                                <div class="user_avatar_list d-none d-none d-lg-block col ">
                                                                    <img alt="image" src={"https://sun9-18.userapi.com/impg/c857432/v857432602/1ec3a9/JNxnuDlNY2E.jpg?size=640x640&quality=96&sign=f794844e426bf7bc217a99b4c19a6062&type=album"} alt="user pic"style={{height: "110px", borderRadius: 30}} />
                                                                </div>
                                                                <div className="col">
                                                                <h4>Demo Administrator</h4>
                                                            <p>webmaster@website.com</p>
                                                                </div>
                                                            </div>
                                                            
                                                            
                                                            <p>Bio: Nulla cursus maximus lacus at efficitur. In lobortis ante vitae nulla semper, in volutpat libero aliquet. Morbi sit amet nibh vitae metus interdum finibus sed nec nisl nec sidios.</p>
                                                        </td>
    
                                                        <td>Author</td>
    
    
                                                        <td>
                                                            <a href="#" class="btn btn-primary btn-sm btn-block"><i class="far fa-edit"></i> Edit</a>
                                                            <a href="#" class="btn btn-danger btn-sm btn-block mt-2"><i class="fas fa-trash"></i> Delete</a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div class="user_avatar_list d-none d-none d-lg-block"><img alt="image" src="assets/images/avatars/avatar_small.png" /></div>
                                                            <h4>Test Author</h4>
                                                            <p>user@website.com</p>
                                                            <p>Bio: Nulla cursus maximus lacus at efficitur. In lobortis ante vitae nulla semper, in volutpat libero aliquet. Morbi sit amet nibh vitae metus interdum finibus sed nec nisl nec sidios.</p>
                                                        </td>
    
                                                        <td>Author</td>
    
                                                        <td>
                                                            <a href="#" class="btn btn-primary btn-sm btn-block"><i class="far fa-edit"></i> Edit</a>
                                                            <a href="#" class="btn btn-danger btn-sm btn-block mt-2"><i class="fas fa-trash"></i> Delete</a>
                                                        </td>
                                                    </tr>
                                                    <tr>
    
                                                        <td>
                                                            <span class="user_avatar_list d-none d-none d-lg-block">
                                                                <img alt="image" src="assets/images/avatars/avatar_small.png" />
                                                            </span>
                                                            <h4>Test Manager</h4>
                                                            <p>manager@website.com</p>
                                                            <p>Bio: Nulla cursus maximus lacus at efficitur. In lobortis ante vitae nulla semper, in volutpat libero aliquet. Morbi sit amet nibh vitae metus interdum finibus sed nec nisl nec sidios.</p>
                                                        </td>
    
                                                        <td>Manager</td>
    
                                                        <td>
                                                            <a href="#" class="btn btn-primary btn-sm btn-block"><i class="far fa-edit"></i> Edit</a>
                                                            <a href="#" class="btn btn-danger btn-sm btn-block mt-2"><i class="fas fa-trash"></i> Delete</a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div class="user_avatar_list d-none d-none d-lg-block"><img alt="image" src="assets/images/avatars/avatar_small.png" /></div>
                                                            <h4>Admin 2</h4>
                                                            <p>admin2@website.com</p>
                                                            <p>Bio: Nulla cursus maximus lacus at efficitur. In lobortis ante vitae nulla semper, in volutpat libero aliquet. Morbi sit amet nibh vitae metus interdum finibus sed nec nisl nec sidios.</p>
                                                        </td>
    
                                                        <td>Administrator</td>
    
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
                </div>
                
            </div>
        )
    }
}

export default AdminUsers
