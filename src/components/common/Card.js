import React from 'react';
import logo from '../../lib/img/logo.svg';
import styled from 'styled-components';

const CardBlock = styled.div`
  text-align: center;
  width: 30%;
  
  img {
    width: 100%;
  }
  
  .title {
    font-size: 1.1rem;
    padding-bottom: 10px;
  }
`;

const Card = ({img, title, children, ...rest}) => {
    return (
        <CardBlock {...rest}>
            <img src={logo} alt=""/>
            <p className="title">
                {title}
            </p>
            <p>
                {children}
            </p>
        </CardBlock>
    );
};

export default Card;
