import { makeAutoObservable } from "mobx"
import AuthService from "../services/AuthService";
import axios from "axios";
import { API_URL } from "../http";
import OnlineStatusService from "../services/onlineStatusService";

export default class Store{
    user = {}
    isAuth = false
    isLoading = false
    
    constructor(){
        makeAutoObservable(this)
    }

    setLoading(bool){
        this.isLoading = bool
    }
    setAuth(bool){
        this.isAuth = bool;
    }
    setUser(user){
        this.user = user;
    }

    async login(login,password){
        try{
            const response = await AuthService.login(login,password)
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true)
            this.setUser(response.data.user)
        }catch(e){
            console.log(e.response?.data?.message)
        }
    }
    async registration(login,password){
        try{
            const response = await AuthService.registration(login,password)
            console.log(response)
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true)
            this.setUser(response.data.user)
        }catch(e){
            console.log(e.response?.data?.message)
        }
    }
    async logout(login){
        try{
            const logout_offline = await OnlineStatusService.sendOnlineUser(login,'offline')
            const response = await AuthService.logout()
            localStorage.removeItem('token')
            this.setAuth(false)
            this.setUser({})
        }catch(e){
            console.log(e.response?.data?.message)
        }
    }

    async checkAuth(){
        this.setLoading(true)
        try{
            
            const response = await axios.get(`${API_URL}/api/refresh`, {withCredentials:true})

            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true)
            this.setUser(response.data.user)
        }catch(e){
            console.log(e.response?.data?.message)
        }finally{
            this.setLoading(false)
        }
    }

    
}
