import '../styles/members.css'
function CardNickname({user,onlineUsers}) {
    for(let i = 0;i < onlineUsers.length; i++){
        if(onlineUsers[i] == user){
            return ( 
                <div className="card-nickname">
                    <div className="card-nickname__nickname">{user}</div>
                    <div className="online">online</div>
                </div>
             );
        }
    }
    return ( 
        <div className="card-nickname">
            <div className="card-nickname__nickname">{user}</div>
            <div className="offline">offline</div>
        </div>
     );
}
export default CardNickname;