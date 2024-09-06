// GoogleLoginButton.js

import { GoogleLogin } from '@react-oauth/google';
import { GoogleLoginPost } from '../../../helpers/api/auth';


export const GoogleLoginButton = () => {
  const handleSuccess = async (response:any) => {
    // Get the Google OAuth token
    const googleToken = response.credential;

    try {
      // Send the token to your Laravel API for verification and login
      const result:any = GoogleLoginPost({token:googleToken})

      console.log('User authenticated:', result?.data);
    } catch (error) {
      console.error('Error authenticating user:', error);
    }
  };

  const handleError = () => {
    console.log('Login Failed');
  };

  return (
    <GoogleLogin
      onSuccess={handleSuccess}
      onError={handleError}
    />
  );
};

export default GoogleLoginButton;
