import { FunctionComponent } from "react";
import { Link, Outlet } from "react-router-dom";
import  img  from "../assets/main-logo.svg";
import { BurgerMenu } from "../components/burger";
interface MainLayoutProps {
  
}
 
const MainLayout: FunctionComponent<MainLayoutProps> = () => {
    return (
     <>   <header className=" mb-20 ">
            <div className=" flex justify-center fixed top-0 w-full h-20 bg-dark z-10 ">
                <ul className=" px-5 md:px-0  container mx-auto text-text-primary flex justify-between items-center">
                    <li className=" block md:hidden"><BurgerMenu/></li>
                    <li> <Link to={'/'}><img src={img} className=" w-16 md:w-20" alt="" /></Link> </li>
                    <li className=" hidden md:block"> <Link to={'about'}>About</Link></li>
                    <li className=" hidden md:block"> <Link to={'portfolios'}>Portfolios</Link></li>
                    <li className=" hidden md:block"> <Link to={'pricing'}>Pricing</Link></li>
                    <li className=" hidden md:block"> <Link to={'contact'}>Contact</Link></li>
                    <li className=" rounded border-text-primary border-[0.1px] py-1 px-4"> <Link to={'sign-up'}>Join Now</Link></li>
                </ul>

                
            </div>
     </header>
         <main><Outlet/></main> </>);
}
 
export default MainLayout;