import React from 'react';
import ChipComponent from '@mui/material/Chip';
import {styled} from "@mui/material/styles"

const ChipTag = styled(ChipComponent)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 71px;
  height: 26px;

  background: #FFFFFF;
  border: 1px solid #C4C4C4;
  box-sizing: border-box;
  border-radius: 20px;

  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  text-align: center;

  color: #777777;
`;

function Chip(props) {
    return (
        <ChipTag label={props.children} />
    );
}

export default Chip;
