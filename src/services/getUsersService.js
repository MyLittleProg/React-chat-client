import $api from "../http/index";
export default class UserService{
    static async fetchUsers(id){//Добавить title
        return $api.get('api/users',{headers:{id:id}})
    }
}
