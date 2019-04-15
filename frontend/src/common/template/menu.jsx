import React from 'react'

import MenuItem from './menu-item';
import MenuTree from './menu-tree';

export default props => (
  <ul className='sidebar-menu'>
    <MenuItem path='/' label='Dashboard' icon='dashboard' />

    <MenuTree label='Register' icon='edit'>
      <MenuItem path='billingCycles' label='Billing Cycles' icon='usd' />
    </MenuTree>
  </ul>
)
