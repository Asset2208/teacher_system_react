import React, { Component } from 'react'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BlogService from '../../services/BlogService';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

class Blog extends Component {
  constructor(props){
    super(props);
    this.state = {
        id: 0,
        posts: [],
        postEntity: {},
        categorySelectEditName: ""
    }
  }

  componentDidMount(){
    BlogService.getPosts().then((res) => {
        this.setState({ posts: res.data});
    });
  }

  render() {
    return (
      <html lang="en">
      <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta http-equiv="x-ua-compatible" content="ie=edge" />
          <title>Material Design for Bootstrap</title>
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" />
      </head>
      <body>
          <Header />
          <div class="container p-5">
            <section class="text-center text-md-start">
              <h4 class="mb-5"><strong>Latest posts</strong></h4>
              {this.state.posts.map(post=>(
                <div class="row">
                <div class="col-md-4 mb-4">
                  <div class="bg-image hover-overlay shadow-1-strong rounded ripple" data-mdb-ripple-color="light">
                    <img src={post.imageUrl} class="img-fluid" />
                    <a href="#!">
                      <div class="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
                    </a>
                  </div>
                </div>
      
                <div class="col-md-8 mb-4">
                  <h5>{post.title}</h5>
                  <p>
                    {post.preContent}
                  </p>
      
                  <div class="row">
                    <p><span><i class="far fa-calendar-alt"></i></span> 
                    {new Date(parseInt(Date.parse(post.createdAt), 10)).toLocaleDateString('fr-CA', { year: 'numeric', month: '2-digit', day: '2-digit' })}
                     
                     <strong>|</strong> <span><i class="far fa-eye"></i></span>{post.views} <strong>|</strong> <span><i class="far fa-comment"></i></span> 5</p>
                  </div>
                  <Link to={"/post/" + post.id} className="stretched-link"></Link>
                  
                </div>
              </div>
              ))}
            </section>
      
            <nav class="my-4" aria-label="...">
              <ul class="pagination pagination-circle justify-content-center">
                <li class="page-item">
                  <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item active" aria-current="page">
                  <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
                </li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                  <a class="page-link" href="#">Next</a>
                </li>
              </ul>
            </nav>
          </div>
        <Footer />
      
      </body>
      </html>
      )
  }
}

export default Blog;
