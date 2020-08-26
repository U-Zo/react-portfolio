import React from 'react';
import styled, {keyframes} from 'styled-components';
import backImg from '../../lib/img/main.jpg';
import rec1 from '../../lib/img/rec1.png';
import rec2 from '../../lib/img/rec2.png';

const moving = (x, y) => keyframes`
  from {
    transform: translate(${x}, ${y});
  }
  to {
    transform: translate(0, 0);
  }
`;

const BannerBlock = styled.div`
  height: 650px;
  background: url(${backImg}) no-repeat center center;
  background-size: auto;
  
  @media (min-width: 769px) {
    min-width: 1024px;
  }
`;

const AniRect = styled.img`
  width: auto;
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  bottom: ${props => props.bottom};
  animation-duration: 1s;
  animation-name: ${props => moving(props.x, props.y)};
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-direction: alternate-reverse;
  animation-delay: ${props => props.delay};
`;

const Banner = () => {
    return (
        <>
            <BannerBlock>
                <AniRect src={rec1} top="100px" left="100px" x="20px" y="20px"/>
                <AniRect src={rec2} top="550px" left="100px" x="20px" y="-20px"/>
            </BannerBlock>
        </>
    );
}

export default Banner;