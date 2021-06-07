import React, {Component} from 'react'
import Header from '././Header/Header';
import Footer from '././Footer/Footer';
import './css/home.css';
import '../bootstrap/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import TeacherService from '../services/TeacherService';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


class Home extends Component {

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
            name: "",
            surname: "",
            patronymic: "",
            title: "",
            subjects: "",
            story: "",
            imageUrl: "",
            cityName: "",
            phoneNumber: "",
            old_password: "",
            new_password: "",
            repeat_new_password: "",
            errors: {},
            IsTeachOnline: false,
            message: "",
            showTeacherBoard: false,
            cityEntity: {},
            cities: [],
            cityOptions: [],
            experiences: [],
            educations: [],
            achievements: [],
            teachers: []
        };

    }

    componentDidMount() {
        TeacherService.getAllTeachersEnabled().then(res => {
            this.setState({teachers: res.data});

            // console.log('teacher => ' + JSON.stringify(this.state.teacherEntity));
        });

    }


    render() {
    return (
        <div>
            <Header />

            <div class="bg-image hover-overlay shadow-1-strong rounded ripple" style={{maxHeight:"450px", marginTop: "95px"}}>
            {/* style={{backgroundImage: `url("https://www.oct.ca/-/media/Images/banner/Section%20Banners/Public%20Protection/Find_a_Teacher.jpg")`, backgroundPosition: "center", backgroundSize: "cover"}} */}
            <img src="https://www.oct.ca/-/media/Images/banner/Section%20Banners/Public%20Protection/Find_a_Teacher.jpg" class="img-fluid" />
            <a href="#!">
                <div class="mask" style={{backgroundColor: "rgba(25, 25, 25, 0.5)"}}>
                    <div class="d-flex justify-content-center align-items-center h-100">
                        <h1 class="text-white">Tutor.kz | Find your way to be smart</h1>
                    </div>
                </div>
            </a>
                <div class="container h-100">
                <div class="row h-100 align-items-center">
                    <div class="col-lg-12">
                    <h1 class="display-4 text-white mt-5 mb-2">Business Name or Tagline</h1>
                    <p class="lead mb-5 text-white-50">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non possimus ab labore provident mollitia. Id assumenda voluptate earum corporis facere quibusdam quisquam iste ipsa cumque unde nisi, totam quas ipsam.</p>
                    </div>
                </div>
                </div>
            </div>

            <div class="container p-5">
            <div class="row">
                <div class="col-md-8 mb-5">
                    <h2>What We Do</h2>
                    <hr/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A deserunt neque tempore recusandae animi soluta quasi? Asperiores rem dolore eaque vel, porro, soluta unde debitis aliquam laboriosam. Repellat explicabo, maiores!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis optio neque consectetur consequatur magni in nisi, natus beatae quidem quam odit commodi ducimus totam eum, alias, adipisci nesciunt voluptate. Voluptatum.</p>
                    <a class="btn btn-primary btn-lg" href="#">Find teacher &raquo;</a>
                </div>
                <div class="col-md-4 mb-5">
                    <h2>Contact Us</h2>
                    <hr/>
                    <address>
                    <strong>Start Bootstrap</strong>
                    <br/>3481 Melrose Place
                    <br/>Beverly Hills, CA 90210
                    <br/>
                    </address>
                    <address>
                    <abbr title="Phone">P:</abbr>
                    (123) 456-7890
                    <br/>
                    <abbr title="Email">E:</abbr>
                    <a href="mailto:#">name@example.com</a>
                    </address>
                </div>
                </div>

                <div class="row mb-5">
                    {this.state.teachers.map(teacher => (
                        <div class="col-md-4">
                        <h4 class="text-center"><strong>Репетитор по {teacher.title} </strong></h4>
                        <hr/>
                        
                        <div class="profile-card-4 text-center"><img style={{height: "200px"}} src={teacher.imageUrl} class="img img-responsive"/>
                            <a href={"teacher/" + teacher.id} class="stretched-link"></a>
                            <div class="profile-content">
                                <div class="profile-name" style={{color: "black"}}>{teacher.name} {teacher.surname}
                                    <p>@johndoedesigner</p>
                                </div>
                                <div class="profile-description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</div>
                                <div class="row">
                                    <div class="col">
                                        <div class="profile-overview">
                                            <p>Reviews</p>
                                            <h4>54</h4></div>
                                    </div>
                                    <div class="col">
                                        <div class="profile-overview">
                                            <p>Disciplines</p>
                                            <h4>6</h4></div>
                                    </div>
                                    <div class="col">
                                        <div class="profile-overview">
                                            <p>Experience</p>
                                            <h4>12</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>  
                    ))}
                    

                    
                    
                </div>

                <Carousel>
                <Carousel.Item>
                    <div className="row">
                        <div className="col">
                            <h4 class="text-center"><strong>STYLE 3</strong></h4>
                            <hr/>
                            <div class="profile-card-4 text-center"><img src="https://sun9-18.userapi.com/impg/c857432/v857432602/1ec3a9/JNxnuDlNY2E.jpg?size=640x640&quality=96&sign=f794844e426bf7bc217a99b4c19a6062&type=album" class="img img-responsive"/>
                                <div class="profile-content">
                                    <div class="profile-name">John Doe
                                        <p>@johndoedesigner</p>
                                    </div>
                                    <div class="profile-description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</div>
                                    <div class="row">
                                        <div class="col">
                                            <div class="profile-overview">
                                                <p>TWEETS</p>
                                                <h4>1300</h4></div>
                                        </div>
                                        <div class="col">
                                            <div class="profile-overview">
                                                <p>FOLLOWERS</p>
                                                <h4>250</h4></div>
                                        </div>
                                        <div class="col">
                                            <div class="profile-overview">
                                                <p>FOLLOWING</p>
                                                <h4>168</h4></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <h4 class="text-center"><strong>STYLE 3</strong></h4>
                            <hr/>
                            <div class="profile-card-4 text-center"><img src="https://sun9-18.userapi.com/impg/c857432/v857432602/1ec3a9/JNxnuDlNY2E.jpg?size=640x640&quality=96&sign=f794844e426bf7bc217a99b4c19a6062&type=album" class="img img-responsive"/>
                                <div class="profile-content">
                                    <div class="profile-name">John Doe
                                        <p>@johndoedesigner</p>
                                    </div>
                                    <div class="profile-description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</div>
                                    <div class="row">
                                        <div class="col">
                                            <div class="profile-overview">
                                                <p>TWEETS</p>
                                                <h4>1300</h4></div>
                                        </div>
                                        <div class="col">
                                            <div class="profile-overview">
                                                <p>FOLLOWERS</p>
                                                <h4>250</h4></div>
                                        </div>
                                        <div class="col">
                                            <div class="profile-overview">
                                                <p>FOLLOWING</p>
                                                <h4>168</h4></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <h4 class="text-center"><strong>STYLE 3</strong></h4>
                            <hr/>
                            <div class="profile-card-4 text-center"><img src="https://sun9-18.userapi.com/impg/c857432/v857432602/1ec3a9/JNxnuDlNY2E.jpg?size=640x640&quality=96&sign=f794844e426bf7bc217a99b4c19a6062&type=album" class="img img-responsive"/>
                                <div class="profile-content">
                                    <div class="profile-name">John Doe
                                        <p>@johndoedesigner</p>
                                    </div>
                                    <div class="profile-description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</div>
                                    <div class="row">
                                        <div class="col">
                                            <div class="profile-overview">
                                                <p>TWEETS</p>
                                                <h4>1300</h4></div>
                                        </div>
                                        <div class="col">
                                            <div class="profile-overview">
                                                <p>FOLLOWERS</p>
                                                <h4>250</h4></div>
                                        </div>
                                        <div class="col">
                                            <div class="profile-overview">
                                                <p>FOLLOWING</p>
                                                <h4>168</h4></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    
                </Carousel.Item>
                <Carousel.Item>
                    <div className="row">
                        <div className="col">
                            <h4 class="text-center"><strong>STYLE 3</strong></h4>
                            <hr/>
                            <div class="profile-card-4 text-center"><img src="https://sun9-18.userapi.com/impg/c857432/v857432602/1ec3a9/JNxnuDlNY2E.jpg?size=640x640&quality=96&sign=f794844e426bf7bc217a99b4c19a6062&type=album" class="img img-responsive"/>
                                <div class="profile-content">
                                    <div class="profile-name">John Doe
                                        <p>@johndoedesigner</p>
                                    </div>
                                    <div class="profile-description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</div>
                                    <div class="row">
                                        <div class="col">
                                            <div class="profile-overview">
                                                <p>TWEETS</p>
                                                <h4>1300</h4></div>
                                        </div>
                                        <div class="col">
                                            <div class="profile-overview">
                                                <p>FOLLOWERS</p>
                                                <h4>250</h4></div>
                                        </div>
                                        <div class="col">
                                            <div class="profile-overview">
                                                <p>FOLLOWING</p>
                                                <h4>168</h4></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <h4 class="text-center"><strong>STYLE 3</strong></h4>
                            <hr/>
                            <div class="profile-card-4 text-center"><img src="https://sun9-18.userapi.com/impg/c857432/v857432602/1ec3a9/JNxnuDlNY2E.jpg?size=640x640&quality=96&sign=f794844e426bf7bc217a99b4c19a6062&type=album" class="img img-responsive"/>
                                <div class="profile-content">
                                    <div class="profile-name">John Doe
                                        <p>@johndoedesigner</p>
                                    </div>
                                    <div class="profile-description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</div>
                                    <div class="row">
                                        <div class="col">
                                            <div class="profile-overview">
                                                <p>TWEETS</p>
                                                <h4>1300</h4></div>
                                        </div>
                                        <div class="col">
                                            <div class="profile-overview">
                                                <p>FOLLOWERS</p>
                                                <h4>250</h4></div>
                                        </div>
                                        <div class="col">
                                            <div class="profile-overview">
                                                <p>FOLLOWING</p>
                                                <h4>168</h4></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <h4 class="text-center"><strong>STYLE 3</strong></h4>
                            <hr/>
                            <div class="profile-card-4 text-center"><img src="https://sun9-18.userapi.com/impg/c857432/v857432602/1ec3a9/JNxnuDlNY2E.jpg?size=640x640&quality=96&sign=f794844e426bf7bc217a99b4c19a6062&type=album" class="img img-responsive"/>
                                <div class="profile-content">
                                    <div class="profile-name">John Doe
                                        <p>@johndoedesigner</p>
                                    </div>
                                    <div class="profile-description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</div>
                                    <div class="row">
                                        <div class="col">
                                            <div class="profile-overview">
                                                <p>TWEETS</p>
                                                <h4>1300</h4></div>
                                        </div>
                                        <div class="col">
                                            <div class="profile-overview">
                                                <p>FOLLOWERS</p>
                                                <h4>250</h4></div>
                                        </div>
                                        <div class="col">
                                            <div class="profile-overview">
                                                <p>FOLLOWING</p>
                                                <h4>168</h4></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    
                </Carousel.Item>
                <Carousel.Item>
                    <div className="row">
                        <div className="col">
                            <h4 class="text-center"><strong>STYLE 3</strong></h4>
                            <hr/>
                            <div class="profile-card-4 text-center"><img src="https://sun9-18.userapi.com/impg/c857432/v857432602/1ec3a9/JNxnuDlNY2E.jpg?size=640x640&quality=96&sign=f794844e426bf7bc217a99b4c19a6062&type=album" class="img img-responsive"/>
                                <div class="profile-content">
                                    <div class="profile-name">John Doe
                                        <p>@johndoedesigner</p>
                                    </div>
                                    <div class="profile-description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</div>
                                    <div class="row">
                                        <div class="col">
                                            <div class="profile-overview">
                                                <p>TWEETS</p>
                                                <h4>1300</h4></div>
                                        </div>
                                        <div class="col">
                                            <div class="profile-overview">
                                                <p>FOLLOWERS</p>
                                                <h4>250</h4></div>
                                        </div>
                                        <div class="col">
                                            <div class="profile-overview">
                                                <p>FOLLOWING</p>
                                                <h4>168</h4></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <h4 class="text-center"><strong>STYLE 3</strong></h4>
                            <hr/>
                            <div class="profile-card-4 text-center"><img src="https://sun9-18.userapi.com/impg/c857432/v857432602/1ec3a9/JNxnuDlNY2E.jpg?size=640x640&quality=96&sign=f794844e426bf7bc217a99b4c19a6062&type=album" class="img img-responsive"/>
                                <div class="profile-content">
                                    <div class="profile-name">John Doe
                                        <p>@johndoedesigner</p>
                                    </div>
                                    <div class="profile-description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</div>
                                    <div class="row">
                                        <div class="col">
                                            <div class="profile-overview">
                                                <p>TWEETS</p>
                                                <h4>1300</h4></div>
                                        </div>
                                        <div class="col">
                                            <div class="profile-overview">
                                                <p>FOLLOWERS</p>
                                                <h4>250</h4></div>
                                        </div>
                                        <div class="col">
                                            <div class="profile-overview">
                                                <p>FOLLOWING</p>
                                                <h4>168</h4></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <h4 class="text-center"><strong>STYLE 3</strong></h4>
                            <hr/>
                            <div class="profile-card-4 text-center"><img src="https://sun9-18.userapi.com/impg/c857432/v857432602/1ec3a9/JNxnuDlNY2E.jpg?size=640x640&quality=96&sign=f794844e426bf7bc217a99b4c19a6062&type=album" class="img img-responsive"/>
                                <div class="profile-content">
                                    <div class="profile-name">John Doe
                                        <p>@johndoedesigner</p>
                                    </div>
                                    <div class="profile-description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</div>
                                    <div class="row">
                                        <div class="col">
                                            <div class="profile-overview">
                                                <p>TWEETS</p>
                                                <h4>1300</h4></div>
                                        </div>
                                        <div class="col">
                                            <div class="profile-overview">
                                                <p>FOLLOWERS</p>
                                                <h4>250</h4></div>
                                        </div>
                                        <div class="col">
                                            <div class="profile-overview">
                                                <p>FOLLOWING</p>
                                                <h4>168</h4></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    
                </Carousel.Item>
                
                </Carousel>
                
            </div>
        <Footer />
        </div>
    )
    }
}

export default Home;
