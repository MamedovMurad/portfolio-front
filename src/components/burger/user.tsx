import { useDisclosure } from '@mantine/hooks';
import { Menu } from '@mantine/core';
import { Link, useNavigate } from 'react-router-dom';

export function BurgerMenuUser({name}:{name?:string}) {
  const [opened, { toggle }] = useDisclosure();
const navigate = useNavigate();
  function onClickHandle(){
    navigate('/')
    localStorage.clear()

    if (opened) {
        
    }
   
  }
  return <>
  
  <Menu shadow="md" width={200} onClose={toggle}>
      <Menu.Target >
     <span className=' block h-full w-full cursor-pointer'>{name}</span>

      </Menu.Target>

      <Menu.Dropdown>
     
        <Menu.Item >
          <Link className=' w-full h-full' to={'/dashboard'}>My Profile</Link>
        </Menu.Item>
        <Menu.Item >
        <Link className=' w-full h-full' to={'/dashboard/create-portfolios'}>Create Portfolio</Link>
        </Menu.Item>
        <Menu.Item >
       <span className=" block h-full w-full" onClick={onClickHandle}>Log out</span>
        </Menu.Item>

        <Menu.Divider />


      </Menu.Dropdown>
    </Menu></>;
}