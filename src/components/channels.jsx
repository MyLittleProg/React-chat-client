import { useContext,useState } from 'react';
import ChannelService from '../services/ChannelService';
import '../styles/channels.css'
import { useEffect } from 'react';
import Channel from './channel';
import { MessageContxext, UsersContxext } from '../context';
import ChannelFinds from './ChannelFinds';

function Channels(){
    const {chatMessage,contextSet} = useContext(MessageContxext)
    const {users,login} = useContext(UsersContxext)
    const [activebtn,setActiveBtn] = useState('')
    const [channels,setChannels] = useState([])
    const [channelsData,setChannelsData] = useState()
    const [value,setValue] = useState('')
    const [findsChannels,setFindsChannels] = useState([])
    const [isArea,setisArea] = useState(false)
    async function getChannels(){
        const responce = await ChannelService.channelGet(login)
        const result = responce.data
        setChannels(result.map(res => res.title))
        setChannelsData(result)
    } 
    useEffect(()=>{
      const result = getIdFromData()
      contextSet(result)
     },[activebtn])
    function getIdFromData(){
        if(channelsData){
            for(let i = 0; i < channelsData.length; i++){
                if(channelsData[i].title == activebtn){
                    return channelsData[i]._id
                }
            }
        }
    }
    async function sendChannel(){
        if(value){
        setChannels(prev =>[value,...prev])
        const arr_login = [login]
        await ChannelService.channelNew(value,arr_login)
        }
    }
    async function findChannel(){
        const arr = channels.filter((elem)=> elem == value)
        if(!arr[0]){
        const result = await ChannelService.findChannel(value)
        const resultData = result.data
        setFindsChannels(resultData)
        setisArea(false)
        }
        setisArea(true)
    }
    
    useEffect(()=>{
       getChannels()
    },[channels])

    return(
        <div className="channels">
            <div className="channels__title">
                <h2>Каналы  </h2>
            </div>

            <div className="chan">
                <input type='text' placeholder='Название канала' 
                value={value} className={`find-channel-text ${isArea?'none-text':''}`}
                onChange={(Event)=>setValue(Event.target.value)} maxLength="18"></input>
                <div>
                <button onClick={()=>findChannel()} className='find-btn'></button>
                <button onClick={()=>sendChannel()} className='create-btn'></button>
                </div>

                 {channels.map(channel=>
                    <Channel channelname={channel} activebtn={activebtn} setActiveBtn={setActiveBtn}
                    key={channel}/>
                    )}
                 {
                    findsChannels ? findsChannels.map(channel => 
                        <ChannelFinds channelname={channel.title} id={channel._id} login={login}
                        setFindsChannels={setFindsChannels} setChannels={setChannels}
                        key={channel._id}/>) : console.log()
                 }
            </div>   
        </div>
        
    );
}
export default Channels