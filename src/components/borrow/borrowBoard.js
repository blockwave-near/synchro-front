import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 360px;
  height: 210px;
  border-radius: 20px;
  background-color: #25252E;
  box-shadow: 0 4px 10px rgba(91, 78, 230, 0.25);

  & + & {
    margin-left: 30px;
  }
`;

const TextContainer = styled.div`
  padding: 40px 30px 20px 30px;
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
  font-weight: 700;
  font-size: 24px;
  color: #FFFFFF;
  
  margin: 10px 0 0 20px;

  number {
    font-size: 42px;
    font-weight: 700;
    display: inline-block;
  }
`;

function borrowCard(props) {
    return (
        <Card>
            <TextContainer>
                <TitleTextConatiner>Collateral Value</TitleTextConatiner>
                <ValueTextContainer>
                    $<number>{props.children}</number>
                </ValueTextContainer>
            </TextContainer>
        </Card>
    );
}

export default borrowCard;
