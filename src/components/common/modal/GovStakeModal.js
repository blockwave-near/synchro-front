import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styleds from "styled-components";
import {styled} from '@mui/material/styles';
import Button from "../Button";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import {ReactComponent as CloseIcon} from "assets/ModalClose.svg";
import InputField from "../InputField";
import CommonButton from "../CommonButton";
import SegmentedControl from "../SegmentedControl";

const SmallButton = styled(CommonButton)`
  width: 150px;
`;

const BootstrapDialog = styled(Dialog)`
  z-index: 10000;

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
  font-size: 32px;
  text-align: center;
  color: #222222;
`

const StyledBootstrapDialogContent = styled(DialogContent)`
  width: 100%;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`

const ConfirmButton = styled(CommonButton)`
  margin: 30px 0 0 0;
  width: 250px;
  height: 72px;
  font-size: 21px;
  background: #222222;
  border-radius: 100px;
`;

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

const SizeBox = styleds.div`
  width: ${props => `${props.w ?? 0}px`};
  height: ${props => `${props.h ?? 0}px`};
`;

function GovStakeModal(props) {
    const [open, setOpen] = useState(false);
    const [pageValue, setPageValue] = useState('None');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handlePage = (value) => {
        setPageValue(value);
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
                <BootstrapDialogTitle onClose={handleClose}/>
                <StyledBootstrapDialogContent>
                    <SegmentedControl w={300} getSegmentedValue={handlePage}>
                        Stake
                        Unstake
                    </SegmentedControl>

                    <SizeBox h={20}/>
                    {pageValue == 'Stake' ? <>
                        <InputField FormHelperTop="Stake Amount" FormHelperBottom="Wallet"
                                    Unit="Sync"
                                    isFormHelper={true}
                                    Balance={30}
                        />

                        <ConfirmButton>
                            Stake
                        </ConfirmButton>
                    </> : <>
                        <InputField FormHelperTop="Unstake Amount" FormHelperBottom="Staked Amount"
                                    Unit="Sync"
                                    isFormHelper={true}
                                    Balance={80}
                        />

                        <ConfirmButton>
                            Unstake
                        </ConfirmButton>
                    </>}
                </StyledBootstrapDialogContent>
            </BootstrapDialog>
        </div>
    );
}

export default GovStakeModal;
