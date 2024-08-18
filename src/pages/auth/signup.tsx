import { FunctionComponent } from "react";
import AuthPage from ".";
import { Button, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import logo from "../../assets/logo-dark.svg"
import { Link } from "react-router-dom";

interface LoginPageProps {

}

const SignUpPage: FunctionComponent<LoginPageProps> = () => {
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
    return (
        <AuthPage>
            <div className=" flex justify-end px-5 mb-5">
                <Link to={"/signup"} className=" text-blue-500 text-sm ">Log in</Link>
            </div>
            <h4 className=" text-dark text-2xl text-center mt-10">Get started Today! become a <span className=" font-semibold text-2xl">BIHARBOR</span></h4>
            <div className=" h-56 flex items-center justify-center">
                <img src={logo} alt="" className=" h-full" />
            </div>
            <form onSubmit={form.onSubmit((values) => console.log(values))} className=" px-5 flex-col flex justify-center h-max gap-y-2">
                <TextInput
                    className=" text-dark"
                    withAsterisk
                    label="Name"
                    placeholder="name"
                    key={form.key('name')}
                    {...form.getInputProps('name')}
                />
                <TextInput
                    className=" text-dark"
                    withAsterisk
                    label="Surname"
                    placeholder="surname"
                    key={form.key('surname')}
                    {...form.getInputProps('surname')}
                />
                <TextInput
                    className=" text-dark"
                    withAsterisk
                    label="Phone"
                    placeholder="phone"
                    key={form.key('phone')}
                    {...form.getInputProps('phone')}
                />
                <TextInput
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




                <Button type="submit" className=" bg-primary  w-full hover:bg-dark mt-2">Sign up</Button>

            </form>


        </AuthPage>);
}

export default SignUpPage;









