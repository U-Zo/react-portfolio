import React from 'react';
import styled from 'styled-components';

const CardBlock = styled.div`
  text-align: center;
  width: 30%;
  
  .title {
    font-size: 1.1rem;
    padding-bottom: 10px;
  }
`;

const Card = ({img, title, text, ...rest}) => {
    return (
        <CardBlock {...rest}>
            {img}
            <p className="title">
                {title}
            </p>
            <p>
                {text}
            </p>
        </CardBlock>
    );
};

export default Card;