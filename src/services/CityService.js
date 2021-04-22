import axios from 'axios';

const CITY_API_BASE_URL = "http://localhost:8080/api/cities";
const DISTRICT_API_BASE_URL = "http://localhost:8080/api/districts";

class CardService{
    getCities(){
        return axios.get(CITY_API_BASE_URL, {
            headers: {
              'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user'))['jwtToken']}` 
            }
          });
    }

    createCity(city){
        return axios.post(CITY_API_BASE_URL, city, {
            headers: {
              'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user'))['jwtToken']}` 
            }
          });
    }

    getCityById(cityId){
        return axios.get(CITY_API_BASE_URL + '/' + cityId, {
          headers: {
            'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user'))['jwtToken']}` 
          }
        });
    }

    updateCity(city, cityId){
        return axios.put(CITY_API_BASE_URL + '/' + cityId, city, {
          headers: {
            'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user'))['jwtToken']}` 
          }
        });
    }

    deleteCity(cityId){
        return axios.delete(CITY_API_BASE_URL + '/' + cityId,
        {
          headers: {
            'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user'))['jwtToken']}` 
          }
        });
    }

      getDistricts(){
        return axios.get(DISTRICT_API_BASE_URL, {
            headers: {
              'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user'))['jwtToken']}` 
            }
          });
    }

    createDistrict(district){
        return axios.post(DISTRICT_API_BASE_URL, district, {
            headers: {
              'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user'))['jwtToken']}` 
            }
          });
    }

    getDistrictById(districtId){
        return axios.get(DISTRICT_API_BASE_URL + '/' + districtId, {
          headers: {
            'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user'))['jwtToken']}` 
          }
        });
    }

    updateDistrict(district, districtId){
        return axios.put(DISTRICT_API_BASE_URL + '/' + districtId, district, {
          headers: {
            'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user'))['jwtToken']}` 
          }
        });
    }

    deleteDistrict(districtId){
        return axios.delete(DISTRICT_API_BASE_URL + '/' + districtId,
        {
          headers: {
            'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user'))['jwtToken']}` 
          }
        });
    }
}

export default new CardService();