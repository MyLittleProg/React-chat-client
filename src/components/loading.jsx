import cl from '../styles/loading.module.css'
function Loading() {
    return ( 
        <div style={{display:'flex',justifyContent:'center'}}>
         <div className={cl.load}></div>
         </div>
     );
}
export default Loading;