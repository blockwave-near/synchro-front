import React, {useState} from 'react';
import styled from "styled-components";

const BackContainer = styled.div`
  width: 100%;
  background-color: #C4C4C4;
  height: 10px;

  border-radius: 5px;
`;

const InnerBar = styled.div`
  width: ${props => `${props.per}%`};
  background-color: #5B4EE6;
  height: 10px;

  border-radius: 5px;
`;

function LinePercent(props) {
    return (
        <BackContainer>
            <InnerBar per={props.per} />
        </BackContainer>
    );
}

export default LinePercent;