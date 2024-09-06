
import { GoogleOAuthProvider } from '@react-oauth/google';
import GoogleLoginButton from './googleLoginbutton';


const LoginProvideButton = () => {
  return (
    <GoogleOAuthProvider clientId="165709640419-mbg1ds9ufsfpesfc847t33j5dutbn189.apps.googleusercontent.com">
      <div className="App">
        <h2>Login with Google</h2>
        <GoogleLoginButton />
      </div>
    </GoogleOAuthProvider>
  );
};

export default LoginProvideButton;
