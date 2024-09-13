import { FunctionComponent } from "react";
import AuthPage from ".";
// import { Button, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import logo from "../../assets/logo-dark.svg"
import { Link, useNavigate } from "react-router-dom";
import {  GoogleLoginPost, Login } from "../../helpers/api/auth";
import { notifications } from '@mantine/notifications';
import Googlesvg from '../../assets/google.svg'
import { useStore } from "../../store/aut";
interface LoginPageProps {

}

const LoginPage: FunctionComponent<LoginPageProps> = () => {
    const { setTrigger } = useStore((state) => ({
        setTrigger: state.setTrigger,
      }));
    //   const [loading, setloading] = useState(false);
    const navigate = useNavigate()
    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            email: '',
            password: "",
        },

        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            password: (value) => (value.trim().length < 2 ? 'Value is too short' : null)
        },
    });

    function onSubmit(params:any){
        console.log(params);
        Login(params).then((data:any)=>{
            localStorage.setItem("agent",data?.data?.token)

              
            navigate('/dashboard')
            notifications.show({
                title: 'You are logged in',
                message: '',
              })
        }).then(()=>{
            setTrigger()
        })
        
    }

    function GoogleButton(){
        GoogleLoginPost().then((data:any)=>{
            console.log(data?.url,'url');
                  window.open(data?.url, '_blank');
            
        })
    }
    return (
        <AuthPage>
            <div className=" flex justify-between px-5 mb-5">
            <h4><Link to={'/'} className="text-blue-500 text-sm">Go back</Link></h4>
                <Link to={"/sign-up"} className=" text-blue-500 text-sm ">Create  account</Link>
            </div>
            <h4 className=" text-dark text-2xl text-center mt-10">Get started Today! become a <span className=" font-semibold text-2xl">BIHARBOR</span></h4>
            <div className=" h-56 flex items-center justify-center">
                <img src={logo} alt="" className=" h-full" />
            </div>
            <form onSubmit={form.onSubmit((values) => onSubmit(values))} className=" px-5 flex-col flex justify-center h-96 gap-y-2">
                {/* <TextInput
                    className=" text-dark"
                    withAsterisk
                    label="Email"
                    placeholder="your@email.com"
                    key={form.key('email')}
                    {...form.getInputProps('email')}
                />
                <TextInput
                    type="password"
                    className=" text-dark"
                    withAsterisk
                    label="Password"
                    placeholder="password"
                    key={form.key('password')}
                    {...form.getInputProps('password')}
                />




                <Button type="submit" className=" bg-primary  w-full hover:bg-dark mt-2">Log in</Button> */}
                <div className="flex items-center justify-center mt-4 ">
                    <button type="button" onClick={GoogleButton} className=" flex justify-center items-center gap-x-2 bg-text-primary text-dark w-full py-3">
                       <img src={Googlesvg} className=" w-5"  alt="" />
                        Log in Google
                    </button>
                </div>
            </form>

         

        </AuthPage>
        );
}

export default LoginPage;







