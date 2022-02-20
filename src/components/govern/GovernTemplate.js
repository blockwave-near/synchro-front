import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {ReactComponent as LinkMark} from "assets/Link.svg";
import {ReactComponent as Synchro} from "assets/Synchro.svg";
import {ReactComponent as USDT} from "assets/USDT.svg";
import {Link} from 'react-router-dom';
import ButtonIcon from "components/common/ButtonIcon";
import CommonButton from "../common/CommonButton";
import Chip from "../common/Chip";
import LinePercent from "../common/LinePercent";
import {login, logout} from "../../utils";

const StyledLink = styled(LinkMark)`
  margin: 0 0 7px 5px;
  vertical-align: bottom;
`;

const Container = styled.div`
  width: 100%;
  min-width: 1240px;
  padding: 35px 45px 114px 45px;
`;

const CardSideContainer = styled.div`
  height: 350px;
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

const SubTitleTextContainer = styled.div`
  width: 100%;
  margin-left: 25px;
  font-weight: 700;
  font-size: 24px;
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

const AccountIdTextContainer = styled('div')`
  width: 100%;
  margin: 5px 0 0 0px;
  font-weight: 500;
  font-size: 15px;
  color: #222222;
  display: flex;
  justify-content: flex-end;
`;

const Number = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;

  color: #222222;
  font-weight: 700;
  font-size: 32px;
  color: #222222;

  p {
    margin-bottom: 5px;
    font-weight: 500;
    font-size: 18px;
  }
`;

const MainCardContainer = styled.div`
  width: 100%;
  height: 100%;
  //height: 360px;
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
    font-weight: 700;
    font-size: 60px;
    color: #222222;
  }
`;

const SecondCardContainer = styled.div`
  margin-left: 30px;
  width: 33%;
  height: 100%;
  padding: 30px;
  align-items: center;
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  box-shadow: 0 4px 10px rgba(91, 78, 230, 0.25);
  border-radius: 20px;

  p {
    font-weight: 700;
    font-size: 18px;
    color: #222222;
  }
`;

const ThirdCardContainer = styled.button`
  margin-left: 30px;
  width: 33%;
  height: 100%;
  padding: 30px;
  align-items: center;
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  box-shadow: 0 4px 10px rgba(91, 78, 230, 0.25);
  border-radius: 20px;
  transition: box-shadow 200ms ease-in-out;
  
  cursor: pointer;

  p {
    font-weight: 700;
    font-size: 18px;
    color: #222222;
  }
  
  &:hover {
    box-shadow: 0 4px 10px rgba(91, 78, 230, 0.6);
  }
`;

const PollContainer = styled.div`
  display: flex;
  width: 101%;
  height: max-content;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 5px;
