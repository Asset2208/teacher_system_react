import React, { Component } from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useRouteMatch,
  useParams
} from "react-router-dom";

// import './bootstrap/css/bootstrap.min.css';
import Home from './components/Home';
import Post from './components/PostPage/Post';
import Blog from './components/BlogPage/Blog';
import Teacher from './components/TeacherPage/Teacher';
import TeacherCarier from './components/TeacherPage/TeacherCarier';
import TeacherFeedback from './components/TeacherPage/TeacherFeedback';
import TeacherSubjects from './components/TeacherPage/TeacherSubjects';
import TeacherInfo from './components/TeacherPage/TeacherInfo';
import Login from './components/LoginPage/Login';
import Admin from './components/AdminPage/Admin';
import AdminBlog from './components/AdminPage/AdminBlog';
import AdminBlogCategory from './components/AdminPage/AdminBlogCategory';
import AdminUsers from './components/AdminPage/AdminUsers';
import AdminCities from './components/AdminPage/AdminCities';
import AdminDistricts from './components/AdminPage/AdminDistricts';
import SystemFeedbackCategory from './components/AdminPage/SystemFeedbackCategory';
import SystemFeedback from './components/AdminPage/SystemFeedback';
import SystemUserFeedback from './components/SystemFeedback/SystemUserFeedback';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Registration from './components/RegisterPage/Registration';
import Profile from './components/ProfilePage/Profile';
import UserFeedbackTeacherPage from './components/UserFeedback/UserFeedbackTeacherPage';

class App extends Component {
  render() {
    return (
      <Router>
        
        <Switch>
          <Route exact path={'/'} component={Home}/>
          <Route exact path={'/post/:id'} component={Post}/>
          <Route exact path={'/blog'} component={Blog}/>
          <Route exact path={'/teacher'} component={Teacher}/>
          <Route exact path={'/teacher/carier'} component={TeacherCarier}/>
          <Route exact path={'/teacher/subjects'} component={TeacherSubjects}/>
          <Route exact path={'/teacher/feedbacks'} component={TeacherFeedback}/>
          <Route exact path={'/teacher/:id'} component={TeacherInfo}/>
          <Route exact path={'/teacher/:id/feedbacks'} component={UserFeedbackTeacherPage}/>
          <Route exact path={'/feedback'} component={SystemUserFeedback}/>
          <Route exact path={'/admin'} component={Admin}/>
          <Route exact path={'/admin/blog'} component={AdminBlog}/>
          <Route exact path={'/admin/blog/category'} component={AdminBlogCategory}/>
          <Route exact path={'/admin/users'} component={AdminUsers}/>
          <Route exact path={'/admin/cities'} component={AdminCities}/>
          <Route exact path={'/admin/districts'} component={AdminDistricts}/>
          <Route exact path={'/admin/s-feedback-category'} component={SystemFeedbackCategory}/>
          <Route exact path={'/admin/s-feedback'} component={SystemFeedback}/>
          <Route exact path={'/login'} component={Login}/>
          <Route exact path={'/register'} component={Registration}/>
          <Route exact path={'/profile'} component={Profile} />
          {/* <Route exact path={'/cards'} component={Home}/>
          <Route exact path={'/add-card/:id'} component={CreateCard}/>
          <Route exact path={'/view-card/:id'} component={ViewCard}/>
          <Route exact path={'/register'} component={Registration}/>
          <Route exact path={'/login'} component={Login}/>
          <Route exact path={'/profile'} component={Profile} />
          <Route exact path={'/admin'} component={Admins} /> */}
          {/* <Route exact path={'/products/:id'} component={ProductDetail}/>
          <Route exact patr={'/cart'} component={ShoppingCart}/> */}
        </Switch>
      </Router>
    );
  } 
}

export default App;
