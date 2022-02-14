import React from 'react';
import styled from 'styled-components';
import { NavLink, useLocation } from 'react-router-dom';

const MenuContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  height: 50px;

  p {
    font-style: normal;
    font-weight: ${(props) => (props.current ? 700 : 500)};
    font-size: ${(props) => (props.current ? '21px' : '18px')};
    color: ${(props) => (props.current ? '#8070FF' : '#c4c4c4')};
  }
`;

function SidebarItem({ menu, index }) {
    const { pathname } = useLocation();

    return (
        <MenuContainer current={pathname === menu.path}>
            <NavLink exact to={menu.path} key={index}>
                <p>{menu.name}</p>
            </NavLink>
        </MenuContainer>
    );
}

export default SidebarItem;
