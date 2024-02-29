import '../styles/chat.css'
function Message({message,author,date,time,index,last_mes}) {
    function isLastMessage(){
        if(index == (last_mes - 1)){
            return 'end'
        }else{
            return null
        }
         }
    return ( 
        <div className="messages__message" id={isLastMessage()}>

                    <div className="messages__message-nick">{author}
                    <div className="messages__message-short-name">@all</div>
                    </div>

                    <div className="messages__message-text" >{message}</div>
                    <div className="messages__message-time-data">{time} {date}</div>
                </div>
     );
}
export default Message;