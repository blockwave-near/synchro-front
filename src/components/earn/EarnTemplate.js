import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {styled as styleds} from "@mui/material/styles"
import {ReactComponent as LinkMark} from "assets/Link.svg";
import {ReactComponent as Graph} from "assets/DummyGraph.svg";
import {ReactComponent as Protect} from "assets/ProtectIcon.svg";
import {ReactComponent as Dollar} from "assets/DollarIcon.svg";
import {Link} from 'react-router-dom';
import ButtonIcon from "components/common/ButtonIcon";
import CommonButton from "../common/CommonButton";
import Chip from "../common/Chip";
import SegmentedControl from "../common/SegmentedControl";

const StyledLink = styled(LinkMark)`
  margin: 0 0 7px 5px;
  vertical-align: bottom;
`;

const EarnButton = styleds(CommonButton)`
    background-color: #FFFFFF;
    color: #8070FF;
    width: 240px;
    
    &:hover {
        color: #FFFFFF;
    }
`;

const Container = styled.div`
  width: 100%;
  min-width: 1240px;
  padding: 35px 45px 114px 45px;
`;

const CardSideContainer = styled.div`
  height: 320px;
  display: flex;
  margin-top: 21px;
`

const SecondCardSideContainer = styled.div`
  height: 440px;
  display: flex;
  margin-top: 30px;
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

const HighlightNumber = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: end;

  font-weight: 700;
  font-size: 60px;
  color: #8070FF;

  a {
    margin-bottom: 5px;
    font-weight: 700;
    font-size: 36px;
    color: #8070FF;
  }
`;

const MainCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  padding: 60px 40px 30px 40px;
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
    font-weight: 700;
    font-size: 60px;
    color: #222222;
  }
`;

const SecondCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  width: 50%;
  height: 100%;
  padding: 60px 40px 30px 40px;
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
    font-weight: 700;
    font-size: 60px;
    color: #222222;
  }
`;

const SecondCardOne = styled.div`
  width: 30%;
  height: 100%;
  padding: 60px 40px;
  display: flex;
  flex-direction: column;
  background: #222222;
  box-shadow: 0 4px 10px rgba(91, 78, 230, 0.25);
  border-radius: 20px;

  p {
    font-weight: 500;
    font-size: 18px;
    color: #C4C4C4;
  }
`;

const SecondCardTwo = styled.div`
  margin-left: 30px;
  width: 70%;
  height: 100%;
  padding: 30px;
  align-items: start;
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  box-shadow: 0 4px 10px rgba(91, 78, 230, 0.25);
  border-radius: 20px;
  position: relative;

  p {
    font-weight: 500;
    font-size: 18px;
    color: #777777;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Row = styled.div`
  display: flex;
  justify-content: ${props => props.center ? 'center' : 'start'};
  align-items: ${props => props.end ? 'end' : 'start'};
  width: 100%;
  flex-direction: row;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${props => props.center ? 'center' : 'start'};
  width: max-content;
  height: max-content;
`;

const Spacer = styled.div`margin-right: auto`;
const TopSpacer = styled.div`margin-bottom: auto`;

const SizeBox = styled.div`
  width: ${props => `${props.w ?? 0}px`};
  height: ${props => `${props.h ?? 0}px`};
`;

function Earn() {
    const [sPrice, setSPrice] = useState(1427);
    const [totalDeposit, setTotalDeposit] = useState(1427);

    const handleConnectWallet = () => {
        console.log('ConnectWallet Button Click');
    };

    useEffect(() => {
        // 새로고침마다 변수 값 리로딩 하는 함수 넣으시면 됩니다.
    });

    return (
        <Container>
            <ButtonContainer>
                <ButtonIcon onClick={handleConnectWallet}>Connect Wallet</ButtonIcon>
            </ButtonContainer>

            <TitleTextContainer>
                Earn
                <p>Docs</p>
                <Link to="/">
                    <StyledLink/>
                </Link>

                <Spacer/>
                <EarnButton>
                    <Protect/>
                    <SizeBox w={5}/>
                    Protect Your Deposit
                </EarnButton>
                <SizeBox w={12}/>
                <EarnButton>
                    <Dollar/>
                    <SizeBox w={5}/>
                    Buy USDT
                </EarnButton>
            </TitleTextContainer>

            <CardSideContainer>
                <MainCardContainer>
                    <p>Total Deposit</p>

                    <Row center={false} end={true}>
                        <number>
                            {'1,427'}
                        </number>
                        <SizeBox w={6}/>
                        <p>
                            USDT
                        </p>
                    </Row>

                    <TopSpacer/>
                    <Row style={{justifySelf: 'end', alignSelf: 'end'}}>
                        <Spacer/>
                        <CommonButton back={false}>
                            Deposit
                        </CommonButton>

                        <SizeBox w={30}/>
                        <CommonButton back={false}>
                            Withdraw
                        </CommonButton>
                    </Row>
                </MainCardContainer>
                <SecondCardContainer>
                    <p>Expected Interest</p>

                    <SizeBox h={10}/>
                    <Row center={false} end={true}>
                        <SizeBox w={30}/>
                        <number>
                            {'42'}
                        </number>
                        <SizeBox w={6}/>
                        <p>
                            USDT
                        </p>
                    </Row>

                    <TopSpacer/>
                    <SegmentedControl>
                        YEAR
                        MONTH
                        WEEK
                        DAY
                    </SegmentedControl>
                </SecondCardContainer>
            </CardSideContainer>

            <SecondCardSideContainer>
                <SecondCardOne>
                    <p>
                        Interest
                    </p>

                    <SizeBox h={100}/>
                    <Col center={true} style={{width: '100%'}}>
                        <Chip black={true}>
                            APY
                        </Chip>
                    </Col>

                    <SizeBox h={10}/>
                    <HighlightNumber>
                        {19.33}<a>%</a>
                    </HighlightNumber>

                </SecondCardOne>

                <SecondCardTwo>
                    <p>
                        Interest Graph
                    </p>

                    <SizeBox h={50}/>
                    <Row>
                        <SizeBox w={10}/>
                        <Graph/>
                    </Row>
                </SecondCardTwo>
            </SecondCardSideContainer>
        </Container>
    );
}

export default Earn;