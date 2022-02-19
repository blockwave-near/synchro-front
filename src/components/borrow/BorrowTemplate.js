import React, {useState} from "react";
import styled from "styled-components";
import {ReactComponent as LinkMark} from "assets/Link.svg";
import {ReactComponent as Liquidation} from "assets/Liquidation.svg";
import {Link} from 'react-router-dom';
import CommonButton from "components/common/CommonButton";
import ButtonIcon from "../common/ButtonIcon";
import BorrowBoard from "./borrowBoard";

const StyledLink = styled(LinkMark)`
  margin: 0 0 7px 5px;
  vertical-align: bottom;
`;

const ButtonContainer = styled('div')`
  display: flex;
  justify-content: flex-end;
`;

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
  margin: 45px 0 0 25px;
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

const FirstLineContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const MainCardContainer = styled.div`
  width: 100%;
  height: 50%;
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


function BorrowTemplate() {
    const [collateralValue, setCollateralValue] = useState('5,691.595');
    const [borrowedValue, setBorrowedValue] = useState(2127)

    const handleConnectWallet = () => {
        console.log('ConnectWallet Button Click');
    };

    return (
        <Container>
            <ButtonContainer>
                <ButtonIcon onClick={handleConnectWallet}>Connect Wallet</ButtonIcon>
            </ButtonContainer>

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
                        <CommonButton back={true}>Provide</CommonButton>
                        <CommonButton back={true}>Withdraw</CommonButton>
                    </ButtonContainer>
                </FirstLineContainer>

                <CardContainer>
                    <BorrowBoard>{collateralValue}</BorrowBoard>
                    <BorrowBoard>{borrowedValue}</BorrowBoard>
                </CardContainer>
            </MainCardContainer>

        </Container>
    );
}

export default BorrowTemplate;