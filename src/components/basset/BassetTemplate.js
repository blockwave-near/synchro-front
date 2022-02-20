import React, {useState} from "react";
// import styled from "styled-components";
import {styled} from "@mui/material/styles";
import {ReactComponent as LinkMark} from "assets/Link.svg";
import {ReactComponent as Near} from "assets/Near.svg";
import {ReactComponent as BNear} from "assets/bNear.svg";
import {ReactComponent as Arrow} from "assets/Arrow.svg";
import {ReactComponent as SmallArrow} from "assets/SmallArrow.svg";
import {Link} from 'react-router-dom';
import CommonButton from "../common/CommonButton";
import ButtonIcon from "components/common/ButtonIcon";
import SegmentedControl from "components/common/SegmentedControl";
import InputField from "components/common/InputField";
import CompleteModal from "../common/modal/CompleteModal";

const StyledLink = styled(LinkMark)`
  margin: 0 0 7px 5px;
  vertical-align: bottom;
`;

const Container = styled('div')`
  width: 92%;
  padding: 35px 45px 114px 45px;
`;

const CardContainer = styled('div')`
  width: 34.5%;
  display: flex;
  flex-direction: column;
`;

const CardSideContainer = styled('div')`
  display: flex;
  padding-bottom: 114px;
`

const TitleTextContainer = styled('div')`
  width: 100%;
  margin: 24px 0 0 25px;
  font-weight: 700;
  font-size: 36px;
  color: #222222;
  display: flex;
  align-items: flex-end;

  p {
    margin: 0 0 4px 10px;
    font-weight: 500;
    font-size: 18px;
    color: #777777;
  }
`;


const MainCardContainer = styled('div')`
  width: 100%;
  height: 100%;
  //height: 360px;
  margin-top: 21px;
  padding: 36px 40px 20px 40px;
  background: #FFFFFF;
  box-shadow: 0 4px 10px rgba(91, 78, 230, 0.25);
  border-radius: 20px;

  p {
    font-weight: 500;
    font-size: 18px;
    color: #777777;
    margin-bottom: 10px;
  }

  number {
    margin-left: 11px;
    font-weight: 700;
    font-size: 60px;
    color: #222222;
  }
`;

const SecondCardContainer = styled('div')`
  margin-left: 30px;
  width: 63%;
  height: 100%;
  //height: 750px;
  padding: 44px 105px 38px 105px;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 21px;
  background: #FFFFFF;
  box-shadow: 0 4px 10px rgba(91, 78, 230, 0.25);
  border-radius: 20px;

  p {
    font-weight: 500;
    font-size: 18px;
    color: #777777;
  }
`;

const ButtonContinaer = styled('div')`
  display: flex;
  justify-content: flex-end;
`;

const NearIconContainer = styled('div')`
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: #222222;
  display: flex;
  flex-direction: column;
`;

const NearFlowContainer = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 30px;
`;

const InputContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`

const PriceTextContainer = styled('div')`
  font-weight: 500;
  font-size: 14px;
  color: #222222;
  text-align: right;
  margin-top: 45px;
  width: 70%;
  display: flex;
  justify-content: space-between;
`

const Row = styled('div')`
  display: flex;
  justify-content: ${props => props.center ? 'center' : 'start'};
  align-items: ${props => props.end ? 'end' : 'start'};
  width: 100%;
  flex-direction: row;
`;

const SizeBox = styled('div')`
  width: ${props => `${props.w ?? 0}px`};
  height: ${props => `${props.h ?? 0}px`};
`;

const CardButtonContainer = styled('div')`
  display: flex;
  margin-top: 100px;
  justify-content: right;
`

function Basset() {
    const [positionValue, setPositionValue] = useState('95,145.75');
    const [withdrawableValue, setWithdrawableValue] = useState(1);
    const [segmentedValue, setSegmentedValue] = useState('MINT');
    const [exchangeRate, setExchangeRate] = useState('0.99999 bNEAR per NEAR');

    const getSegmentedValue = (value) => {
        setSegmentedValue(value);
        console.log(value)
    }

    const handleConnectWallet = () => {
        console.log('ConnectWallet Button Click');
    };

    const handleMint = () => {
        console.log('Mint Button Click');
    }

    return (
        <Container>
            <ButtonContinaer>
                <ButtonIcon onClick={handleConnectWallet}>Connect Wallet</ButtonIcon>
            </ButtonContinaer>

            <TitleTextContainer>
                BAsset
                <p>Docs</p>
                <Link to="/">
                    <StyledLink/>
                </Link>
            </TitleTextContainer>

            <CardSideContainer>
                <CardContainer>
                    <MainCardContainer>
                        <p>Position Management</p>
                        <Row center={false} end={true}>
                            <number>
                                {positionValue}
                            </number>
                            <SizeBox w={6}/>
                            <p>
                                USDT
                            </p>
                        </Row>
                        <CardButtonContainer>
                            <CommonButton back={true}>Claim Rewards</CommonButton>
                        </CardButtonContainer>

                    </MainCardContainer>
                    <MainCardContainer style={{marginTop: "30px"}}>
                        <p>Withdrawable NEAR</p>
                        <Row center={false} end={true}>
                            <number>
                                {withdrawableValue}
                            </number>
                            <SizeBox w={6}/>
                            <p>
                                NEAR
                            </p>
                        </Row>
                        <CardButtonContainer>
                            <CommonButton back={true}>Withdraw</CommonButton>
                        </CardButtonContainer>
                    </MainCardContainer>
                </CardContainer>

                <SecondCardContainer>
                    <SegmentedControl getSegmentedValue={getSegmentedValue}>
                        MINT
                        BURN
                    </SegmentedControl>

                    {segmentedValue === "MINT" ?
                        <>
                            <NearFlowContainer>
                                <NearIconContainer>
                                    <Near/>
                                    NEAR
                                </NearIconContainer>
                                <Arrow style={{marginBottom: "18px"}}/>
                                <NearIconContainer>
                                    <BNear/>
                                    bNEAR
                                </NearIconContainer>
                            </NearFlowContainer>

                            <InputContainer>
                                <InputField FormHelperTop="I WANT TO BOND" FormHelperBottom="Balance" Unit="NEAR"
                                            isFormHelper={true}/>
                                <SmallArrow style={{margin: "5px 0 5px 0"}}/>
                                <InputField FormHelperTop="AND MINT" Unit="bNEAR"/>
                            </InputContainer>

                            <PriceTextContainer>
                                <p>PRICE</p>
                                <p>{exchangeRate}</p>
                            </PriceTextContainer>

                            <CompleteModal>MINT</CompleteModal>
                        </>
                        :
                        <>
                            <NearFlowContainer>
                                <NearIconContainer>
                                    <BNear/>
                                    bNEAR
                                </NearIconContainer>
                                <Arrow style={{marginBottom: "18px"}}/>
                                <NearIconContainer>
                                    <Near/>
                                    NEAR
                                </NearIconContainer>
                            </NearFlowContainer>

                            <InputContainer>
                                <InputField FormHelperTop="I WANT TO MINT" FormHelperBottom="Balance" Unit="NEAR"
                                            isFormHelper={true}/>
                                <SmallArrow style={{margin: "5px 0 5px 0"}}/>
                                <InputField FormHelperTop="AND BOND" Unit="bNEAR"/>
                            </InputContainer>

                            <PriceTextContainer>
                                <p>PRICE</p>
                                <p>{exchangeRate}</p>
                            </PriceTextContainer>
                            <CompleteModal>BURN</CompleteModal>
                        </>
                    }
                </SecondCardContainer>
            </CardSideContainer>
        </Container>
    );
}

export default Basset;