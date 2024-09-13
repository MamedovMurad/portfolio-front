import { useDisclosure } from '@mantine/hooks';
import {  Menu } from '@mantine/core';
import { DeletePopUp } from '../pop-up/delete';
import { IconDots } from '@tabler/icons-react';

export function BurgerMenuPortfolio({deleteItem}:{deleteItem?:any}) {
  const [opened, { toggle }] = useDisclosure();
if (opened) {
  
}

  return <>
  
  <Menu shadow="md" width={80} onClose={toggle}>
      <Menu.Target >
      <IconDots color="black" className=" bg-black bg-opacity-5 cursor-pointer"/>

      </Menu.Target>

      <Menu.Dropdown>
     
        {/* <Menu.Item >
          <Link to={'/dashboard'} className=' text-center block '>Edit</Link>
        </Menu.Item> */}
        <Menu.Item className=' bg-red-200 text-red-800'>
            <DeletePopUp deleteItem={deleteItem}/>
        </Menu.Item>
  

        {/* <Menu.Divider /> */}


      </Menu.Dropdown>
    </Menu></>;
}