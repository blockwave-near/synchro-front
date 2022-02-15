import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 360px;
  height: 210px;
  border-radius: 20px;
  background-color: #25252E;
  box-shadow: 0 4px 10px rgba(91, 78, 230, 0.25);
`;

const TextContainer = styled.div`
  margin: 40px 193px 95px 30px;
  width: 100%;
  height: 75px;
`

const TitleTextConatiner = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #FFFFFF;
  display: flex;
  align-items: flex-start;
`;

const ValueTextContainer = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  color: #FFFFFF;
  margin-top: 10px;

  display: inline-block;
  margin-left: 20px;

  p {
    font-size: 42px;
    display: inline-block;
  }
`;

function borrowCard(props) {
    return (
        <Card>
            <TextContainer>
                <TitleTextConatiner>Collateral Value</TitleTextConatiner>
                <ValueTextContainer>$<p>{props.children}</p></ValueTextContainer>
            </TextContainer>
        </Card>
    );
}

export default borrowCard;
