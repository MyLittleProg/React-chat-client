import $api from "../http/index";
export default class ChannelService{
    static async channelNew(title,users){
        return $api.post('/api/channel-new', {title,users}) //users это массив
    }
    static async channelGet(login){
        return $api.get('/api/channels-get',{headers:{login:login}})//Над этим подумать
    }
    static async findChannel(title){
        return $api.get('/api/channels-find',{headers:{title:title}})//Над этим подумать
    }
    static async upDateChannel(login,id){
        return $api.post('/api/channels-update',{login,id})//Над этим подумать
    }
}