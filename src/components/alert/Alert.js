import * as React from 'react';
import Box from '@mui/material/Box';
import MUIAlert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import {ReactComponent as Close} from "assets/Close.svg";

import {styled} from "@mui/material/styles"

const StyleAlert = styled(MUIAlert)`
  margin-top: 20px;
  width: 100%;
  height: 46px;
  background-color: #4B4B62;
  font-size: 12px;
  align-items: center;
`;


export default function TransitionAlerts(props) {
    const [open, setOpen] = React.useState(true);

    return (
        <Box sx={{ width: '100%' }}>
            <Collapse in={open}>
                <StyleAlert
                    variant="filled"
                    severity="error"
                    action={
                        <IconButton
                            aria-label="close"
                            onClick={() => {
                                setOpen(false);
                            }}
                        >
                            <Close fontSize="inherit" />
                        </IconButton>
                    }
                    sx={{ mb: 2 }}
                >
                    {props.children}
                </StyleAlert>
            </Collapse>
        </Box>
    );
}
