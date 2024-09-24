import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, TextInput, Group } from '@mantine/core';
import { useForm } from '@mantine/form';
import { api } from '../../helpers/api';
import { useEffect } from 'react';
import { notifications } from '@mantine/notifications';

export function EditModal({  link,isOpen,closeParent }: {  link?: string,isOpen:number,closeParent:()=>void }) {
    const [opened, { open, close }] = useDisclosure(false);
    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            link: link,

        },


    });

    function onSubmit(values: {
        link: string | undefined;
    }) {
        console.log(values);
        
         api.post("portfolios/" + isOpen, {...values,_method:"PUT"}).then(()=>{
            notifications.show({
                title: 'The item was edited successfully',
                message: '',
              })
              closeParent()
             return close()
         })
    }
    console.log(isOpen,'is');
    
    useEffect(() => {
        link&& form.setFieldValue("link",link)
        if (isOpen) {
           return open()
        }else{
            closeParent();
            return close()
           
        }

    
    }, [isOpen]);

    function closeAll() {
        closeParent()
        close()
    }
    return (
        <>
            <Modal opened={opened} onClose={closeAll} title="Portfolio's link">
                <form onSubmit={form.onSubmit((values) => onSubmit(values))}>
                    <TextInput
                        withAsterisk
                        label="Link"
                        placeholder="your link"
                        key={form.key('link')}
                        {...form.getInputProps('link')}
                        
                    />



                    <Group justify="flex-end" mt="md">
                        <Button type="submit">Submit</Button>
                    </Group>
                </form>
            </Modal>

        </>
    );
}