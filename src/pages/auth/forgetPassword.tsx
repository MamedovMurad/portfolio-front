import { Button, Group, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

export function ForgotPassword() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      password: '',
   
    },

 
  });

  return (
<section className=' h-svh flex justify-center items-center'>
<form onSubmit={form.onSubmit((values) => console.log(values))} className=' bg-white text-dark w-3/12 p-5 rounded'>
      <TextInput
        withAsterisk
        label="New Password"
        placeholder="password"
        key={form.key('password')}
        {...form.getInputProps('password')}
      />



      <Group justify="flex-end" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
</section>
  );
}