import React, {useState, useEffect, useRef} from "react";
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
import {login, logout} from "../../utils";
import {utils} from 'near-api-js';

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
  height: 750px;
  display: flex;
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

const AccountIdTextContainer = styled('div')`
  width: 100%;
  margin: 5px 0 0 0px;
  font-weight: 500;
  font-size: 15px;
  color: #222222;
  display: flex;
  justify-content: flex-end;
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
  margin-top: 90px;
  justify-content: right;
`

const MintButton = styled(CommonButton)`
  margin: 30px 0 0 0;
  width: 250px;
  height: 72px;
  font-size: 21px;
  background: #222222;
  border-radius: 100px;
`;

function Basset() {
    const [stakeAccount, setStakeAccount] = useState({});
    const [segmentedValue, setSegmentedValue] = useState('MINT');
    const [nearBalance, setNearBalance] = useState('0');
    const [bNearBalance, setBNearBalance] = useState('0');
    // const [exchangeRate, setExchangeRate] = useState('0.99999 bNEAR per NEAR');
    const mintRef = useRef();
    const burnRef = useRef();

    const getNearBalance = async () => {
      let yocto = (await window.account.getAccountBalance()).available;
      let value = parseFloat(utils.format.formatNearAmount(yocto)).toFixed(3);
      setNearBalance(value);
      // console.log(value)
    }

    const getBNearBalance = async () => {
      let yocto = await window.bnearToken.ft_balance_of({account_id: window.accountId})
      let value = parseFloat(utils.format.formatNearAmount(yocto)).toFixed(3);
      setBNearBalance(value);
      // console.log(value)
    }

    const getStakeAccount = async () => {
      setStakeAccount(await window.bnearStaking.get_account({account_id: window.accountId}))
    }

    const getSegmentedValue = (value) => {
        setSegmentedValue(value);
        // console.log(value)
    }

    const handleConnectWallet = () => {
        login();
        // console.log('ConnectWallet Button Click');
    };

    const handleDisconnectWallet = () => {
      logout();
      // console.log('Disconnect Button Click');
    };

    const handleReward = async () => {
      await window.bnearStaking.unstake_reward({}, "300000000000000", 1);
    }

    const handleWithdraw = async () => {
      await window.bnearStaking.withdraw_all({}, "300000000000000", 1);
    }

    const handleMint = async () => {
      const amount = mintRef.current.value;

      window.bnearStaking.deposit_and_stake({}, "300000000000000", utils.format.parseNearAmount(amount))
        .then(() => window.modalOpen = true);
      // console.log('Mint Button Click');
    }

    const handleBurn = async () => {
      const amount = burnRef.current.value;

      await window.bnearStaking.unstake({amount: utils.format.parseNearAmount(amount)}, "300000000000000", 1);
      // console.log('Burn Button Click');
    }

    useEffect(async () => {
        // in this case, we only care to query the contract when signed in
        if (window.walletConnection.isSignedIn()) {
          getNearBalance();
          getBNearBalance();
          getStakeAccount();
        }
      },
      []
    );
    return (
        <Container>
        {window.walletConnection.isSignedIn() ?
          <>
          <ButtonContinaer>
            <ButtonIcon onClick={handleDisconnectWallet}>Disconnect</ButtonIcon>
          </ButtonContinaer>
          <AccountIdTextContainer>
            Account ID: {window.accountId}
          </AccountIdTextContainer>
          </>
          :
          <ButtonContinaer>
            <ButtonIcon onClick={handleConnectWallet}>Connect Wallet</ButtonIcon>
          </ButtonContinaer>
        }

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
                        <p>Total Staked NEAR</p>
                        <Row center={false} end={true}>
                            <number>
                                {parseFloat(utils.format.formatNearAmount(stakeAccount.staked_balance)).toFixed(3)}
                            </number>
                            <SizeBox w={6}/>
                            <p>
                                NEAR
                            </p>
                        </Row><br/>
                        <p>Rewards</p>
                        <Row center={false} end={true}>
                            <number>
                                {parseFloat(utils.format.formatNearAmount(stakeAccount.stake_reward)).toFixed(3)}
                            </number>
                            <SizeBox w={6}/>
                            <p>
                                NEAR
                            </p>
                        </Row>
                        <CardButtonContainer>
                            <CommonButton 
                              back={true} 
                              onClick={handleReward}
                              disabled={stakeAccount.stake_reward === '0'}
                            >
                            Unstake Rewards
                            </CommonButton>
                        </CardButtonContainer>

                    </MainCardContainer>
                    <MainCardContainer style={{marginTop: "30px"}}>
                        <p>Unstaked NEAR</p>
                        <Row center={false} end={true}>
                            <number>
                                {parseFloat(utils.format.formatNearAmount(stakeAccount.unstaked_balance)).toFixed(3)}
                            </number>
                            <SizeBox w={6}/>
                            <p>
                                NEAR
                            </p>
                        </Row>
                        <CardButtonContainer>
                            <CommonButton 
                              back={true} 
                              onClick={handleWithdraw}
                              disabled={!stakeAccount.can_withdraw || stakeAccount.unstaked_balance === '0'}
                            >
                              {stakeAccount.can_withdraw ? <>Withdraw</> : <>Pending</>}
                            </CommonButton>
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
                                <InputField 
                                  FormHelperTop="I WANT TO BOND" 
                                  FormHelperBottom="Balance" 
                                  Unit="NEAR"
                                  isFormHelper={true}  
                                  Balance={nearBalance}
                                  inputRef={mintRef}
                                />
                                {/* <SmallArrow style={{margin: "5px 0 5px 0"}}/>
                                <InputField FormHelperTop="AND MINT" Unit="bNEAR"/> */}
                            </InputContainer>

                            {/* <PriceTextContainer>
                                <p>PRICE</p>
                                <p>{exchangeRate}</p>
                            </PriceTextContainer> */}

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
                                <InputField 
                                  FormHelperTop="I WANT TO UNBOND" 
                                  FormHelperBottom="Balance" 
                                  Unit="bNEAR"
                                  isFormHelper={true} 
                                  Balance={bNearBalance}
                                  inputRef={burnRef}
                                />
                                {/* <SmallArrow style={{margin: "5px 0 5px 0"}}/>
                                <InputField FormHelperTop="AND UNBOND" Unit="NEAR"/> */}
                            </InputContainer>

                            {/* <PriceTextContainer>
                                <p>PRICE</p>
                                <p>{exchangeRate}</p>
                            </PriceTextContainer> */}

                            <MintButton style={{alignSelf: 'end'}} onClick={handleBurn}>BURN</MintButton>
                        </>
                    }
                </SecondCardContainer>
            </CardSideContainer>
        </Container>
    );
}

export default Basset;