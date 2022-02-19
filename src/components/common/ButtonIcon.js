import React from 'react';
import Button from '@mui/material/Button';
import {ReactComponent as Wallet} from "assets/Wallet.svg";
import {styled} from "@mui/material/styles"

const IconButton = styled(Button)`
  width: ${(props) => (props.fullWidth ? '100%' : props.width ?? '172px')};
  height: ${(props) => props.height ?? '36px'};
  background: ${(props) => props.background ?? '#5B4EE6'};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  text-transform: capitalize;

  color: white;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(91, 78, 230, 0.25);
  border-radius: 100px;

  &:hover {
    background: #5B4EE6;
  }
`

function ButtonIcon(props) {
    return (
        <IconButton variant="contained" startIcon={<Wallet/>} {...props}>
            {props.children}
        </IconButton>
    );
}

export default ButtonIcon;