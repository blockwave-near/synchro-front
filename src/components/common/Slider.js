import * as React from 'react';
import {styled, alpha, Box} from '@mui/system';
import MUISlider from '@mui/material/Slider';


const StyledSlider = styled(MUISlider)`
  color: #5B4EE6;
  height: 20px;
  width: 100%;
  padding: 13px 0;
  display: inline-block;
  position: relative;
  cursor: pointer;
  touch-action: none;
  -webkit-tap-highlight-color: transparent;

  & .MuiSlider-rail {
    display: block;
    position: absolute;
    width: 100%;
    height: 14px;
    border-radius: 7px;
    background-color: #E5E5E5;
    opacity: 0.38;
  }

  & .MuiSlider-track {
    display: block;
    position: absolute;
    height: 14px;
    border-radius: 7px;
    background-color: currentColor;
  }

  & .MuiSlider-thumb {
    position: absolute;
    width: 20px;
    height: 20px;
    margin-left: -6px;
    box-sizing: border-box;
    border-radius: 50%;
    outline: 0;
    //border: 2px solid currentColor;
    background-color: #fff;

    :hover,
    &.Mui-focusVisible {
      box-shadow: 0 0 0 0.25rem ${alpha(
              '#5B4EE6',
              0.15,
      )};
    }

    &.Mui-active {
      box-shadow: 0 0 0 0.25rem ${alpha(
              '#5B4EE6',
              0.3,
      )};
    }

    & .MuiSlider-valueLabel {
      line-height: 1.2;
      font-size: 12px;
      padding: 0;
      width: 32px;
      height: 32px;
      border-radius: 50% 50% 50% 0;
      background-color: #5B4EE6;
      transform-origin: bottom left;
      transform: translate(50%, -100%) rotate(-45deg) scale(0);

      &:before {
        display: none
      }
    ;

      &.MuiSlider-valueLabelOpen {
        transform: translate(50%, -100%) rotate(-45deg) scale(1);
      }
    ;

      & > * {
        transform: rotate(45deg);
      }
    }
`;

function Slider() {
    return (
        <Box sx={{width: 300}}>
            <StyledSlider valueLabelDisplay="auto" defaultValue={0}/>
        </Box>
    );
}
export default Slider;

