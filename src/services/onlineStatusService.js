import $api from "../http/index";
export default class OnlineStatusService{
    static async sendOnlineUser(nickname,status){
        return $api.post('api/online-status-send',{nickname,status})
    }
    static async getOnlineUsers(){
        return $api.get('api/online-status-get')
    }
}