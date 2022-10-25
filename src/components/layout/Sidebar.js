import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const Sidebar = () => {
  return (
    <Nav vertical>
      <NavItem>
        <NavLink href="/billing">
          Sales
        </NavLink>
      </NavItem>
      {/* TODO: add purchase page. */}
      {/* <NavItem>
        <NavLink href="/purchase">
          Purchase
        </NavLink>
      </NavItem> */}
      <NavItem>
        <NavLink href="/inventory">
          Inventory
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/products">
          Products
        </NavLink>
      </NavItem>
    </Nav>
  );
}

export default Sidebar;
