import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Sidebar from './components/common/Sidebar';
import ButtonIcon from "./components/common/ButtonIcon";
import Chip from "components/common/Chip";
import SegmentedControl from "./components/common/SegmentedControl";
import TransitionAlerts from "./components/alert/Alert";
import Slider from "./components/common/Slider";
import Card from "./components/borrow/borrowBoard";
import Modal from "./components/common/modal/Modal";
import InputField from "./components/common/InputField";

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin-left: 30px;
`;

const Center = styled.div`
  height: 92vh;
  width: 100%;
  display: flex;
  flex-direction: row;
`

function App() {
  return (
        <BrowserRouter>
            <Center>
                <Sidebar/>
                <Container>
                    <ButtonIcon>Connect Wallet</ButtonIcon>
                    <Chip>Tag</Chip>
                    <SegmentedControl>
                        Mint
                        Burn
                        test2
                        test3
                    </SegmentedControl>
                    <Slider/>
                    <TransitionAlerts>bAssets that have been transferred to Terra through Wormhole (e.g. webETH) must go through the convert operation to be used as collateral on Anchor. </TransitionAlerts>
                    <Card>2127</Card>
                    <Modal/>
                    <InputField/>
                </Container>

                {/*<Switch>*/}
                {/*    <Route path={}></Route>*/}
                {/*</Switch>*/}
            </Center>
        </BrowserRouter>
  );
}

export default App;
