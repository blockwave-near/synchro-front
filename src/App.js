import React from 'react';
import styled from 'styled-components';
import * as Page from 'pages';
import {createTheme} from "@mui/material";
import {ThemeProvider} from "@mui/material";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Sidebar from "./components/common/Sidebar";

const theme = createTheme({
    typography: {
        fontFamily: [
            'Work Sans', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'
        ].join(','),
    }
});

const Center = styled.div`
  height: 92vh;
  width: 100%;
  display: flex;
  flex-direction: row;
`

function App() {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <Center>
                    <Sidebar/>

                    <Routes>
                        <Route path="/" element={<Page.Components/>}/>
                        <Route path="/basset" element={<Page.BAsset/>}/>
                        <Route path="/borrow" element={<Page.Borrow/>}/>
                    </Routes>

                </Center>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
