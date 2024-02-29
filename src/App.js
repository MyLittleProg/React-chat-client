import Header from './components/header'
import './styles/main.css'
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './AppRouter';
import { useContext, useEffect, useState } from 'react';
import { Context } from './index';
import { observer } from 'mobx-react-lite';
import Loading from './components/loading';
import { MessageContxext, UsersContxext } from './context';
import UserService from './services/getUsersService';

function App() {
  const {store} = useContext(Context)
  const [users,setUsers] = useState([])
  const [chatID,setChatID] = useState('65be9322f7c2dc1e0b1b52eb')
  const [addNewMessage,setAddNewMessage] = useState(0)
  const [intervalState,setIntState] = useState([])
  
  if(!store.isAuth){
  for (const interval of intervalState) {
    clearInterval(interval);
    }
  }

  useEffect(()=>{
    if(localStorage.getItem('token')){
      store.checkAuth()
    }
  },[])

  useEffect(()=>{async function getUsers(){
    try{
      const response = await UserService.fetchUsers(chatID)
      setUsers(response.data)
    }catch(e){
      console.log(e)
    }
  }
  getUsers()
},[chatID])

  if(store.isLoading){
    return <Loading/>;
  }

  function contextSet(cont){
    setChatID(cont)
  }

  const login = store.user.login
  const isAuth = store.isAuth
  return (
    <MessageContxext.Provider value={{
      chatID,contextSet,addNewMessage,
      setAddNewMessage
    }}>
    <UsersContxext.Provider value={{
      users,login,isAuth,intervalState,setIntState
    }}>
    <BrowserRouter>
    <Header isAuth={store.isAuth} userLogin={store.user.login}/>
    <AppRouter isAuth={store.isAuth}/>
    </BrowserRouter>
    </UsersContxext.Provider>
    </MessageContxext.Provider>
  );
}

export default observer(App);
