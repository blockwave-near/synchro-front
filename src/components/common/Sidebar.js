import React from 'react';
import styled from 'styled-components';
import SidebarItem from './SidebarItem';

const Side = styled.div`
  display: flex;
  border-right: 1px solid black;
  position: fixed;
  flex-direction: column;
  align-items: center;
  background: #25252e;
  width: 150px;
  height: 100vh;
  border-radius: 0 0 50px 0;
  
  z-index: 10000;
`;

const Menu = styled.div`
  width: 100%;
  padding: 100px 25px 100px 25px;
  display: flex;
  flex-direction: column;
`;

function Sidebar() {
    const menus = [
        { name: 'Earn', path: '/earn' },
        { name: 'Borrow', path: '/borrow' },
        { name: 'BAsset', path: '/basset' },
        { name: 'Govern', path: '/gov' },
    ];

    return (
        <Side>
            <Menu>
                {menus.map((menu, index) => {
                    return <SidebarItem menu={menu} />;
                })}
            </Menu>
        </Side>
    );
}

export default Sidebar;
