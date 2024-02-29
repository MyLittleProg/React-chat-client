import Body from "../pages/reactchat"
import LoginPage from "../pages/login-page"

export const privateRoutes = [
    {path: '/reactchat', component:Body, exact:true},
]
export const publicRoutes = [
    {path: '/login', component:LoginPage, exact:true}
]