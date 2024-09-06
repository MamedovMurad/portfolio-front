import { api } from "."

const Login = (params: { email: string, password: string }) => {
    
    return api.post('login', params)
}
const GoogleLoginPost = (params: { token: any }) => {
    
    return api.post('auth/callback/google', params)
}

const Register = (params: { email: string, name: string, password: string, password_repeat: string, surname: string }) => {
    return api.post('register', params)
}
const Verify = (params: { email: string, token: string }) => {
    return api.post('auth/registration/verify', params)
}

const GetMe = ()=>{
    return api.get("users/me")
}
const changePassword = (params:{password:string, old_password:string, password_repeat:string})=>{
    return api.put('users/me/password',params)
}
const logout = ()=>{
    localStorage.removeItem('agent');
    
}
export {
    Login, Register, Verify,GetMe,changePassword,logout,GoogleLoginPost
}