import React, { Component } from 'react'
import Header from '../Header/Header';
import TeacherService from '../../services/TeacherService';
import {  Button, Modal, Alert  } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default class UserFeedbackTeacherPage extends Component {
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
            errors: {},
            message: "",
            cityEntity: {},
            cities: [],
            cityOptions: [],
            feedbacks: [],
            showHide : false,
            feedbackFullName : "",
            feedbackEmail : "",
            feedbackPluses : "",
            feedbackMinuses : "",
            feedbackReply : "",
            feedbackMark: ""
        };

        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeFullName = this.handleChangeFullName.bind(this);
        this.handlePlusesChange = this.handlePlusesChange.bind(this);
        this.handleMinusesChange = this.handleMinusesChange.bind(this);
        this.handleReplyChange = this.handleReplyChange.bind(this);
        this.handleMarkChange = this.handleMarkChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleChangeFullName = event =>{
        this.setState({feedbackFullName: event.target.value});
    }
    handleChangeEmail = event =>{
        this.setState({feedbackEmail: event.target.value});
    }
    handlePlusesChange = event =>{
        this.setState({feedbackPluses: event.target.value});
    }
    handleMinusesChange = event =>{
        this.setState({feedbackMinuses: event.target.value});
    }
    handleReplyChange = event =>{
        this.setState({feedbackReply: event.target.value});
    }
    handleMarkChange = event =>{
        this.setState({feedbackMark: event.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let feedbackBody = {
            email: this.state.feedbackEmail,
            fullName: this.state.feedbackFullName,
            pluses: this.state.feedbackPluses,
            minuses: this.state.feedbackMinuses,
            reply: this.state.feedbackReply,
            dateCreated: new Date(),
            mark: this.state.feedbackMark,
            teacherId: this.state.teacherEntity.id,
            enabled: false
        };

        // console.log('city => ' + JSON.stringify(postBody));

        TeacherService.addTeacherFeedback(feedbackBody).then(res =>{
            window.location.replace("/teacher/" + this.state.id);
        });
    }


    componentDidMount() {
        TeacherService.getTeacherDTOByTeacherId(this.state.id).then(res => {
            this.setState({teacherEntity: res.data});
            this.setState({
                email: this.state.teacherEntity.email, 
                name: this.state.teacherEntity.name,
                surname: this.state.teacherEntity.surname,
            });

            // console.log('teacher => ' + JSON.stringify(this.state.teacherEntity));
        });

        TeacherService.getAllFeedbacksByTeacherId(this.state.id).then(res => {
            this.setState({feedbacks: res.data});
            console.log(res.data);
        })

    }

    handleModalShowHide() {
        this.setState({ showHide: !this.state.showHide })
    }


    render() {
        return (
            <div>
                <Header/>
                <div className="container" style={{marginTop: "150px"}}>
                    <div className="row">
                        <div className="col">
                        <div class="bs-example">
                                <div class="list-group">
                                    <div class="list-group-item list-group-item-action">
                                        <div class="row">
                                            <div class="col-sm-4">
                                                <a asp-action="Details" asp-controller="Teachers" asp-route-id="@Model.Id" class="stretched-link"></a>
                                                <div>
                                                    <img src="https://alm.kz.repetitors.info/i2/icons/preps_0.gif" alt="" />
                                                </div>
                                            </div>

                                            <div class="col-sm-8">
                                                <div class="mt-2">
                                                    <a asp-action="Details" asp-controller="Teachers" asp-route-id="@Model.Id" class="stretched-link" style={{color: "navy"}}>
                                                        <p style={{fontSize: "15px"}}  class="mb-0 pb-0">Преподаватели</p>
                                                        <p style={{fontSize: "12px"}} class="mb-0 pb-0">Анкеты лучших репетиторов</p>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="list-group-item list-group-item-action">
                                        <div class="row">
                                            <div class="col-sm-4">
                                                <a asp-action="Details" asp-controller="Teachers" asp-route-id="@Model.Id" class="stretched-link"></a>
                                                <div>
                                                    <img src="https://alm.kz.repetitors.info/i2/icons/find_0.gif" alt="" />
                                                </div>
                                            </div>

                                            <div class="col-sm-8">
                                                <div class="mt-2">
                                                    <a asp-action="Details" asp-controller="Teachers" asp-route-id="@Model.Id" class="stretched-link" style={{color: "navy"}}>
                                                        <p style={{fontSize: "15px"}} class="mb-0 pb-0">Найти репетитора</p>
                                                        <p style={{fontSize: "12px"}} class="mb-0 pb-0">Заполните форму запроса, и вам подберут подходящего репетитора</p>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="list-group-item list-group-item-action">
                                        <div class="row">
                                            <div class="col-sm-4">
                                                <a asp-action="Details" asp-controller="Teachers" asp-route-id="@Model.Id" class="stretched-link"></a>
                                                <div>
                                                    <img src="https://alm.kz.repetitors.info/i2/icons/reg_0.gif" alt="" />
                                                </div>
                                            </div>

                                            <div class="col-sm-8">
                                                <div class="mt-2">
                                                    <a asp-action="Details" asp-controller="Teachers" asp-route-id="@Model.Id" class="stretched-link" style={{color: "navy"}}>
                                                        <p style={{fontSize: "15px"}} class="mb-0 pb-0">Репетиторам</p>
                                                        <p style={{fontSize: "12px"}} class="mb-0 pb-0">Регистрация в базе данных преподавателей</p>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="list-group-item list-group-item-action">
                                        <div class="row">
                                            <div class="col-sm-4">
                                                <a asp-action="Details" asp-controller="Teachers" asp-route-id="@Model.Id" class="stretched-link"></a>
                                                <div>
                                                    <img src="https://alm.kz.repetitors.info/i2/icons/note_0.gif" alt="" />
                                                </div>
                                            </div>

                                            <div class="col-sm-8">
                                                <div class="mt-2">
                                                    <a asp-action="Details" asp-controller="Teachers" asp-route-id="@Model.Id" class="stretched-link" style={{color: "navy"}}>
                                                        <p style={{fontSize: "15px"}} class="mb-0 pb-0">Книга отзывов</p>
                                                        <p style={{fontSize: "12px"}} class="mb-0 pb-0">Отзывы учеников о работе репетиторов</p>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="card mt-5">
                                <h5 class="text-center">Tutor.kz рекомендует:</h5>
                                <div class="row mt-2">
                                    <div class="col-sm-4" style={{width: "32.5%"}}>
                                        <Link to="/" class="stretched-link"></Link>
                                        <div class="bg-image hover-overlay shadow-1-strong rounded ripple" style={{maxHeight: "450px"}}>
                                            <img class="d-block" style={{maxHeight: "100px"}} src="https://picsum.photos/150?image=641" alt=""/>
                                        </div>

                                    </div>

                                    <div class="col-sm-8">
                                        <div>
                                            <Link to="/" class="stretched-link">
                                                <p style={{fontSize: "15px"}} class="mb-0 pb-0">Асет Байтуринов</p>
                                                <p style={{fontSize: "11px"}} class="mb-0 pb-0">Репетитор по математике</p>
                                                <div class="asdasd">
                                                    <p style={{fontSize: "11px"}}>Образование: • Казахский национальный университет им. аль-Фараби, факультет механики и прикладной математики, специальность – математик, 1994 г.</p>
                                                </div>
                                            </Link>
                                            {/* <a asp-action="Details" asp-controller="Teachers" asp-route-id="@Model.Id" class="stretched-link" style={{color: "blue"}}>

                                                <p style={{fontSize: "15px"}} class="mb-0 pb-0">Асет Байтуринов</p>
                                                <p style={{fontSize: "11px"}} class="mb-0 pb-0">Репетитор по математике</p>
                                                <div class="asdasd">
                                                    <p style={{fontSize: "11px"}}>Образование: • Казахский национальный университет им. аль-Фараби, факультет механики и прикладной математики, специальность – математик, 1994 г.</p>
                                                </div>

                                            </a> */}
                                        </div>
                                    </div>
                                </div>
                                
                                <style>{`
                                    a:hover{
                                        text-decoration: underline;
                                    }
                                `}</style>
                                <div class="row mt-2">
                                    <div class="col-sm-4" style={{width: "32.5%"}}>
                                        <a class="stretched-link"></a>
                                        <div class="bg-image hover-overlay shadow-1-strong rounded ripple" style={{maxHeight: "450px"}}>
                                            <img class="d-block" style={{maxHeight: "100px"}} src="https://picsum.photos/150?image=641" alt=""/>
                                        </div>

                                    </div>

                                    <div class="col-sm-8">
                                        <div>
                                            <Link to="/" class="stretched-link">
                                                <p style={{fontSize: "15px"}} class="mb-0 pb-0">Асет Байтуринов</p>
                                                <p style={{fontSize: "11px"}} class="mb-0 pb-0">Репетитор по математике</p>
                                                <div class="asdasd">
                                                    <p style={{fontSize: "11px"}}>Образование: • Казахский национальный университет им. аль-Фараби, факультет механики и прикладной математики, специальность – математик, 1994 г.</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-2">
                                    <div class="col-sm-4" style={{width: "32.5%"}}>
                                        <a asp-action="Details" asp-controller="Teachers" asp-route-id="@Model.Id" class="stretched-link"></a>
                                        <div class="bg-image hover-overlay shadow-1-strong rounded ripple" style={{maxHeight: "450px"}}>
                                            <img class="d-block" style={{maxHeight: "100px"}} src="https://picsum.photos/150?image=641" alt=""/>
                                        </div>

                                    </div>

                                    <div class="col-sm-8">
                                        <div>
                                            <Link to="/" class="stretched-link">
                                                <p style={{fontSize: "15px"}} class="mb-0 pb-0">Асет Байтуринов</p>
                                                <p style={{fontSize: "11px"}} class="mb-0 pb-0">Репетитор по математике</p>
                                                <div class="asdasd">
                                                    <p style={{fontSize: "11px"}}>Образование: • Казахский национальный университет им. аль-Фараби, факультет механики и прикладной математики, специальность – математик, 1994 г.</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-8">
                            <div>
                                <p className="d-inline" style={{fontSize: "15px",}} class="mb-0 pb-0">
                                    <a href="#" onClick={() => this.handleModalShowHide()}>Добавить отзыв о репетиторе</a>
                                    |
                                    <Link to="/feedback">Добавить отзыв о сервисе</Link>
                                </p>
                                <h4>Отзывы репетитора <Link to={"/teacher/" + this.state.id}>{this.state.name} {this.state.surname}</Link> </h4>
                                <hr />
                                <div>
                                    {this.state.feedbacks.map(feedback=>(
                                        <div class="row">
                                        
                                            <div className="card">
                                            <div class="col">
                                                <h5><Link to={"/teacher/" + this.state.id}>{this.state.name} {this.state.surname}</Link></h5>
                                                {feedback.pluses != "" && (
                                                    <p style={{fontSize: "15px"}} class="mb-0 pb-0">
                                                        <b>Плюсы:</b> {feedback.pluses}
                                                    </p>
                                                )}
                                                {feedback.minuses != "" && (
                                                    <p style={{fontSize: "15px"}} class="mb-0 pb-0">
                                                        <b>Минусы:</b> {feedback.minuses}
                                                    </p>
                                                )}
                                                <p style={{fontSize: "15px"}} class="mb-0 pb-0">
                                                    <b>Описание:</b> {feedback.reply}
                                                </p>
                                                <p style={{fontSize: "15px"}} class="mb-0 pb-0">
                                                    <b>Оценка:</b> {feedback.mark}
                                                </p>
                                                <p>
                                                    <i>{feedback.fullName}</i>
                                                </p>
                                                
                                    
                                                <div class="row">
                                                
                                                    <p className="text-muted"><p><span><i class="far fa-calendar-alt"></i></span> {new Date(parseInt(Date.parse(feedback.dateCreated))).toLocaleString({ year: 'numeric', month: '2-digit', day: '2-digit'})}</p>
                                                    
                                                    {/* <strong>|</strong> <span><i class="far fa-eye"></i></span>{post.views} <strong>|</strong> <span><i class="far fa-comment"></i></span> 5 */}
                                                    </p>
                                                </div>
                                                
                                            
                                            </div>
                                        </div>
                                        <hr className="mb-2"/>
                                        
                                    </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal show={this.state.showHide}>
                    <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
                    <Modal.Title>Добавить отзыв</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <div className = "form-group">
                                <label>
                                    Репетитор : 
                                </label>
                                <input type = "text" className = "form-control" value={this.state.name + " " + this.state.surname} readOnly/>
                            </div>
                            <div className = "form-group">
                                <label>
                                    Email: 
                                </label>
                                <input type = "email" className = "form-control" onChange = {this.handleChangeEmail} required/>
                            </div>
                            <div className = "form-group">
                                <label>
                                    Ваше полное имя : 
                                </label>
                                <input type = "text" className = "form-control" onChange = {this.handleChangeFullName} required/>
                            </div>
                            <div className = "form-group">
                                <label>
                                    Плюсы : 
                                </label>
                                <textarea className = "form-control" onChange = {this.handlePlusesChange}></textarea>
                            </div>
                            <div className = "form-group">
                                <label>
                                    Минусы : 
                                </label>
                                <textarea className = "form-control" onChange = {this.handleMinusesChange}></textarea>
                            </div>
                            <div className = "form-group">
                                <label>
                                    Отзыв : 
                                </label>
                                <textarea className = "form-control" onChange = {this.handleReplyChange} required></textarea>
                            </div>
                            <div className="form-group">
                                <label>
                                    Оценка : 
                                </label>
                                <div onChange={this.handleMarkChange}>
                                    <input type="radio" value="1" name="mark" />1 
                                    <input type="radio" value="2" name="mark" />2 
                                    <input type="radio" value="3" name="mark" />3 
                                    <input type="radio" value="3+" name="mark" />3+ 
                                    <input type="radio" value="4" name="mark" />4 
                                    <input type="radio" value="4+" name="mark" />4+ 
                                    <input type="radio" value="5" name="mark" />5 
                                    <input type="radio" value="5+" name="mark" />5+ 
                                </div>
                            </div>

                            <Alert variant="primary">
                                Отзыв будет опубликован после проверки модератором

                            </Alert>

                        
                            <div className = "form-group">
                                <button className = "btn btn-success" onClick={this.handleSubmit}>Добавить отзыв</button>
                            </div>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={() => this.handleModalShowHide()}>
                        Закрыть
                    </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
