import { LoadingOverlay } from "@mantine/core";
import { FunctionComponent, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { api } from "../../helpers/api";
interface AuthGoogleRedirectProps {
    
}
 
const AuthGoogleRedirect: FunctionComponent<AuthGoogleRedirectProps> = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const token = searchParams.get("token");
    useEffect(() => {
        if (token) {
            api.setHeader("Authorization","Bearer "+token||"")
            localStorage.setItem('agent',token)
            navigate('/dashboard') 
        }
    }, [token]);
    return ( <div className=" w-full  h-full flex justify-center items-center">

<LoadingOverlay
          visible={true}
          zIndex={1000}
          overlayProps={{ radius: 'sm', blur: 2, backgroundOpacity:0.1 }}
          loaderProps={{ color: 'pink', type: 'bars' }}
        />
    </div> );
}
 
export default AuthGoogleRedirect;