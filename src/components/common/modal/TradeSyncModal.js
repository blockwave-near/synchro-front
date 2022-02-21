import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styleds from "styled-components";
import {styled} from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import {ReactComponent as CloseIcon} from "assets/ModalClose.svg";
import {ReactComponent as SmallArrow} from "assets/SmallArrow.svg";
import InputField from "../InputField";
import CommonButton from "../CommonButton";
import SegmentedControl from "../SegmentedControl";
import {utils} from "near-api-js";

const SmallButton = styled(CommonButton)`
  width: 150px;
`;

const BootstrapDialog = styled(Dialog)`
  z-index: 10000;

  & .MuiDialog-paper {
    width: 800px;
    height: 550px;

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

function ComingSoonModal(props) {
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
                <BootstrapDialogTitle onClose={handleClose}/>
                <StyledBootstrapDialogContent>
                    <SegmentedControl width={200} getSegmentedValue={handlePage}>
                        Buy
                        Sell
                    </SegmentedControl>

                    <SizeBox h={20}/>
                    {pageValue == 'Buy' ? <>
                        <InputField FormHelperTop="From" FormHelperBottom="Wallet"
                                    Unit="USDT"
                                    isFormHelper={true}
                                    Balance={80}
                        />

                        <SmallArrow/>

                        <InputField FormHelperTop="To"
                                    Unit="Sync"
                                    isFormHelper={true}
                        />

                        <SizeBox h={20}/>
                        <ConfirmButton>
                            Buy
                        </ConfirmButton>
                    </> : <>
                        <InputField FormHelperTop="From" FormHelperBottom="Wallet"
                                    Unit="Sync"
                                    isFormHelper={true}
                                    Balance={30}
                        />

                        <SmallArrow/>

                        <InputField FormHelperTop="To"
                                    Unit="USDT"
                                    isFormHelper={true}
                        />

                        <SizeBox h={20}/>
                        <ConfirmButton onClick={handleProceed}>
                            Sell
                        </ConfirmButton>
                    </>}
                </StyledBootstrapDialogContent>
            </BootstrapDialog>
        </div>
    );
}

export default ComingSoonModal;
