import React from 'react';
import styled from "styled-components";

const RectBlock = styled.img`
  width: auto;
  position: absolute;
`;

const Rect = ({src}) => {
    return (
        <RectBlock src={src}/>
    );
}

export default Rect;