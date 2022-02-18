import React, {useState} from "react";
import styled from "styled-components";
import {ReactComponent as LinkMark} from "assets/Link.svg";
import {Link} from 'react-router-dom';
import ButtonIcon from "components/common/ButtonIcon";

const StyledLink = styled(LinkMark)`
  margin: 0 0 7px 5px;
  vertical-align: bottom;
`;

const Container = styled.div`
  width: 100%;
  padding: 35px 45px 114px 45px;
`;

const CardSideContainer = styled.div`
  height: 390px;
  display: flex;
  margin-top: 21px;
`

const CardContainer = styled.div`
  width: 33%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

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
  height: 100%;
  //height: 360px;
  padding: 40px 40px 36px 40px;
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
  width: 33%;
  height: 100%;
  //height: 750px;
  padding: 44px 105px 38px 105px;
  align-items: center;
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  box-shadow: 0 4px 10px rgba(91, 78, 230, 0.25);
  border-radius: 20px;

  p {
    font-weight: 500;
    font-size: 18px;
    color: #777777;
  }
`;

const ThirdCardContainer = styled.div`
  margin-left: 30px;
  width: 33%;
  height: 100%;
  //height: 750px;
  padding: 44px 105px 38px 105px;
  align-items: center;
  display: flex;
  flex-direction: column;
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

function Govern() {
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
                Governance
                <p>Docs</p>
                <Link to="/">
                    <StyledLink/>
                </Link>
            </TitleTextContainer>

            <CardSideContainer>
                <CardContainer>
                    <MainCardContainer>
                        <p>SYNC Price</p>
                    </MainCardContainer>
                    <MainCardContainer style={{marginTop: "30px"}}>
                        <p>Total Staked</p>
                    </MainCardContainer>
                </CardContainer>

                <SecondCardContainer>

                </SecondCardContainer>

                <ThirdCardContainer>

                </ThirdCardContainer>
            </CardSideContainer>
        </Container>
    );
}

export default Govern;