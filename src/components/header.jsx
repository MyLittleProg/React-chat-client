import '../styles/header.css'
import Logout from './logout';
function Header(prop){ 
    let user_name = prop.userLogin;
    if(user_name === undefined || user_name === NaN){
        user_name = ''
    }
    return (
        <header className='header'>
            <div className="container">
             <div className="header-row">
                <div className="header__logo"><p className='header__logo-text'>React chat</p></div>
                <nav className='header__nav'>
                    <div className="user-nick">{user_name} </div>
                    <Logout isAuth={prop.isAuth}/>
                </nav>
             </div>
            </div>
        </header>
    );
}
export default Header