import axios from 'axios';
import {config} from '../config';

export function createUser(user, state) {
    return axios.post(`${config.url_api_back}/user/signup`, user)
        .then((response)=>{
            return response.data
        })
        .catch(function (error) {
            console.log(error);
        });

}

export function loginUser(connexionDatas) {
    return axios.post(`${config.url_api_back}/user/signin`, connexionDatas)
        .then((response)=>{
            console.log(response);
            return response.data;
        })
        .catch((err)=>{
            console.log(err);
        })
}

export function modifyUser(user, token) {
    return axios.post(`${config.url_api_back}/user/modify`, user, { headers: { 'x-access-token': token } })
        .then((response)=>{
            return response.data
        })
        .catch(function (error) {
            console.log(error);
        });
}