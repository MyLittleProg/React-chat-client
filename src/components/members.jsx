import { useContext, useEffect, useState } from 'react';
import '../styles/members.css'
import { UsersContxext } from '../context';
import CardNickname from './card-nickname';
import OnlineStatusService from '../services/onlineStatusService';

function Members(){
    const {users,login,isAuth,intervalState,setIntState} = useContext(UsersContxext)
    const edit_users = users[0]
    const [onlineUsers,setOnlineUsers] = useState([])

    function cardNicknames(){
        if(edit_users){
           return edit_users.map(user => 
                <CardNickname user={user} onlineUsers={onlineUsers} key={user}/>
            )
        }
    }
    
    async function sendOnlineLogin(){
        
        await OnlineStatusService.sendOnlineUser(login,'online')
        
    }
    async function getOnlineUsers(){
       
       const responce =  await OnlineStatusService.getOnlineUsers()
       const result = responce.data
       setOnlineUsers(result)
       
    }

    useEffect(()=>{
        cardNicknames()
    },[onlineUsers])

    const intervalArray = [];
    
    useEffect(()=>{
        
        
        if(isAuth){
            getOnlineUsers()
            const timerSendOnline = setInterval(()=>sendOnlineLogin(),15000)
            const timerGetOnline = setInterval(()=>getOnlineUsers(),15000)  
            intervalArray.push(timerGetOnline)
            intervalArray.push(timerSendOnline)
            setIntState(intervalArray)
        }
        
        
    },[isAuth])

    return (
        <div className="members">
            <div className="members__title"><h2>Участники</h2></div>
            <div className="nicknames">
                {cardNicknames()}
            </div>
        </div>
    );
}
export default Members