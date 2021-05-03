import axios from 'axios';

const REGISTER_API_BASE_URL = "http://localhost:8080/";

class UserService {
    
    register(user){
        return axios.post(REGISTER_API_BASE_URL + "authentication/register", user);
    }

    login(data){
        return axios.post(REGISTER_API_BASE_URL + "auth", data).then(response => {
            if(response.status==200){
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        })
    }

    updateName(id, fullName){
        return axios.put(REGISTER_API_BASE_URL + 'editName', {fullName},{
            headers: {
              'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user'))['jwtToken']}` 
            }
          });
    }

    updatePassword(old_password, new_password){
        return axios.put(REGISTER_API_BASE_URL + 'editPassword', {old_password, new_password},{
            headers: {
              'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user'))['jwtToken']}` 
            }
          });
    }

    getCurrentUser() {
        return axios.get(REGISTER_API_BASE_URL + 'profile', {
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user'))['jwtToken']}`
            }
        }).then(response => response.data);
        // return JSON.parse(localStorage.getItem('user'))['jwtToken'];
    }

    logout() {
        localStorage.removeItem("user");
    }

    addTeacherRole(id){
        return axios.put(REGISTER_API_BASE_URL + 'addTeacherRole/' + id, id,{
            headers: {
              'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user'))['jwtToken']}` 
            }
          });
    }
}

export default new UserService();
