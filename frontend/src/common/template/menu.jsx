import React from 'react';

import MenuItem from './menu-item';
import MenuTree from  './menuTree';

export default props => (
  <ul className="sidebar-menu">
    <MenuItem path='#' icon='dashboard' label='Dashboard' />

    <MenuTree icon='edit' label= 'Register' >
      <MenuItem path='#billingCycles' icon='usd' label=' Billing Cycles' />
    </MenuTree>
  </ul>
)