`;

const PollCardContainer = styled.div`
  width: 48%;
  margin-left: ${props => props.even ? '30px' : '0px'};
  margin-top: 20px;
  height: max-content;
  padding: 40px 47px;
  align-items: start;
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  box-shadow: 0 4px 10px rgba(91, 78, 230, 0.25);
  border-radius: 20px;
  white-space: nowrap;
  
  cursor: pointer;
  transition: box-shadow 200ms ease-in-out;

  &:hover {
    box-shadow: 0 4px 10px rgba(91, 78, 230, 0.6);
  }
  
  h1 { // title
    white-space: pre-wrap;
    font-weight: 700;
    font-size: 24px;
    color: #222222;
  }

  h2 { // subTitle
    font-weight: 700;
    font-size: 14px;
    color: #222222;
  }

  h3 { // text
    font-weight: 600;
    font-size: 14px;
    color: #777777;
  }

  h4 { // sub text
    font-weight: 600;
    font-size: 12px;
    color: #777777;
  }

  h5 { // time
    font-weight: 500;
    font-size: 12px;
    color: #C4C4C4;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const SynchroUSDT = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;
  position: relative;
`;

const USDTIn = styled(USDT)`
  position: absolute;
  left: 76px;
  top: 20px;
  z-index: 10000;
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
  align-items: center;
  width: max-content;
  height: max-content;
`;

const Spacer = styled.div`margin-right: auto`;

const SizeBox = styled.div`
  width: ${props => `${props.w ?? 0}px`};
  height: ${props => `${props.h ?? 0}px`};
`;

const pollList = [
    {
        state: "In Progress",
        title: "Redirect portion of borrower incentives SYNC-LP Rewards",
        rate: 40,
        end_time: "Sun, Feb 13, 2022, 8:29:13 AM"
    },
    {
        state: "In Progress",
        title: "Redirect portion of borrower incentives SYNC-LP Rewards",
        rate: 20,
        end_time: "Sun, Feb 13, 2022, 8:29:13 AM"
    },
    {
        state: "In Progress",
        title: "Redirect portion of borrower incentives SYNC-LP Rewards",
        rate: 54,
        end_time: "Sun, Feb 13, 2022, 8:29:13 AM"
    },
    {
        state: "In Progress",
        title: "Redirect portion of borrower incentives SYNC-LP Rewards",
        rate: 12,
        end_time: "Sun, Feb 13, 2022, 8:29:13 AM"
    },
    {
        state: "In Progress",
        title: "Redirect portion of borrower incentives SYNC-LP Rewards",
        rate: 86,
        end_time: "Sun, Feb 13, 2022, 8:29:13 AM"
    },
];

function Govern() {
    const [sPrice, setSPrice] = useState(1427);
    const [totalStaked, setTotalStaked] = useState(0);
    const [stakeAPR, setStakeAPR] = useState(26.77);
    const [pairStakeAPR, setPairStakeAPR] = useState(51.76);
    const [pairTotalStaked, setPairTotalStaked] = useState(54.22);

    const handleConnectWallet = () => {
        login();
        // console.log('ConnectWallet Button Click');
    };

    const handleDisconnectWallet = () => {
        logout();
        // console.log('Disconnect Button Click');
    };

    useEffect(() => {
       // 새로고침마다 변수 값 리로딩 하는 함수 넣으시면 됩니다.
    });

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
                        <Row center={false} end={true}>
                            <number>
                                {'1,427'}
                            </number>
                            <SizeBox w={6}/>
                            <p>
                                USDT
                            </p>
                        </Row>
                    </MainCardContainer>
                    <MainCardContainer style={{marginTop: "30px"}}>
                        <p>Total Staked</p>
                        <Row center={false} end={true}>
                            <number>
                                {'82.38M'}
                            </number>
                            <SizeBox w={6}/>
                            <p>
                                SYNC
                            </p>
                        </Row>
                    </MainCardContainer>
                </CardContainer>

                <SecondCardContainer>
                    <Synchro/>

                    <SizeBox h={5}/>
                    <p>SYNC</p>

                    <SizeBox h={22}/>
                    <Chip>APR</Chip>

                    <SizeBox h={5}/>
                    <Number>
                        {26.77}<p>%</p>
                    </Number>

                    <SizeBox h={34}/>
                    <Row center={true}>
                        <CommonButton back={true}>
                            Trade SYNC
                        </CommonButton>
                        <SizeBox w={30}/>
                        <CommonButton back={true}>
                            Gov Stake
                        </CommonButton>
                    </Row>
                </SecondCardContainer>

                <ThirdCardContainer>
                    <SynchroUSDT>
                        <Synchro/>
                        <USDTIn/>
                    </SynchroUSDT>

                    <SizeBox h={5}/>
                    <p>SYNC-USDT LP</p>

                    <SizeBox h={80}/>
                    <Row center={true}>
                        <Col>
                            <Chip>
                                APR
                            </Chip>
                            <SizeBox h={5}/>
                            <Number>
                                {51.76}<p>%</p>
                            </Number>
                        </Col>
                        <SizeBox w={40}/>
                        <Col>
                            <Chip>
                                APR
                            </Chip>
                            <SizeBox h={5}/>
                            <Number>
                                {'54.22M'}
                            </Number>
                        </Col>
                    </Row>
                </ThirdCardContainer>
            </CardSideContainer>

            <SizeBox h={60}/>
            <Row>
                <SubTitleTextContainer>
                    Polls
                </SubTitleTextContainer>
                <Spacer/>
                <CommonButton>
                    Create Poll
                </CommonButton>
            </Row>

            <PollContainer>
                {pollList.map((value, index) => {
                    return <PollCardContainer even={(index + 1) % 2 == 0}>
                        <Row>
                            <h3>
                                {value.state}
                            </h3>
                            <Spacer/>
                            <h2>
                                TEXT
                            </h2>
                        </Row>

                        <SizeBox h={20}/>
                        <h1>
                            {value.title}
                        </h1>

                        <SizeBox h={30}/>
                        <LinePercent per={value.rate}/>

                        <SizeBox h={10}/>
                        <h4>
                            Voted
                        </h4>

                        <SizeBox h={25}/>
                        <Row center={false}>
                            <h4>
                                Estimated end time
                            </h4>
                            <SizeBox w={10}/>
                            <h5>
                                {value.end_time}
                            </h5>
                        </Row>
                    </PollCardContainer>
                })}
                <SizeBox h={100}/>
                <SizeBox h={100}/>
            </PollContainer>
        </Container>
    );
}

export default Govern;