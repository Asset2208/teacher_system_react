import React from 'react'
import { Component } from 'react';
import { Form, Button, Navbar, Nav, NavDropdown, FormControl, NavItem } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import UserService from '../../services/UserService';
import '../../bootstrap/css/bootstrap.min.css';

class Header extends Component {

    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);

        this.state = {
            showModeratorBoard: false,
            showAdminBoard: false,
            showTeacherBoard: false,
            currentUser: undefined,
            jwtToken: ""
        };
        }

        async componentDidMount() {
            // try{
            //     const user = UserService.getCurrentUser();
            //     console.log(user);
            //     if (user) {
            //         this.setState({
            //         currentUser: user,
            //         // showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
            //         // showAdminBoard: user.roles.includes("ROLE_ADMIN"),
            //         });
            //     }
            // }
            // catch{
                
            // }

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
                    res.roles.map((role) => {
                        if(role.role == "ROLE_ADMIN"){
                            this.setState({showAdminBoard: true});
                        }
                        else if(role.role == "ROLE_MODERATOR"){
                            this.setState({showModeratorBoard: true});
                        }
                        else if(role.role == "ROLE_TEACHER"){
                            this.setState({showTeacherBoard: true});
                        }
                    });
                    this.setState({
                        currentUser: res,
                      });
                } 
                
        
            }
            catch{
                
            }
        
        }

    logOut() {
        UserService.logout();
    }

    render() {
        const { currentUser, showModeratorBoard, showAdminBoard, showTeacherBoard } = this.state;
        return (
                <Navbar bg="light"  className="fixed-top mb-5">
                    <div className="container">
                    <Navbar.Brand><Link to="/" className="nav-link"><img src="https://www.artlebedev.com/everything/tutor/logo/process/tutor-process-001.jpg" height="60" alt="" loading="lazy" /></Link>
                        
                        </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Главная страница</Nav.Link>
                            <Link to="/blog" className="nav-link">Новости</Link>
                            <Link to="/feedback" className="nav-link">Отзывы</Link>
                            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                        
                        {showModeratorBoard && (
                            <NavItem className="nav-item">
                                <Link to={"/mod"} className="nav-link">
                                Модератор
                                </Link>
                            </NavItem>
                            )}

                            {showAdminBoard && (
                            <Nav className="nav-item">
                                <Link to="/admin" className="nav-link">
                                Админ
                                </Link>
                            </Nav>
                            )}
                            {showTeacherBoard && (
                            <Nav className="nav-item">
                                <Link to="/teacher" className="nav-link">
                                Преподаватель
                                </Link>
                            </Nav>
                            )}
                            
                            {currentUser ? (
                                <div className="navbar-nav">
                                    <Link to="/profile" className="nav-link">{this.state.currentUser.fullName}</Link>
                                    <NavItem>
                                        <a href="/login" className="nav-link" onClick={this.logOut}> Выйти </a>
                                    </NavItem>
                                </div>
                                
                            ) : (
                                <div className="navbar-nav">
                                    <Link to="/register" className="nav-link">Регистрация</Link>
                                    <Link to="/login" className="nav-link">Логин</Link>
                                </div>
                            )}
                    </Navbar.Collapse>
                    </div>
                </Navbar>
            
            
            // <Navbar bg="dark" variant="dark">
            //     <div className="container">
            //         <Link to="/" className="navbar-brand">ITrello</Link>
            //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
            //         <Navbar.Collapse id="basic-navbar-nav">
            //             <Nav className="ml-auto">
            //                 {showModeratorBoard && (
            //                 <NavItem className="nav-item">
            //                     <Link to={"/mod"} className="nav-link">
            //                     Moderator Board
            //                     </Link>
            //                 </NavItem>
            //                 )}

            //                 {showAdminBoard && (
            //                 <Nav className="nav-item">
            //                     <Link to="/admin" className="nav-link">
            //                     Admin Board
            //                     </Link>
            //                     <Link to={"/add-card/_add"} className="nav-link">Add Card</Link>
            //                 </Nav>
            //                 )}
                            
            //                 <Link to="/" className="nav-link">All cards</Link>
            //                 {currentUser ? (
            //                     <div className="navbar-nav">
            //                         <Link to="/profile" className="nav-link">{this.state.currentUser.fullName}</Link>
            //                         <NavItem>
            //                             <a href="/login" className="nav-link" onClick={this.logOut}> LogOut </a>
            //                         </NavItem>
            //                     </div>
                                
            //                 ) : (
            //                     <div className="navbar-nav">
            //                         <Link to="/register" className="nav-link">Register</Link>
            //                         <Link to="/login" className="nav-link">Login</Link>
            //                     </div>
            //                 )}
            //             </Nav>
            //         </Navbar.Collapse>
            //     </div>
            // </Navbar>
            // <div>
            //     <head>
            //         <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
            //         <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"/>
            //         <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
            //         <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
            //     </head>
            //     <nav class="navbar navbar-expand-lg navbar-light bg-light">
            //     <a class="navbar-brand" href="#">Navbar</a>
            //         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            //             <span class="navbar-toggler-icon"></span>
            //         </button>

            //         <div class="collapse navbar-collapse" id="navbarSupportedContent">
            //             <ul class="navbar-nav mr-auto">
            //             <li class="nav-item active">
            //                 <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            //             </li>
            //             <li class="nav-item">
            //                 <a class="nav-link" href="#">Link</a>
            //             </li>
            //             <li class="nav-item dropdown">
            //                 <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            //                 Dropdown
            //                 </a>
            //                 <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            //                 <a class="dropdown-item" href="#">Action</a>
            //                 <a class="dropdown-item" href="#">Another action</a>
            //                 <div class="dropdown-divider"></div>
            //                 <a class="dropdown-item" href="#">Something else here</a>
            //                 </div>
            //             </li>
            //             <li class="nav-item">
            //                 <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            //             </li>
            //             </ul>
            //             <form class="form-inline my-2 my-lg-0">
            //             <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            //             <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            //             </form>
            //         </div>

                
            //     </nav>
            // </div>
            
        );
    }
    
}

export default Header;
