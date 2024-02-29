import '../styles/sign_in.css'
import { Context } from '../index';
import { useContext} from 'react';
import { observer } from 'mobx-react-lite';
import { UsersContxext } from '../context';
function Logout(prop){
    const {store} = useContext(Context)
    const {users,login} = useContext(UsersContxext)
    if(prop.isAuth){
        return(
            <div className="LoginIN">
                |<button href="./login-page" className='link' onClick={()=> store.logout(login)}>Выход</button>
            </div>
        ); 
    }
}
export default observer(Logout);