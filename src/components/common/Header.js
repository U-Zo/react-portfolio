import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';
import {Link} from 'react-router-dom';

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
`;

const Wrapper = styled.div`
  padding-left: 4rem;
  padding-right: 4rem;
  height: 4rem;
  display: flex;
  align-items: center;
  
  .logo {
    font-size: 1.125rem;
    letter-spacing: 2px;
    padding: 0 2rem;
    text-decoration: none;
  }
  
  @media (max-width: 768px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const Header = () => {
    return (
        <>
            <HeaderBlock>
                <Wrapper>
                    <Link to="/" class="logo">U-Zo</Link>
                </Wrapper>
            </HeaderBlock>
        </>
    );
};

export default Header;