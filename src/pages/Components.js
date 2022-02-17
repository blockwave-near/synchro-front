import React from 'react';
import styled from 'styled-components';
import {createTheme} from "@mui/material";
import ButtonIcon from "components/common/ButtonIcon";
import Chip from "components/common/Chip";
import SegmentedControl from "components/common/SegmentedControl";
import TransitionAlerts from "components/alert/Alert";
import Slider from "components/common/Slider";
import Card from "components/borrow/borrowBoard";
import DepositModal from "components/common/modal/DepositModal";
import InputField from "components/common/InputField";

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin-left: 30px;
`;

function Components() {
    return (
        <Container>
            <ButtonIcon>Connect Wallet</ButtonIcon>
            <Chip>Tag</Chip>
            <SegmentedControl>
                Mint
                Burn
                test22
                test3
            </SegmentedControl>
            <Slider/>
            <TransitionAlerts>bAssets that have been transferred to Terra through Wormhole (e.g. webETH)
                must go
                through the convert operation to be used as collateral on Anchor. </TransitionAlerts>
            <Card>2127</Card>
            <DepositModal/>
            <InputField/>
        </Container>
    );
}

export default Components;
