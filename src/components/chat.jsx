import React, {useContext, useMemo, useState} from 'react';
import '../styles/chat.css'
import ChangeTextArea from './textarea'
import Message from './message';
import { MessageContxext} from '../context';
import MessageService from '../services/MessageService';

function Chat(){
    const [author,setAuthor] = useState('')
    const [message,setMessage] = useState('')
    const [height_n,setHeight] = useState('60')
    const [mesdate,setMesDate] = useState('')
    const [mestime,setMesTime] = useState('')
    const {chatID,contextSet,addNewMessage} = useContext(MessageContxext) // Название канала на который кликнул
    const channel = chatID
   
     function ScroolDown(){
        const element = document.getElementById('scrl_chat')
        if(element == null){
            alert('null')
        }else{
        const scrollTop = element.scrollHeight
        element.scrollTo(0,scrollTop) 
        }
    }

    async function messageGetMessage(channel){
        const responce = await MessageService.messageGet(channel)
        const result = responce.data
        setMessage(result.map(elem => elem.message))
        setAuthor(result.map(elem => elem.author))
        setMesDate(result.map(elem => elem.date))
        setMesTime(result.map(elem => elem.time))
    }
    useMemo(()=>{
        setTimeout(()=>ScroolDown(),1500)
    },[chatID])
    
    useMemo(()=>{
        messageGetMessage(channel)
    },[chatID,addNewMessage,message])

    return (
        <div className="chat">
            <div className="chat__title"><h2>Сообщения</h2></div>
            <div className="messages" style={{height:height_n + '%'}} id='scrl_chat'>

                {
                 message?message.map((elem,index) =>  <Message message={elem} author={author[index]} date={mesdate[index]}
                 time={mestime[index]} index={index}
                 key={Math.random()}/>):null
                }
            </div>
            
            <div className="enter-message">
                <div className="enter-message__short-name">@all</div>
                    <div className="enter-message__text">
                    <ChangeTextArea setAuthor={setAuthor} setMessage={setMessage}/>
                    </div> 
            </div>
        </div>
    );
}

export default Chat