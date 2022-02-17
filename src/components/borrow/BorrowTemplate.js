import React, {useState} from "react";
import styled from "styled-components";
import {ReactComponent as LinkMark} from "assets/Link.svg";
import {ReactComponent as Liquidation} from "assets/Liquidation.svg";
import {Link} from 'react-router-dom';
import Button from "components/common/Button";

const StyledLink = styled(LinkMark)`
  margin: 0 0 7px 5px;
  vertical-align: bottom;
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

const MainCardContainer = styled.div`
  width: 100%;
  height: 360px;
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


function BorrowTemplate() {
    return (
        <Container>
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
                <p>Position Management</p>
            </MainCardContainer>

        </Container>
    );
}

export default BorrowTemplate;