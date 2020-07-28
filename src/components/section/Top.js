import React from 'react';
import styled from 'styled-components';
import backImg from '../../lib/img/temp.jpg';

const TopBlock = styled.div`
  height: 700px;
  background: url(${backImg}) no-repeat center center;
  background-size: contain;
`;

const Top = () => {
    return (
        <>
            <TopBlock/>
        </>
    );
}

export default Top;