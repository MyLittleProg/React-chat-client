import React, {useContext, useState} from 'react';
import '../styles/chat.css'
import Button from './button'
import MessageService from '../services/MessageService';
import { MessageContxext, UsersContxext } from '../context';


function ChangeTextArea({setAuthor,setMessage}){
    const {users,login} = useContext(UsersContxext)
    const [value,setValue] = useState('')
    const [height_area,setHeightArea] = useState('80px')
    const {chatID,contextSet,addNewMessage,setAddNewMessage} = useContext(MessageContxext)
    function handleKeyDown(Event) {
        if (Event.keyCode == 13 && !Event.shiftKey) {
             sendMessage(chatID,login,value)
        }
      }

    //Websocket чуть позже будут реализованы
    // const socket = useRef()
    // const [connected,setConnected] = useState(false)
    // function connect(){
    //     socket.current = new WebSocket('ws://localhost:8080')

    //     socket.current.onopen = () =>{
    //         setConnected(true)
    //         console.log('Подключение установлено')
    //     }
    //     socket.current.onmessage = (Event) =>{
    //         const message = JSON.parse(Event.data)
    //         console.log(message.id + ' :id сообщения id:канала ' + chatMessage)
    //         if(message.id == chatMessage){
    //         const message_login = message.login
    //         const message_message = message.message
    //         console.log(message)
    //         //setMessage(prev => [...prev,message_message])
    //         //setAuthor(prev => [...prev,message_login])
    //         }
    //     }
    //     socket.current.onclose = () =>{
    //         setConnected(false)
    //         console.log('Сервер закрыт')
    //     }
    //     socket.current.onerror = () =>{
    //         console.log('Сервер ошибка')
    //     }
    // }
    // async function sendWebMessage(){
    //     const sock_message = 
    //         {
    //         id:chatMessage,
    //         login,    
    //         message:value,
    //         Event: 'message'}
    
    //         socket.current.send(JSON.stringify(sock_message))
    // }
    
    async function sendMessage(channel,author,message){
        const date = new Date().toLocaleDateString()
        const time = new Date().toLocaleTimeString()
        await MessageService.messageSend(channel,author,message,date,time)
        setValue('')
        const new_message = addNewMessage + 1;
        setAddNewMessage(new_message)
    }   
    if(chatID == '65be9322f7c2dc1e0b1b52eb'){
        return (
            <textarea className='enter-message__text-area'
             style={{height:height_area}} placeholder='Чат закрыт' disabled>
                     </textarea>
        )
    }
        return (
            <>
            <textarea className='enter-message__text-area'
             value={value} onChange={(Event) => {setValue(Event.target.value)}} 
              style={{height:height_area}} maxLength="1999" 
             onKeyDown={Event=>handleKeyDown(Event)} placeholder='Написать сообщение...'>
                     </textarea>
                     <Button onClick={()=> sendMessage(chatID,login,value)}>Отправить</Button>
            </>          
        );
 
}
export default ChangeTextArea 