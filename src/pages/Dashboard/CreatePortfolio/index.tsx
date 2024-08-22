import { Button, Group, Textarea, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState } from 'react';
import { FileUploadButton } from '../../../components/fileupload';
import { create } from '../../../helpers/api/portfolio';
import { notifications } from '@mantine/notifications';
import { useNavigate } from 'react-router-dom';

function CreatePortfolio() {
    const [files, setFiles] = useState<File|null>(null);
    const navigate = useNavigate()
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      title: '',
      link:'',
      desc:''
      
    },

    validate: {
    //   email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  function onSubmit(params:any){
    console.log(params);

    create({...params, cover_img:files}).then((data:any)=>{
     console.log(data);
     form.reset()

     navigate('/portfolios')
     

notifications.show({
title: 'Portfolio added successfully !',
message: '',
})
    })
    
}
  return (
    <form onSubmit={form.onSubmit((values) => onSubmit(values))} className=' p-20 h-full'>
      <TextInput
        withAsterisk
        label="Portfolio Name"
        placeholder="Portfolio name"
        key={form.key('title')}
        {...form.getInputProps('title')}
      />

<TextInput
        withAsterisk
        label="Link"
        placeholder="link"
        key={form.key('link')}
        {...form.getInputProps('link')}
      />
      <Textarea withAsterisk label="Desc" placeholder='Desc' 
            key={form.key('desc')}
            {...form.getInputProps('desc')} />

<div className=' mt-4'>
<FileUploadButton files={files} setfiles={setFiles} text="Upload Cover Image"/>
</div>
      <Group justify="flex-end" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}

export default CreatePortfolio;