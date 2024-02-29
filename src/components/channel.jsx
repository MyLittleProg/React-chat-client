import '../styles/channels.css'
function Channel({channelname,activebtn,setActiveBtn}) {
    
    return ( 
        <button className={`card-channel ${activebtn == channelname ? 'active-channel':''}`} onClick={() => setActiveBtn(channelname)}>
               <div className="channel"><span>#</span>{channelname}</div>
        </button>
     );
}
export default Channel;