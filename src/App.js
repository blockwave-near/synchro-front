import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Sidebar from './components/common/Sidebar';
// import Button from "./components/common/Button";
import ButtonIcon from "./components/common/ButtonIcon";
import Chip from "components/common/Chip";
import SegmentedControl from "./components/common/SegmentedControl";
import UnstyledSlider from "./components/common/Slider";

const Container = styled.div`
  //width: 100%;
  //height: 100%;
  display: flex;
  flex-direction: row;
`;

const Center = styled.div`
  height: 92vh;
  display: flex;
  flex-direction: row;
`

function App() {
  return (
        <BrowserRouter>
            <Center>
                <Sidebar/>
                <ButtonIcon>Connect Wallet</ButtonIcon>
                <Chip>Tag</Chip>
                <SegmentedControl/>
                <UnstyledSlider/>

                {/*<Switch>*/}
                {/*    <Route path={}></Route>*/}
                {/*</Switch>*/}
            </Center>
        </BrowserRouter>
  );
}

export default App;
