import React from 'react';
import Button from '@mui/material/Button';
import {styled} from "@mui/material/styles"

const ButtonContainer = styled(Button)`
  width: 180px;
  height: 36px;
  padding: 10px 20px;
  background: ${props => props.back ? '#5B4EE6' : '#25252E'};
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  
  color: white;
  font-size:  ${(props) => props.fontSize ?? '14px'};
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(91, 78, 230, 0.25);
  border-radius: 100px;

  &:hover {
    background: #5B4EE6;
  }

  & + & {
    margin-left: 30px;
  }
`;

function CommonButton(props) {
    return <ButtonContainer variant="contained" {...props}>{props.children}</ButtonContainer>;
}

export default CommonButton;