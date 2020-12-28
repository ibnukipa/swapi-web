import React from 'react';
import { Menu } from 'semantic-ui-react';

export const TopMenu = () => (
  <Menu className='top fixed'>
    <Menu.Item header>swapi</Menu.Item>
    <Menu.Item
      active
      name='Characters'
      onClick={() => {}}
    />
  </Menu>
)
