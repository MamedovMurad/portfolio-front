import { useDisclosure } from '@mantine/hooks';
import {  Menu } from '@mantine/core';
import { DeletePopUp } from '../pop-up/delete';
import { IconDots, IconEdit } from '@tabler/icons-react';

export function BurgerMenuPortfolio({deleteItem,editItem}:{deleteItem?:any,editItem?:any}) {
  const [opened, { toggle }] = useDisclosure();
if (opened) {
  
}

  return <>
  
  <Menu shadow="md" width={80} onClose={toggle}>
      <Menu.Target >
      <IconDots color="black" className=" bg-text-primary cursor-pointer rounded shadow"/>

      </Menu.Target>

      <Menu.Dropdown>
     
        <Menu.Item className=' w-full bg-text-primary bg-opacity-20 text-text-primary mb-1' >
         <button onClick={editItem}  className='w-full flex justify-center h-full '> <IconEdit size={20}/></button>
        </Menu.Item>
        <Menu.Item className=' bg-red-200 text-red-800'>
            <DeletePopUp deleteItem={deleteItem}/>
        </Menu.Item>
  

        {/* <Menu.Divider /> */}


      </Menu.Dropdown>
    </Menu></>;
}