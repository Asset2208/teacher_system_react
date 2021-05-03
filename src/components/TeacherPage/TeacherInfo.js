import React, { Component } from 'react'
import Header from '../Header/Header';
import TeacherService from '../../services/TeacherService';
import CityService from '../../services/CityService';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Select from 'react-select';

import '../AdminPage/css/admin.css';
// import './css/admin.css';

export default class TeacherInfo extends Component {

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
            achievements: []
        };

    }


    componentDidMount() {
        TeacherService.getTeacherDTOByTeacherId(this.state.id).then(res => {
            this.setState({teacherEntity: res.data});
            this.setState({
                email: this.state.teacherEntity.email, 
                name: this.state.teacherEntity.name,
                surname: this.state.teacherEntity.surname,
                patronymic: this.state.teacherEntity.patronymic,
                IsTeachOnline: this.state.teacherEntity.isOnlineEnabled,
                title: this.state.teacherEntity.title,
                subjects: this.state.teacherEntity.subjects,
                story: this.state.teacherEntity.story,
                imageUrl: this.state.teacherEntity.imageUrl,
                phoneNumber: this.state.teacherEntity.phoneNumber,
                experiences: this.state.teacherEntity.experiences,
                educations: this.state.teacherEntity.educations,
                achievements: this.state.teacherEntity.achievements,
                cityName: this.state.teacherEntity.city.city
            });

            // console.log('teacher => ' + JSON.stringify(this.state.teacherEntity));
        });

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
                        </div>
                        <div className="col-8">
                        <div>
                            <h4>Репетитор {this.state.name} {this.state.surname} {this.state.patronymic}</h4>
                            <hr />
                            <div class="card border-3">
                                <div class="row">
                                    <div class="col-sm-3">
                                        <img class="d-block" style={{width: "100%"}} src={this.state.imageUrl} alt=""/>
                                        <p class="text-center mb-0" style={{fontSize: "9px"}}>оценка</p>
                                        <p class="text-center mb-0 p-0 border-bottom" style={{fontSize: "20px"}}>5,00</p>
                                        <p class="text-center mb-0" style={{fontSize: "20px"}}><a href="#" style={{textDecoration: "underline"}}>19 отзывов</a></p>
                                        <div class="text-center"><img src="https://alm.kz.repetitors.info/doc/rank/i/badge_great.png" width="60%" /></div>
                                        
                                    </div>
                                    <div class="col-sm-8 p-0" style={{fontSize: "15px"}}>
                                        <p class="mb-0"><strong>{this.state.name} {this.state.surname} {this.state.patronymic}</strong></p>
                                        {this.state.IsTeachOnline && (
                                            <p style={{color: "oranged"}} class="mb-0"><strong>Проводит дистанционные занятия</strong></p>
                                        )}
                                        
                                        <p class="mb-0">Репетитор по {this.state.title}</p>
                                        <p class="mb-0">Образование: </p>
                                        {this.state.educations.map(education => (
                                            <p class="mb-0">• {education.universityName}, специальность - {education.speciality}, {education.dateStart}-{education.dateEnd}</p>
                                        ))}
                                        <p class="mb-0">Опыт: </p>
                                        {this.state.experiences.map(experience => (
                                            <p class="mb-0">• {experience.experienceTitle}, {experience.dateStart}-{experience.dateEnd}</p>
                                        ))}
                                        <p class="mb-0">Достижения: </p>
                                        {this.state.achievements.map(achievement => (
                                            <p class="mb-0">• {achievement.achievementTitle}, {achievement.duration}</p>
                                            ))}
                                        <br />
                                        <p><i>{this.state.story}</i></p>
                                        <p class="mb-0 text-muted">Город: {this.state.cityName}</p>
                                        <p class="mb-0 text-muted">Предметы: {this.state.subjects}</p>
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
