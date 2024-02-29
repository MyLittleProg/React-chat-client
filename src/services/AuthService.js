import $api from "../http/index";
import { AxiosResponse } from "axios";

export default class AuthService{
    static async login(login,password){
        return $api.post('/api/login', {login, password})
    }
    static async registration(login,password){
        return $api.post('/api/registration', {login, password})
    }
    static async logout(){
        return $api.post('/api/logout')
    }
}
