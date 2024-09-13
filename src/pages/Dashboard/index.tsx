import { FunctionComponent } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useStore } from "../../store/aut";

interface DashboardProps {

}

const Dashboard: FunctionComponent<DashboardProps> = () => {
    const { user } = useStore((state) => ({
        user: state.user,
    }));
    const location = useLocation(); 
    return (<div className=" h-full pt-10 px-10 container mx-auto">


            <div className=" flex justify-center flex-col items-center py-2">
                <img src={user?.image} className=" rounded-full" alt="" />
                <p className=" font-semibold">{user?.name}</p>
                <p className=" font-semibold">{user?.email}</p>
            </div>
         
    
        <header className="mt-2">
            <ul className=" flex justify-center gap-x-3 items-center">
                <li className={" border border-text-primary p-1 rounded "+(location.pathname=="/dashboard"?" bg-text-primary text-primary font-semibold":" ")}>
                    <Link to={'/dashboard'}>Dashboard</Link>
                </li>
                <li className={" border border-text-primary p-1 rounded "+(location?.pathname=="/dashboard/create-portfolios"?" bg-text-primary text-primary font-semibold":" ")}>
                    <Link to={'create-portfolios'}>Create Portfolio</Link>
                </li>
            </ul>
        </header>

        <div className=" h-full min-h-96">
            <Outlet />
        </div>
    </div>);
}

export default Dashboard;