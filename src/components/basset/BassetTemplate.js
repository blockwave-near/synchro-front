import React, {useState} from "react";
import styled from "styled-components";
import {ReactComponent as LinkMark} from "assets/Link.svg";
import {ReactComponent as Near} from "assets/Near.svg";
import {ReactComponent as BNear} from "assets/bNear.svg";
import {ReactComponent as Arrow} from "assets/Arrow.svg";
import {ReactComponent as SmallArrow} from "assets/SmallArrow.svg";
import {Link} from 'react-router-dom';
import Button from "components/common/Button";
import ButtonIcon from "components/common/ButtonIcon";
import SegmentedControl from "components/common/SegmentedControl";
import InputField from "components/common/InputField";

const MintButton = styled(Button)`
  margin: 30px 0 0 0;
  width: 250px;
  height: 72px;
  font-size: 21px;
  background: #222222;
  border-radius: 100px;
`;

const StyledLink = styled(LinkMark)`
  margin: 0 0 7px 5px;
  vertical-align: bottom;
`;

const Container = styled.div`
  width: 100%;
  padding: 35px 45px 114px 45px;
`;

const CardContainer = styled.div`
  width: 34.5%;
  display: flex;
  flex-direction: column;
`;

const CardSideContainer = styled.div`
  height: 100%;
  display: flex;
`

const TitleTextContainer = styled.div`
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


const MainCardContainer = styled.div`
  width: 100%;
  height: 50%;
  //height: 360px;
  padding: 60px 40px 36px 40px;
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

const SecondCardContainer = styled.div`
  margin-left: 30px;
  width: 63%;
  height: 97%;
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

const ButtonContinaer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const NearIconContainer = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: #222222;
  display: flex;
  flex-direction: column;
`;

const NearFlowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 30px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`

const PriceTextContainer = styled.div`
  font-weight: 500;
  font-size: 14px;
  color: #222222;
  text-align: right;
  margin-top: 55px;
  width: 80%;
  display: flex;
  justify-content: space-between;
`


function Basset() {
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
                    </MainCardContainer>
                    <MainCardContainer style={{marginTop: "30px"}}>
                        <p>Withdrawable NEAR</p>
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

                            <MintButton onClick={handleMint}>MINT</MintButton>
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

                            <MintButton onClick={handleMint}>BOND</MintButton>
                        </>
                    }
                </SecondCardContainer>
            </CardSideContainer>
        </Container>
    );
}

export default Basset;