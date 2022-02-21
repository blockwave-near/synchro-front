import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {styled} from '@mui/material/styles';
import Button from "../Button";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import {ReactComponent as CloseIcon} from "assets/ModalClose.svg";
import InputField from "../InputField";
import CommonButton from "../CommonButton";
import {utils} from "near-api-js";

const SmallButton = styled(CommonButton)`
    width: 150px;
`;

const BootstrapDialog = styled(Dialog)`

  & .MuiDialog-paper {
    width: 800px;
    height: 400px;

    background: #FFFFFF;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
  }
`

const BootstrapDialogTitle = (props) => {
    const {children, onClose, ...other} = props;

    return (
        <DialogTitle sx={{m: 0, p: 2}} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon/>
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

const StyledBootstrapDialogTitle = styled(BootstrapDialogTitle)`
  font-family: 'Work Sans', 'Segoe UI', Roboto, Arial, sans-serif;
  margin-top: 133px;
  padding: 0 16px 0 16px;
  font-style: normal;
  font-weight: 700;
  font-size: 60px;
  text-align: center;
  color: #5B4EE6;
`

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

function CreatePollModal(props) {
    const [open, setOpen] = useState(false);
    const [txValue, setTxValue] = useState(3.678);
    const [receiveValue, setReceiveValue] = useState(103.678);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleProceed = () => {
        const amount = '0.00001';

        window.bnearStaking.deposit_and_stake({}, "300000000000000", utils.format.parseNearAmount(amount))
            .then(() => window.modalOpen = true);
    };

    return (
        <div>
            {/*<Button variant="outlined" onClick={handleClickOpen}>*/}
            {/*    Deposit*/}
            {/*</Button>*/}
            <SmallButton back={props.back} onClick={handleClickOpen}>{props.title}</SmallButton>

            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                maxWidth="false"
            >
                <StyledBootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    ComingSoon
                </StyledBootstrapDialogTitle>
            </BootstrapDialog>
        </div>
    );
}

export default CreatePollModal;
