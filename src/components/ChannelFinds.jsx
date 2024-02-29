import ChannelService from '../services/ChannelService';
import '../styles/channels.css'
function ChannelFinds({channelname,id,login,setFindsChannels,setChannels}) {
    async function channelIn(){
        await ChannelService.upDateChannel(login,id)
        setFindsChannels([])
        setChannels(prev => [channelname,...prev])
    }
    return ( 
        <button className={'card-channel-find'} onClick={() => channelIn()}>
               <div className="channel"><span>#</span>{channelname}</div>
        </button>
     );
}
export default ChannelFinds;