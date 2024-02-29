import $api from "../http/index";
export default class MessageService{
    static async messageSend(channel,author,message,date,time){
        if(author != '' && channel != '' && message != ''){
            if(channel != undefined && author != undefined){
            return $api.post('/api/messeges-send', {channel,author,message,date,time})
            }else{
                alert('Некоотрых данных нет')
            }
        }else{
            alert('Некоотрых данных нет')
        }
    }
    static async messageGet(channel){
        return $api.get('/api/messeges-get/',{headers:{id:channel}})
    }

   
}