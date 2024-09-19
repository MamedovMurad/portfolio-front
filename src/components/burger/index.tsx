import { useDisclosure } from '@mantine/hooks';
import { Burger, Menu } from '@mantine/core';
import { Link } from 'react-router-dom';

export function BurgerMenu() {
  const [opened, { toggle }] = useDisclosure();
  return <>
  
  <Menu shadow="md" width={200} onClose={toggle}>
      <Menu.Target >
      <Burger color='rgba(189,255,238,1)' opened={opened} onClick={toggle} aria-label="Toggle navigation" />

      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Application</Menu.Label>
        <Menu.Item >
          <Link to={'/about'}>About</Link>
        </Menu.Item>
        <Menu.Item >
        <Link to={'/pricing'}>Pricing</Link>
        </Menu.Item>
        <Menu.Item >
        <Link to={'/portfolios'}>Portfolios</Link>
        </Menu.Item>
        <Menu.Item >
        <Link to={'/contact'}>Contact</Link>
        </Menu.Item>
        <Menu.Item>
        <ul className="flex  justify-between w-full container mx-auto gap-x-2 border-t-black py-2 border-t">
        {['az', 'en', 'ru', 'es'].filter((item)=>localStorage.getItem("lang")?item!==localStorage.getItem('lang'):item!=="az").map((item) => (
                        <li key={item} className=" text-primary cursor-pointer" 
                        onClick={()=>{localStorage.setItem("lang",item); window.location.reload()}}> {item}</li>
                    ))}

                </ul>
        </Menu.Item>

        <Menu.Divider />


      </Menu.Dropdown>
    </Menu></>;
}