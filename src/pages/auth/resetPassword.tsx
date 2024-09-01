import { Button, Group, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

export function ResetsPassword() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  return (
<div className=' h-svh flex justify-center items-center'>
<form onSubmit={form.onSubmit((values) => console.log(values))} className=' bg-white text-dark w-3/12 p-5 rounded'>
      <TextInput
        withAsterisk
        label="Email"
        placeholder="your@email.com"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />



      <Group justify="flex-end" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
</div>
  );
}