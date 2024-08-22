import { FunctionComponent } from "react";
import { Link, Outlet } from "react-router-dom";

interface DashboardProps {
    
}
 
const Dashboard: FunctionComponent<DashboardProps> = () => {
    return ( <div className=" h-full pt-10 px-10">
        <header>
            <ul className=" flex justify-between items-center">
                <li></li>
                <li>
                    <Link to={'create-portfolios'}>Create Portfolio</Link>
                    </li>
            </ul>
        </header>

        <div className=" h-full">
            <Outlet/>
        </div>
    </div> );
}
 
export default Dashboard;