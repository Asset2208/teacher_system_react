import axios from 'axios';

const SUBJECT_API_BASE_URL = "http://localhost:8080/api/subjects";
const SUBJECT_V3_API_BASE_URL = "http://localhost:8080/api/v3/subjects";

class SubjectService{

    getAllSubjects(){
      return axios.get(SUBJECT_API_BASE_URL, {
            headers: {
                'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user'))['jwtToken']}` 
            }
        });
    }

    addSubject(subject) {
        return axios.post(SUBJECT_API_BASE_URL, subject, {
            headers: {
                'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user'))['jwtToken']}` 
            }
        });
    }

    getAllSubjectsBranches(){
        return axios.get(SUBJECT_API_BASE_URL + '/branches', {
            headers: {
                'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user'))['jwtToken']}` 
            }
        });
    }

    addSubjectBranch(subjectBranch) {
        return axios.post(SUBJECT_API_BASE_URL + '/branches', subjectBranch, {
            headers: {
                'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user'))['jwtToken']}` 
            }
        });
    }

    updateSubjectBranch(subjectBranch) {
        return axios.put(SUBJECT_API_BASE_URL + '/branches', subjectBranch, {
            headers: {
                'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user'))['jwtToken']}` 
            }
        });
    }

    // getTeacherDTOByUserId(id){
    //     return axios.get(TEACHER_API_BASE_URL + '/dto/user/' + id, {
    //         headers: {
    //           'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user'))['jwtToken']}` 
    //         }
    //     });
    // }

    // getTeacherDTOByTeacherId(id){
    //     return axios.get(TEACHER_V3_API_BASE_URL + '/dto/' + id);
    // }

    // getTeacherByUserId(id){
    //     return axios.get(TEACHER_API_BASE_URL + '/user/' + id, {
    //         headers: {
    //           'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user'))['jwtToken']}` 
    //         }
    //     });
    // }

    // getTeacherLifeDTOByUserId(id){
    //     return axios.get(TEACHER_API_BASE_URL + '/dto/user-life/' + id, {
    //         headers: {
    //           'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user'))['jwtToken']}` 
    //         }
    //     });
    // }

    // createInitialTeacher(teacher){
    //     return axios.post(TEACHER_API_BASE_URL + '/initial', teacher, {
    //         headers: {
    //           'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user'))['jwtToken']}` 
    //         }
    //       });
    // }

    // updateTeacherMainDetails(id, teacher){
    //     return axios.put(TEACHER_API_BASE_URL + '/' + id, teacher, {
    //         headers: {
    //         'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user'))['jwtToken']}` 
    //         }
    //     });
    // }

    // addTeacherEducation(teacherEducation) {
    //     return axios.post(TEACHER_API_BASE_URL + '/educations', teacherEducation, {
    //         headers: {
    //           'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user'))['jwtToken']}` 
    //         }
    //       });
    // }
    // addTeacherExperience(teacherExperience) {
    //     return axios.post(TEACHER_API_BASE_URL + '/experiences', teacherExperience, {
    //         headers: {
    //           'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user'))['jwtToken']}` 
    //         }
    //       });
    // }

    // addTeacherAchievement(teacherAchievement) {
    //     return axios.post(TEACHER_API_BASE_URL + '/achievements', teacherAchievement, {
    //         headers: {
    //           'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user'))['jwtToken']}` 
    //         }
    //       });
    // }

    // getAllFeedbacksByTeacherId(id) {
    //   return axios.get(TEACHER_V3_API_BASE_URL + '/feedbacks/' + id);
    // }

    // getTeacherFeedbackById(id) {
    //   return axios.get(TEACHER_API_BASE_URL + '/feedbacks/' + id,{
    //     headers: {
    //       'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user'))['jwtToken']}` 
    //     }
    //   });
    // }

    // addTeacherFeedback(feedback) {
    //   return axios.post(TEACHER_V3_API_BASE_URL + '/feedbacks/add', feedback);
    // }

    // getTeacherFeedbackCountByTeacherId(id){
    //   return axios.get(TEACHER_V3_API_BASE_URL + '/feedbacks/' + id + "/count");
    // }

    // getTeacherFeedbacks(filterType) {
    //   return axios.get(TEACHER_API_BASE_URL + '/feedbacks', {
    //     headers: {
    //       'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user'))['jwtToken']}` 
    //     },
    //     params : {
    //       filterType
    //     }
    //   });
    // }

    // updateTeacherFeedback(id, feedback) {
    //   return axios.put(TEACHER_API_BASE_URL + '/feedbacks/' + id, feedback, {
    //     headers: {
    //       'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user'))['jwtToken']}` 
    //     }
    //   });
    // }

    // updateEnabled(id, isEnabled) {
    //   return axios.put(TEACHER_API_BASE_URL + '/feedbacks/enabled/' + id, isEnabled, {
    //     headers: {
    //       'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user'))['jwtToken']}` 
    //     }
    //   });
    // }


    // getBlogCategories(){
    //     return axios.get(BLOG_CATEGORY_API_BASE_URL, {
    //         headers: {
    //           'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user'))['jwtToken']}` 
    //         }
    //       });
    // }

    // createBlogCategory(category){
        // return axios.post(BLOG_CATEGORY_API_BASE_URL, category, {
        //     headers: {
        //       'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user'))['jwtToken']}` 
        //     }
        //   });
    // }

    // getBlogCategoryById(categoryId){
    //     return axios.get(BLOG_CATEGORY_API_BASE_URL + '/' + categoryId, {
    //       headers: {
    //         'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user'))['jwtToken']}` 
    //       }
    //     });
    // }

    // updateBlogCategory(category, categoryId){
    //     return axios.put(BLOG_CATEGORY_API_BASE_URL + '/' + categoryId, category, {
    //       headers: {
    //         'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user'))['jwtToken']}` 
    //       }
    //     });
    // }

    // deleteBlogCategory(categoryId){
    //     return axios.delete(BLOG_CATEGORY_API_BASE_URL + '/' + categoryId,
    //     {
    //       headers: {
    //         'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user'))['jwtToken']}` 
    //       }
    //     });
    // }

    // getPosts(){
    //     return axios.get(BLOG_POST_API_BASE_URL, {
    //         headers: {
    //           'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user'))['jwtToken']}` 
    //         }
    //       });
    // }

    // createPost(post){
    //     return axios.post(BLOG_POST_API_BASE_URL, post, {
    //         headers: {
    //           'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user'))['jwtToken']}` 
    //         }
    //       });
    // }

    // getPostById(postId){
    //     return axios.get(BLOG_POST_API_BASE_URL + '/' + postId, {
    //       headers: {
    //         'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user'))['jwtToken']}` 
    //       }
    //     });
    // }

    // updatePost(post, postId){
    //     return axios.put(BLOG_POST_API_BASE_URL + '/' + postId, post, {
    //       headers: {
    //         'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user'))['jwtToken']}` 
    //       }
    //     });
    // }

    // deletePost(postId){
    //     return axios.delete(BLOG_POST_API_BASE_URL + '/' + postId,
    //     {
    //       headers: {
    //         'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user'))['jwtToken']}` 
    //       }
    //     });
    // }

    // createComment(comment){
    //   return axios.post(COMMENT_API_BASE_URL, comment, {
    //       headers: {
    //         'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user'))['jwtToken']}` 
    //       }
    //     });
    // }

    // getCommentByPostId(postId){
    //   return axios.get(COMMENT_API_BASE_URL + '/' + postId, {
    //     headers: {
    //       'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user'))['jwtToken']}` 
    //     }
    //   });
    // }
}

export default new SubjectService();