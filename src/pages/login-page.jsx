import cl from './login-page.module.css'
import { Context } from '../index';
import { useContext, useState } from 'react';
import { observer } from 'mobx-react-lite';

function LoginPage() {
    const {store} = useContext(Context)

    const [login,setLogin] = useState('')
    const [password,setPass] = useState('')
    return (
        <div>
                <div className={cl.loginForm} >
                    <h2 className={cl.title}>Login chat</h2>
                    <input value={login} type="text" placeholder="Логин" className={cl.login} onChange={Event=>setLogin(Event.target.value)}/>
                    <input value={password} type="password" placeholder="Пароль" className={cl.passwrd} onChange={Event=>setPass(Event.target.value)}/>
                    <div className={cl.btns}><button  className={cl.loginBtn} onClick={()=>store.login(login,password)}>Войти</button>
                    <button className={cl.regBtn} onClick={()=>store.registration(login,password)}>Регистрация</button></div>
                </div>
                
            </div>
     );
}

export default observer(LoginPage);