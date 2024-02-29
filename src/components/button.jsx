import '../styles/button.css'
function Button({children,...props}){
    return (
        <button {...props} className='button_send'>{children}</button>
    );
}

export default Button