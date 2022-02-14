import React, {useState} from "react";
import {styled} from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from '@mui/material/Tab';


function SegmentedControl(props) {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    console.log(value);

    return (
        <Tabs value={value} onChange={handleChange} centered>
            <Tab label="Item One"/>
            <Tab label="Item Two"/>
            <Tab label="Item Three"/>
        </Tabs>
    );
}

export default SegmentedControl;
