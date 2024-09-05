import { FunctionComponent } from "react";
import { Link, Outlet } from "react-router-dom";
import  img  from "../assets/main-logo.svg";
import  dark  from "../assets/logo-dark.svg";
import  insta  from "../assets/instagram.svg";
import  linkedin  from "../assets/in.svg";
import  facebook  from "../assets/fb.svg";
import  wp  from "../assets/whatsapp.svg";
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
                    <li className=" hidden md:block"> <Link to={'pricing'}>Courses</Link></li>
                    <li className=" hidden md:block"> <Link to={'contact'}>Contact</Link></li>
                    <li className=" rounded border-text-primary border-[0.1px] py-1 px-4"> <Link to={'sign-up'}>Join Now</Link></li>
                </ul>

                
            </div>
     </header>
         <main><Outlet/></main> 
         
         <footer className=" bg-text-primary bg-opacity-50 text-dark py-10 mt-20">
            <div className=" container mx-auto">
                <ul className="md:flex justify-between font-semibold text-lg">
                <li> <Link to={'/'}><img src={dark} className=" w-16 md:w-40" alt="" /></Link> </li>
                <li>
                    <h4 className=" font-semibold text-xl text-primary mb-3">Navigation</h4>
                    <ul>
                    <li className=" hidden md:block"> <Link to={'/'}>Home</Link></li>
                    <li className=" hidden md:block"> <Link to={'/about'}>About</Link></li>
                    <li className=" hidden md:block"> <Link to={'/pricing'}>Courses</Link></li>
                    <li className=" hidden md:block"> <Link to={'/portfolios'}>portfolios</Link></li>
                    <li className=" hidden md:block"> <Link to={'contact'}>Contact</Link></li>
                    </ul>
                </li>
                <li>
                    <a href="mailto:info@biharbor.com">info@biharbor.com</a>
                    <ul className="flex justify-center gap-x-4 mt-2">
                        <a href=""><img src={wp} alt="" /></a>
                        <a href=""><img src={insta} alt="" /></a>
                        <a href=""><img src={linkedin} alt="" /></a>
                        <a href=""><img src={facebook} alt="" /></a>
                    </ul>
                </li>
                </ul>
             
            </div>
               <hr className=" border-dark my-5 bg-opacity-100" />
               <div className=" justify-center flex items-center">
                <p className=" text-dark font-semibold text-base">© 2024 by Data Pears Consulting. All rights reserved.</p>
               </div>
         </footer>
         </>);
}
 
export default MainLayout;