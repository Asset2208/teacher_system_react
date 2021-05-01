import axios from 'axios';

const SYSTEM_FEEDBACK_API_BASE_URL = "http://localhost:8080/api/system-feedbacks";
const SYSTEM_FEEDBACK_API_V3_BASE_URL = "http://localhost:8080/api/v3/system-feedbacks";
const SYSTEM_FEEDBACK_CATEGORY_API_BASE_URL = "http://localhost:8080/api/system-feedback-categories";

class SystemFeedbackService{

    getSystemFeedbackCategories(){
        return axios.get(SYSTEM_FEEDBACK_CATEGORY_API_BASE_URL, {
            headers: {
              'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user'))['jwtToken']}` 
            }
          });
    }

    createSystemFeedbackСategory(feedbackCategory){
        return axios.post(SYSTEM_FEEDBACK_CATEGORY_API_BASE_URL, feedbackCategory, {
            headers: {
              'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user'))['jwtToken']}` 
            }
          });
    }

    getSystemFeedbackCategoryById(categoryId){
        return axios.get(SYSTEM_FEEDBACK_CATEGORY_API_BASE_URL + '/' + categoryId, {
          headers: {
            'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user'))['jwtToken']}` 
          }
        });
    }

    updateSystemFeedbackCategory(category, categoryId){
        return axios.put(SYSTEM_FEEDBACK_CATEGORY_API_BASE_URL + '/' + categoryId, category, {
          headers: {
            'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user'))['jwtToken']}` 
          }
        });
    }

    deleteSystemFeedbackCategory(categoryId){
        return axios.delete(SYSTEM_FEEDBACK_CATEGORY_API_BASE_URL + '/' + categoryId,
        {
          headers: {
            'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user'))['jwtToken']}` 
          }
        });
    }

    getSystemFeedbacks(){
        return axios.get(SYSTEM_FEEDBACK_API_BASE_URL, {
            headers: {
              'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user'))['jwtToken']}` 
            }
          });
    }

    createSystemFeedback(post){
        return axios.post(SYSTEM_FEEDBACK_API_V3_BASE_URL, post);
    }

    getSystemFeedbackId(postId){
        return axios.get(SYSTEM_FEEDBACK_API_BASE_URL + '/' + postId, {
          headers: {
            'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user'))['jwtToken']}` 
          }
        });
    }

    updateSystemFeedback(post, postId){
        return axios.put(SYSTEM_FEEDBACK_API_BASE_URL + '/' + postId, post, {
          headers: {
            'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user'))['jwtToken']}` 
          }
        });
    }

    deleteSystemFeedback(postId){
        return axios.delete(SYSTEM_FEEDBACK_API_BASE_URL + '/' + postId,
        {
          headers: {
            'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user'))['jwtToken']}` 
          }
        });
    }
}

export default new SystemFeedbackService();