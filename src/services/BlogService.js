import axios from 'axios';

const BLOG_POST_API_BASE_URL = "http://localhost:8080/api/posts";
const BLOG_CATEGORY_API_BASE_URL = "http://localhost:8080/api/post_categories";
const COMMENT_API_BASE_URL = "http://localhost:8080/api/comments";
class BlogService{
    getBlogCategories(){
        return axios.get(BLOG_CATEGORY_API_BASE_URL, {
            headers: {
              'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user'))['jwtToken']}` 
            }
          });
    }

    createBlogCategory(category){
        return axios.post(BLOG_CATEGORY_API_BASE_URL, category, {
            headers: {
              'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user'))['jwtToken']}` 
            }
          });
    }

    getBlogCategoryById(categoryId){
        return axios.get(BLOG_CATEGORY_API_BASE_URL + '/' + categoryId, {
          headers: {
            'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user'))['jwtToken']}` 
          }
        });
    }

    updateBlogCategory(category, categoryId){
        return axios.put(BLOG_CATEGORY_API_BASE_URL + '/' + categoryId, category, {
          headers: {
            'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user'))['jwtToken']}` 
          }
        });
    }

    deleteBlogCategory(categoryId){
        return axios.delete(BLOG_CATEGORY_API_BASE_URL + '/' + categoryId,
        {
          headers: {
            'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user'))['jwtToken']}` 
          }
        });
    }

    getPosts(){
        return axios.get(BLOG_POST_API_BASE_URL, {
            headers: {
              'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user'))['jwtToken']}` 
            }
          });
    }

    createPost(post){
        return axios.post(BLOG_POST_API_BASE_URL, post, {
            headers: {
              'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user'))['jwtToken']}` 
            }
          });
    }

    getPostById(postId){
        return axios.get(BLOG_POST_API_BASE_URL + '/' + postId, {
          headers: {
            'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user'))['jwtToken']}` 
          }
        });
    }

    updatePost(post, postId){
        return axios.put(BLOG_POST_API_BASE_URL + '/' + postId, post, {
          headers: {
            'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user'))['jwtToken']}` 
          }
        });
    }

    deletePost(postId){
        return axios.delete(BLOG_POST_API_BASE_URL + '/' + postId,
        {
          headers: {
            'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user'))['jwtToken']}` 
          }
        });
    }

    createComment(comment){
      return axios.post(COMMENT_API_BASE_URL, comment, {
          headers: {
            'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user'))['jwtToken']}` 
          }
        });
    }

    getCommentByPostId(postId){
      return axios.get(COMMENT_API_BASE_URL + '/' + postId, {
        headers: {
          'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user'))['jwtToken']}` 
        }
      });
    }
}

export default new BlogService();