import {  Group, Select, Textarea, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useEffect, useState } from 'react';
import { FileUploadButton } from '../../../components/fileupload';
import { create } from '../../../helpers/api/portfolio';
import { notifications } from '@mantine/notifications';
import { useNavigate } from 'react-router-dom';
import { api } from '../../../helpers/api';

function CreatePortfolio() {
    const [files, setFiles] = useState<File|null>(null);
    const [projects, setprojects] = useState<any>();
    const [categories, setCategories] = useState<any>();

    useEffect(() => {
      api.get("projects").then((data)=>{
        setprojects(data?.data)
      })
      api.get("categories").then((data)=>{
        setCategories(data?.data)
      })
      
    }, []);
    const navigate = useNavigate()
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      title: '',
      link:'',
      desc:'',
      category_id:'',
      project_id:''
      
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

     navigate('/dashboard')
     

notifications.show({
title: 'Portfolio added successfully !',
message: '',
})
    })
    
}
  return (
    <form onSubmit={form.onSubmit((values) => onSubmit(values))} className=' md:mx-40 p-3 md:p-20 h-full bg-text-primary text-dark rounded mt-5'>
     <h4 className=' text-center text-2xl font-semibold'>Create a new Portfolio</h4>
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
       <Select
      label="Projects"
      placeholder="Pick value"
      data={projects?.map((item:any)=>({label:item?.title, value:item?.id+''}))}
      {...form.getInputProps('project_id')}
    />
           <Select
      label="Categories"
      placeholder="Pick value"
      data={categories?.map((item:any)=>({label:item?.title, value:item?.id+''}))}
      {...form.getInputProps('category_id')}
    />

      <Textarea withAsterisk label="Desc" placeholder='Desc' 
            key={form.key('desc')}
            {...form.getInputProps('desc')} />

<div className=' mt-4'>
<FileUploadButton files={files} setfiles={setFiles} text="Upload Cover Image"/>
</div>
      <Group justify="flex-end" mt="md">
        <button type="submit" className=' bg-dark text-white w-40 py-2 rounded'>Submit</button>
      </Group>
    </form>
  );
}

export default CreatePortfolio;