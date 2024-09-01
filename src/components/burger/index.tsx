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

        <Menu.Divider />


      </Menu.Dropdown>
    </Menu></>;
}