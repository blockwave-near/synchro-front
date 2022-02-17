import React, {useState} from "react";
import styled from "styled-components";
import {ReactComponent as LinkMark} from "assets/Link.svg";
import {Link} from 'react-router-dom';
import Button from "components/common/Button";
import ButtonIcon from "components/common/ButtonIcon";
import SegmentedControl from "components/common/SegmentedControl";

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

// const CardTextContainer = styled.div`
//   font-weight: 700;
//   font-size: 60px;
//   display: flex;
//   align-items: flex-end;
//   color: #222222;
//
//   p {
//     font-weight: 500;
//     font-size: 18px;
//     color: #777777;
//   }
// `;

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
`

const ButtonContinaer = styled.div`
  display: flex;
  justify-content: flex-end;
`


function Basset() {
    const [segmentedValue, setSegmentedValue] = useState('');

    const getSegmentedValue = (value) => {
        setSegmentedValue(value);
    }

    const handleConnectWallet = () => {
        console.log('ConnectWallet Button Click')
    };

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


                </SecondCardContainer>
            </CardSideContainer>


        </Container>
    );
}

export default Basset;