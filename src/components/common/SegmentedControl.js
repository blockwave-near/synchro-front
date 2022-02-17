import React, {useState} from 'react';
import {styled} from '@mui/material/styles';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import {buttonUnstyledClasses} from '@mui/base/ButtonUnstyled';
import TabUnstyled, {tabUnstyledClasses} from '@mui/base/TabUnstyled';

const purple = {
    100: '#8070FF',
    200: '#5B4EE6',
};

const Tab = styled(TabUnstyled)`
  color: white;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  background-color: transparent;
  width: 130px;
  height: 30px;
  margin: 3px 4px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${purple[100]};
  }

  &.${tabUnstyledClasses.selected} {
    background-color: white;
    color: ${purple[200]};
    border-radius: 20px;
    font-weight: 700;
    transition: all 500ms ease-in-out;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabsList = styled(TabsListUnstyled)`
  width: ${(props) => (props.fullWidth ? '100%' : props.width ?? '100%')};
  height: 36px;
  background-color: ${purple[200]};
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
`;

function SegmentedControl(props) {
    let newArray = [];
    newArray.push(props.children.split(' '))

    const [value, setValue] = useState(newArray[0][0]);

    const handleChange = (event, newValue) => {
        // console.log(newValue)
        // console.log(newArray)
        // console.log(newArray[0][newValue])
        setValue(newArray[0][newValue]);
    };

    if (props.hasOwnProperty('getSegmentedValue')) {
        props.getSegmentedValue(value);
    }

    // console.log(`value: ${value}`);

    return (
        <TabsUnstyled defaultValue={0} onChange={handleChange}>
            <TabsList >
                {typeof newArray[0][0] === 'string' &&
                    <Tab>{newArray[0][0]}</Tab>
                }

                {typeof newArray[0][1] === 'string' &&
                    <Tab>{newArray[0][1]}</Tab>
                }

                {typeof newArray[0][2] === 'string' &&
                    <Tab>{newArray[0][2]}</Tab>
                }

                {typeof newArray[0][3] === 'string' &&
                    <Tab>{newArray[0][3]}</Tab>
                }
            </TabsList>
        </TabsUnstyled>
    );
}

export default SegmentedControl;