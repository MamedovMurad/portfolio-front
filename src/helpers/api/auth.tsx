import { api } from "."

const Login = (params: { email: string, password: string }) => {
   
    return api.post('login', params).then((data)=>{
        api.setHeader("Authorization","Bearer "+data?.data?.token||"")
    })
}
const GoogleLoginPost = () => {
    
    return api.get('auth/google')
}

const Register = (params: { email: string, name: string, password: string, password_repeat: string, surname: string }) => {
    return api.post('register', params).then((data)=>{
        api.setHeader("Authorization","Bearer "+data?.data?.token||"")
    })
}
const Verify = (params: { email: string, token: string }) => {
    return api.post('auth/registration/verify', params)
}

const GetMe = ()=>{
    return api.get("get-me")
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