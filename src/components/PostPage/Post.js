import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BlogService from '../../services/BlogService';
import { Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Post extends Component {

  constructor(props){
    super(props);
    this.state = {
        id: this.props.match.params.id,
        city: "",
        posts: [],
        comments: [],
        post: {},
        categorySelectEditName: "",
        currentUser: undefined,
        jwtToken: "",
        commentContent: ""
    }
    this.handleCommentChange = this.handleCommentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    handleCommentChange = event =>{
      this.setState({commentContent: event.target.value});
  }


  handleSubmit = (e) => {
    e.preventDefault();
    let commentBody = {comment: this.state.commentContent, post: this.state.post, author: this.state.currentUser};

    // console.log('city => ' + JSON.stringify(postBody));

    BlogService.createComment(commentBody).then(res =>{
        window.location.replace("/post/" + this.state.id);
    });
  }

  async componentDidMount(){
    BlogService.getPostById(this.state.id).then((res) => {
        this.setState({ post: res.data});
    });

    BlogService.getCommentByPostId(this.state.id).then((res) => {
      this.setState({ comments: res.data});
    });

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
            this.setState({
                currentUser: res,
              });
        } 
        }
        catch{
            
        }
  }

  render() {
    return (
      <div>
          <Header />
          <div id="intro" class="text-center bg-light" style={{marginTop: "150px"}}>
            <h1 class="mb-0 h4">{this.state.post.title}</h1>
          </div>
  
        <main class="mt-4 mb-5">
          <div class="container">
            <div class="row">
              <div class="col-md-10">
                <section class="border-bottom mb-4">
                  <img src={this.state.post.imageUrl}
                    class="img-fluid shadow-2-strong rounded mb-4" alt="" />
  
                  <div class="row align-items-center mb-4">
                    <div class="col-lg-6 text-center text-lg-start mb-3 m-lg-0">
                      <img src="https://mdbootstrap.com/img/Photos/Avatars/img (23).jpg" class="rounded shadow-1-strong me-2"
                        height="35" alt="" loading="lazy" />
                      <span> Опубликовано <u>{new Date(parseInt(Date.parse(this.state.post.createdAt), 10)).toLocaleDateString('fr-CA', { year: 'numeric', month: '2-digit', day: '2-digit' })}</u></span>
                      <span> {this.state.post.author}</span>
                    </div>
  
                    <div class="col-lg-6 text-center text-lg-end">
                      <button type="button" class="btn btn-primary px-3 me-1" style={{backgroundColor: "#3b5998"}} >
                        <i class="fab fa-facebook-f"></i>
                      </button>
                      <button type="button" class="btn btn-primary px-3 me-1" style={{backgroundColor: "#3b5998"}}>
                        <i class="fab fa-twitter"></i>
                      </button>
                      <button type="button" class="btn btn-primary px-3 me-1" style={{backgroundColor: "#0082ca"}}>
                        <i class="fab fa-linkedin"></i>
                      </button>
                      <button type="button" class="btn btn-primary px-3 me-1">
                        <i class="fas fa-comments"></i>
                      </button>
                    </div>
                  </div>
                </section>
  
                <section>
                  <p class="note note-light">
                  {this.state.post.preContent}
                  </p>

                  <div
                    dangerouslySetInnerHTML={{
                      __html: this.state.post.content
                    }}></div>
                </section>
  
                <section class="text-center border-top border-bottom py-4 mb-4">
                  <p><strong>Share with your friends:</strong></p>
  
                  <button type="button" class="btn btn-primary me-1" style={{backgroundColor: "#3b5998"}}>
                    <i class="fab fa-facebook-f"></i>
                  </button>
                  <button type="button" class="btn btn-primary me-1" style={{backgroundColor: "#3b5998"}}>
                    <i class="fab fa-twitter"></i>
                  </button>
                  <button type="button" class="btn btn-primary me-1" style={{backgroundColor: "#0082ca"}}>
                    <i class="fab fa-linkedin"></i>
                  </button>
                  <button type="button" class="btn btn-primary me-1">
                    <i class="fas fa-comments me-2"></i>Add comment
                  </button>
                </section>
  
                <section class="border-bottom mb-3">
                  <p class="text-center"><strong>Comments: 3</strong></p>
                  {this.state.comments.map(comment => (
                    <div class="row mb-4">
                      <div class="col-2">
                        <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(24).jpg"
                          class="img-fluid shadow-1-strong rounded" alt="" />
                      </div>
    
                      <div class="col-10">
                        <p class="mb-2"><strong>{comment.author.fullName}</strong></p>
                        <p className="text-muted"> {new Date(parseInt(Date.parse(comment.createdAt), 10)).toLocaleTimeString('fr-CA', { year: 'numeric', month: '2-digit', day: '2-digit' })}</p>
                        <p>
                          {comment.comment}
                        </p>
                      </div>
                    </div>
                  ))}
                  
  
                  
                </section>
                {this.state.currentUser != null && (
                  <section>
                  <p class="text-center"><strong>Add comment</strong></p>
  
                  <form>
                    <div class="form-outline mb-4">
                      <textarea class="form-control" id="form4Example3" onChange = {this.handleCommentChange}></textarea>
                      <label class="form-label" for="form4Example3">Content</label>
                    </div>
  
                    <button type="submit" class="btn btn-primary btn-block mb-4" onClick={this.handleSubmit}>
                      Add comment
                    </button>
                  </form>
                </section>
                )}
                {this.state.currentUser == null && (
                  <Alert variant="primary">
                    Authorize to leave a comment
                  </Alert>
                )}
                
              </div>
  
            </div>
  
          </div>
        </main>
        <Footer />
      </div>
      )
  }
    
}

export default Post;
