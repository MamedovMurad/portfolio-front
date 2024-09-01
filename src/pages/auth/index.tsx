import { FunctionComponent, ReactNode } from "react";
import logo from "../../assets/main-logo.svg"
import { Link } from "react-router-dom";
interface AuthPageProps {
    children: ReactNode
}

const AuthPage: FunctionComponent<AuthPageProps> = ({ children }) => {
    return (<div className=" md:p-8 h-svh"> 
    <h4><Link to={'/'}>Go back</Link></h4>
    <div className=" h-full md:flex justify-center items-center ">

        <div className=" md:w-2/3 h-full"> <img src={logo} alt=""  className=" w-full  h-full"/></div>
        <div className=" bg-white h-full md:w-1/3">   {children}</div>
    </div>

    </div>);
}

export default AuthPage;