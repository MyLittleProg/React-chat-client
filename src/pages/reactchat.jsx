import Channels from '../components/channels'
import Chat from '../components/chat';
import Members from '../components/members';
import '../styles/body.css'
function Body(){
    return(
        <main className='content'>
        <Channels/>
        <Chat/>
        <Members/>
        </main>
    );
}

export default Body