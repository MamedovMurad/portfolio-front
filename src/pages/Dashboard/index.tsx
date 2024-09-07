import { FunctionComponent } from "react";
import { Link, Outlet } from "react-router-dom";

interface DashboardProps {
    
}
 
const Dashboard: FunctionComponent<DashboardProps> = () => {
    return ( <div className=" h-full pt-10 px-10 container mx-auto">
        <header>
            <ul className=" flex justify-between items-center">
                <li>
                <Link to={'/dashboard'}>Dashboard</Link>
                </li>
                <li>
                    <Link to={'create-portfolios'}>Create Portfolio</Link>
                    </li>
            </ul>
        </header>

        <div className=" h-full min-h-96">
            <Outlet/>
        </div>
    </div> );
}
 
export default Dashboard;