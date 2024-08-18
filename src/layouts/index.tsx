import { FunctionComponent } from "react";
import { Outlet } from "react-router-dom";

interface MainLayoutProps {
  
}
 
const MainLayout: FunctionComponent<MainLayoutProps> = () => {
    return ( <main><Outlet/></main> );
}
 
export default MainLayout;