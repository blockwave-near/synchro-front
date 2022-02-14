import React from 'react';

import styled from 'styled-components';

const ButtonContainer = styled.button`
  width: ${(props) => (props.fullWidth ? '100%' : props.width ?? '150px')};
  height: ${(props) => props.height ?? '36px'};
  background: ${(props) => props.background ?? '#25252E'};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 14px;
  font-weight: 700;
  padding: 10px;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(91, 78, 230, 0.25);
  border-radius: 100px;
`;

function Button(props) {
    return <ButtonContainer {...props}>{props.children}</ButtonContainer>;
}

export default Button;
