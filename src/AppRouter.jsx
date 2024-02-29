import { Route, Routes } from "react-router-dom";
import Body from "./pages/reactchat";
import { privateRoutes, publicRoutes } from "./routes/routes";
import LoginPage from "./pages/login-page";

function AppRouter(props) {
    
    if(props.isAuth){ return ( 
        <Routes>
           {privateRoutes.map(route =>
        
        <Route 
          Component={route.component}
          path={route.path}
          exact={route.exact}
          key={route.path}/>
      )}
        
        <Route path="/*" element={<Body to="/reactchat"/>}/>
        </Routes>
     );
    }else{
      return(
      <Routes>
           {publicRoutes.map(route =>
        
        <Route 
          Component={route.component}
          path={route.path}
          exact={route.exact}
          key={route.path}/>
      )}
        
        <Route path="/*" element={<LoginPage to="/login"/>}/>
        </Routes>
        );
    }
}

export default AppRouter;