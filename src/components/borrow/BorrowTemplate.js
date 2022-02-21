import React, {useState} from "react";
import styled from "styled-components";
import {ReactComponent as LinkMark} from "assets/Link.svg";
import {ReactComponent as BNear} from "assets/bNear.svg";
import {ReactComponent as Liquidation} from "assets/Liquidation.svg";
import {Link} from 'react-router-dom';
import ButtonIcon from "components/common/ButtonIcon";
import BorrowBoard from "./borrowBoard";
import SecondBorrowBoard from "./SecondBorrowBoard";
import TransitionAlerts from "components/alert/Alert";
import ProvideCollateralModal from "../common/modal/ProvideCollateralModal";
import WithdrawCollateralModal from "../common/modal/WithdrawCollateralModal";
import {login, logout} from "../../utils";

const SizeBox = styled.div`
  width: ${props => `${props.w ?? 0}px`};
  height: ${props => `${props.h ?? 0}px`};
`;

const StyledLink = styled(LinkMark)`
  margin: 0 0 7px 5px;
  vertical-align: bottom;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CardButtonContainer = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
`

const StyledLiquidation = styled(Liquidation)`
  margin-right: 5px;
`

const Container = styled.div`
  width: 100%;
  padding: 45px;
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TitleTextContainer = styled.div`
  width: 100%;
  margin: 25px 0 0 25px;
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

const SubTextContainer = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: #5B4EE6;
  display: flex;
  align-items: flex-end;
  white-space: nowrap;
  margin-right: 23px;
`;

const AccountIdTextContainer = styled('div')`
  width: 100%;
  margin: 5px 0 0 0px;
  font-weight: 500;
  font-size: 15px;
  color: #222222;
  display: flex;
  justify-content: flex-end;
`;

const FirstLineContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const MainCardContainer = styled.div`
  width: 100%;
  height: max-content;
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

const CardContainer = styled.div`
  display: flex;
  margin-top: 33px;
`

const ValueCircle = styled.div`
  margin-top: 25px;
  font-size: 10px;
  //width: 50%;
  width: 180px;
  height: 50px;
  padding: 9px 35px 9px 35px;
  display: flex;
  flex-direction: column;
  color: #C4C4C4;
  background: #4B4B62;
  border-radius: 25px;
  align-items: flex-end;

  p {
    margin-top: 2px;
    display: block;
    font-weight: 500;
    font-size: 14px;
    color: #FFFFFF;

    type {
      font-size: 12px;
    }
  }

  & + & {
    margin-left: 20px;
  }
`

const CircleContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

const SecondMainCardContainer = styled.div`
  width: 100%;
  height: max-content;
  font-size: 18px;
  font-weight: 700;
  color: #222222;
  padding: 60px 40px 36px 40px;
  margin-top: 21px;
  background: #FFFFFF;
  box-shadow: 0 4px 10px rgba(91, 78, 230, 0.25);
  border-radius: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;

  p {
    font-weight: 500;
    font-size: 18px;
    color: #777777;
  }
`;

const SecondCardTextContainer = styled.div`
  margin-top: 15px;
  font-weight: 500;
  font-size: 14px;
  color: #777777;
  width: 100%;
  display: flex;
  justify-content: space-between;

  type {
    margin-right: 5px; 
    font-weight: 700;
    font-size: 18px;
    color: #222222;
  }
`

const CardTextContainer = styled.div`
  margin-top: 43px;
`

const Box = styled.div`
    height: 50px;
`;

function BorrowTemplate() {
    const [collateralValue, setCollateralValue] = useState('5,691.595');
    const [borrowedValue, setBorrowedValue] = useState(2127);
    const [netaprValue, setNetaprValue] = useState(19);
    const [borrowAprValue, setBorrowAprValue] = useState(11.8);
    const [distributionAprValue, setDistributionAprValue] = useState(9.67);
    const [borowedUSDT, setBorowedUSDT] = useState(0);
    const [price, setPrice] = useState('55,382')
    const [provided, setProvided] = useState(0)

    const handleConnectWallet = () => {
        login();
        // console.log('ConnectWallet Button Click');
    };

    const handleDisconnectWallet = () => {
        logout();
        // console.log('Disconnect Button Click');
    };

    return (
        <Container>
            {window.walletConnection.isSignedIn() ?
                <>
                    <ButtonContainer>
                        <ButtonIcon onClick={handleDisconnectWallet}>Disconnect</ButtonIcon>
                    </ButtonContainer>
                    <AccountIdTextContainer>
                        Account ID: {window.accountId}
                    </AccountIdTextContainer>
                </>
                :
                <ButtonContainer>
                    <ButtonIcon onClick={handleConnectWallet}>Connect Wallet</ButtonIcon>
                </ButtonContainer>
            }

            <TextContainer>
                <TitleTextContainer>
                    Borrow
                    <p>Docs</p>
                    <Link to="/">
                        <StyledLink/>
                    </Link>
                </TitleTextContainer>
                <SubTextContainer>
                    <StyledLiquidation/>
                    Participate in Liquidations
                </SubTextContainer>
            </TextContainer>

            <MainCardContainer>
                <FirstLineContainer>
                    <p>Position Management</p>
                    <ButtonContainer>
                        <ProvideCollateralModal btnColor={true} Balance={30}/>
                        <SizeBox w={30}/>
                        {/*<CommonButton back={true}>Provide</CommonButton>*/}
                        <WithdrawCollateralModal btnColor={true} Balance={50}/>
                        {/*<CommonButton back={true}>Withdraw</CommonButton>*/}
                    </ButtonContainer>
                </FirstLineContainer>

                <CardContainer>
                    <BorrowBoard sign="$" title="Collateral Value"
                                 valuePosition="front">{collateralValue} </BorrowBoard>
                    <BorrowBoard sign="$" title="Borrowed Value" valuePosition="front">{borrowedValue}
                        <CircleContainer>
                            <ValueCircle>
                                Borrowed
                                <p>{borowedUSDT}
                                    <type> USDT</type>
                                </p>
                            </ValueCircle>
                        </CircleContainer>
                    </BorrowBoard>
                    <SecondBorrowBoard sign="%" title="NET APR">{netaprValue}
                        <CircleContainer>
                            <ValueCircle>
                                Borrow APR
                                <p>{borrowAprValue}</p>
                            </ValueCircle>
                            <ValueCircle>
                                Distribution APR
                                <p>{distributionAprValue}</p>
                            </ValueCircle>
                        </CircleContainer>
                    </SecondBorrowBoard>
                </CardContainer>
            </MainCardContainer>

            <SecondMainCardContainer>
                <BNear/>
                bNEAR
                <CardTextContainer>
                    <SecondCardTextContainer>
                        <p>Price</p>
                        <p>
                            <type>{price}</type>
                            USDT
                        </p>
                    </SecondCardTextContainer>
                    <SecondCardTextContainer>
                        <p>Provided</p>
                        <p>
                            <type>{provided}</type>
                            USDT
                        </p>
                    </SecondCardTextContainer>

                    <CardButtonContainer>
                        <ProvideCollateralModal Balance={20}/>
                        <SizeBox w={30}/>
                        <WithdrawCollateralModal Balance={50}/>
                    </CardButtonContainer>
                </CardTextContainer>
                <Box/>
            </SecondMainCardContainer>
            {/*<TransitionAlerts>bAssets that have been transferred to Terra through Wormhole (e.g. webETH)*/}
            {/*    must go*/}
            {/*    through the convert operation to be used as collateral on Anchor. </TransitionAlerts>*/}

            <Box/>
        </Container>
    );
}

export default BorrowTemplate;