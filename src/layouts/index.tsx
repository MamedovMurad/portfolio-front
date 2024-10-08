import { FunctionComponent, useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import img from "../assets/main-logo.svg";
// import dark from "../assets/logo-dark.svg";
import insta from "../assets/instagram.svg";
import linkedin from "../assets/in.svg";
import facebook from "../assets/fb.svg";
import wp from "../assets/whatsapp.svg";
import { BurgerMenu } from "../components/burger";
import { useStore } from "../store/aut";
import { GetMe } from "../helpers/api/auth";
import { LoadingOverlay } from "@mantine/core";
import { BurgerMenuUser } from "../components/burger/user";
interface MainLayoutProps {

}

const MainLayout: FunctionComponent<MainLayoutProps> = () => {
    const location = useLocation();
    console.log(location?.pathname);

    const { user, setUser } = useStore((state) => ({
        user: state.user,
        setUser: state.setUser,
        trigger: state.trigger
    }));
    const [loading, setloading] = useState(false);

    function getMeAuth() {
        setloading(true)
        GetMe().then((data) => {
            setUser(data?.data)
        }).finally(() => {
            setloading(false)
        })
    }
    useEffect(() => {

        if (localStorage.getItem("agent")) {
            return getMeAuth()
        }
        return setUser(null)
    }, [localStorage.getItem('agent')]);


    return (
        <>   <header className=" mb-20 md:mb-32">
            <div className=" flex flex-col items-center justify-center fixed top-0 w-full md:h-32 h-20 bg-dark z-10 ">
                <ul className=" hidden md:flex  justify-end w-full container mx-auto gap-x-2">
                    {['az', 'en', 'ru', 'es'].map((item) => (
                        <li key={item}   onClick={()=>{localStorage.setItem("lang",item); window.location.reload()}} className={" text-text-primary cursor-pointer uppercase " +(item===localStorage.getItem("lang")?" border border-text-primary px-1 rounded":"")}> {item}</li>
                    ))}

                </ul>
                <ul className=" px-5 md:px-0  container mx-auto text-text-primary flex justify-between items-center 
               ">
                    <li className=" block md:hidden"><BurgerMenu /></li>
                    <li> <Link to={'/'}><img src={img} className=" w-16 md:w-20" alt="" /></Link> </li>
                    <li className={" hidden md:block hover:underline transition-all duration-300   decoration-text-primary underline-offset-8 "
                        + (location?.pathname == "/" ? "underline" : "")}>
                        <Link to={'/'}>Home</Link>
                    </li>

                    <li className={" hidden md:block hover:underline transition-all duration-300    decoration-text-primary underline-offset-8 "
                        + (location?.pathname == "/about" ? "underline" : "")}>
                        <Link to={'/about'}>About</Link>
                    </li>
                    <li className={" hidden md:block hover:underline transition-all duration-300   decoration-text-primary underline-offset-8 "
                        + (location?.pathname == "/portfolios" ? "underline" : "")}> <Link to={'/portfolios'}>Portfolios</Link></li>
                    <li className={" hidden md:block hover:underline transition-all duration-300   decoration-text-primary underline-offset-8 "
                        + (location?.pathname == "/pricing" ? "underline" : "")}> <Link to={'/pricing'}>Courses</Link></li>
                    <li className={" hidden md:block hover:underline transition-all duration-300   decoration-text-primary underline-offset-8 "
                        + (location?.pathname == "/contact" ? "underline" : "")}><Link to={'/contact'}>Contact</Link></li>

                    <li className=" rounded border-text-primary border-[0.1px] py-1 px-4">

                        {user ? <BurgerMenuUser name={user?.name} /> :


                            <Link to={'/sign-up'}>

                                {loading ? <LoadingOverlay
                                    visible={loading}
                                    zIndex={1000}
                                    overlayProps={{ radius: 'sm', blur: 2, backgroundOpacity: 0.1 }}
                                    loaderProps={{ color: 'pink', type: 'bars' }}
                                /> :
                                    "Join Now"}

                            </Link>}


                    </li>
                </ul>


            </div>
        </header>
            <main><Outlet /></main>



            <footer className=" bg-dark  text-white py-10 mt-20">
                <div className=" container mx-auto px-4 md:px-0">
                    <ul className="flex justify-between font-semibold text-lg flex-wrap ">
                        <li> <Link to={'/'}><img src={img} className=" w-28 md:w-40" alt="" /></Link> </li>
                        <li className=" w-4/6 md:w-fit flex flex-col  items-end md:block pr-3 md:pr-0">
                            <h4 className=" font-semibold text-xl text-white mb-3">Navigation</h4>
                            <ul>
                                <li className=" block"> <Link to={'/'}>Home</Link></li>
                                <li className=" block"> <Link to={'/about'}>About</Link></li>
                                <li className="  block"> <Link to={'/pricing'}>Courses</Link></li>
                                <li className="  block"> <Link to={'/portfolios'}>Portfolios</Link></li>
                                <li className="  block"> <Link to={'contact'}>Contact</Link></li>
                            </ul>
                        </li>
                        <li className=" w-full text-center mt-4 md:w-fit md:mt-0 ">
                            <a href="mailto:info@biharbor.com">info@biharbor.com</a>
                            <ul className="flex justify-center gap-x-4 mt-2">
                                <a href="https://wa.me/+994559050308"><img src={wp} alt="" /></a>
                                <a href="https://www.instagram.com/biharbor?igsh=MWRwcnAzMDh5M2ZvdQ=="><img src={insta} alt="" /></a>
                                <a href="https://www.linkedin.com/company/biharbor"><img src={linkedin} alt="" /></a>
                                <a href=""><img src={facebook} alt="" /></a>
                            </ul>
                        </li>
                    </ul>

                </div>
                <hr className=" border-dark my-5 bg-opacity-100" />
                <div className=" justify-center flex items-center pb-8 md:pb-0">
                    <p className=" text-dark font-semibold text-base">© 2024 by Data Pears Consulting. All rights reserved.</p>
                </div>
            </footer>
        </>);
}

export default MainLayout;