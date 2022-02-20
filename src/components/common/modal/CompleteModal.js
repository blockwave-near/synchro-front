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
import CommonButton from "components/common/CommonButton";
import {ReactComponent as CompleteIcon} from "assets/CompleteIcon.svg";


const MintButton = styled(CommonButton)`
  margin: 30px 0 0 0;
  width: 250px;
  height: 72px;
  font-size: 21px;
  background: #222222;
  border-radius: 100px;
`;

const BootstrapDialog = styled(Dialog)`

  & .MuiDialog-paper {
    width: 800px;
    height: 600px;

    background: #FFFFFF;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
  }
`

const StyledDialogActions = styled(DialogActions)`
  display: flex;
  justify-content: center;
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
  margin-top: 92px;
  padding: 0 16px 0 16px;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  text-align: center;
  color: #222222;
`

const StyledBootstrapDialogContent = styled(DialogContent)`
  //width: 640px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const TextContainer = styled("div")`
  margin-top: 15px;
  font-weight: 500;
  font-size: 18px;
  text-align: right;
  color: #777777;
  width: 640px;
  display: flex;
  justify-content: space-between;
`

const IconTitleContainer = styled("div")`
  display: flex;  
  flex-direction: column;
  align-items: center;
`;

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

function DepositModal({modalOpen, handleClick, children}) {
    const [open, setOpen] = useState(modalOpen);
    const [txValue, setTxValue] = useState(3.678);
    const [txHash, setTxHash] = useState("9C765C...3C5EDC");
    // const [exchangeRate, setExchangeRate] = useState(1.00843);
    const [mintValue, setMintValue] = useState(10.033886);
    const [bondedAmount, setBondedAmount] = useState(10);

    const handleClose = () => {
        setOpen(false);
    };

    const handleProceed = () => {

    };

    return (
        <div>
            {/*<Button variant="outlined" onClick={handleClickOpen}>*/}
            {/*    Deposit*/}
            {/*</Button>*/}
            <MintButton onClick={handleClick}>{children}</MintButton>

            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                maxWidth="false"
            >
                <StyledBootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    <IconTitleContainer>
                        <CompleteIcon style={{marginBottom:"5px"}}/>
                        Complete!
                    </IconTitleContainer>
                </StyledBootstrapDialogTitle>
                <StyledBootstrapDialogContent>
                    <TextContainer style={{marginTop:"35px"}}>
                        <p>Bonded Amount</p>
                        <p>{bondedAmount} NEAR</p>
                    </TextContainer>

                    <TextContainer>
                        <p>Minted Amount</p>
                        <p>{mintValue} bNEAR</p>
                    </TextContainer>

                    {/* <TextContainer>
                        <p>Exchange Rate</p>
                        <p>{exchangeRate}</p>
                    </TextContainer> */}

                    <TextContainer>
                        <p>Tx Hash</p>
                        <p>{txHash}</p>
                    </TextContainer>

                    <TextContainer>
                        <p>Tx Fee</p>
                        <p>{txValue} USDT</p>
                    </TextContainer>

                </StyledBootstrapDialogContent>
                <StyledDialogActions>
                    <Button autoFocus onClick={handleProceed} width="640px" height="72px" fontSize="21px" style={{marginBottom: "50px"}}>
                        OK
                    </Button>
                </StyledDialogActions>
            </BootstrapDialog>
        </div>
    );
}

export default DepositModal;
