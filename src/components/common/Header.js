import React from 'react';
import styled from 'styled-components';

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  background: #fff;
  box-shadow: 0 2px rgba(0, 0, 0, 0.1);
`;

const Wrapper = styled.div`
  padding-left: 4rem;
  padding-right: 4rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  .logo {
    cursor: pointer;
    font-size: 1.125rem;
    font-weight: 700;
    letter-spacing: 2px;
    padding: 0 2rem;
    text-decoration: none;
  }
  
  .right {
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    div {
      cursor: pointer;
    }
    
    div + div {
      padding-left: 1rem;
    }
  }
  
  @media (max-width: 1220px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const Spacer = styled.div`
  height: 4rem;
`;

const Header = () => {
    return (
        <>
            <HeaderBlock>
                <Wrapper>
                    <div className="logo">U-Zo</div>
                    <div className="right">
                        <div>About</div>
                        <div>Skills</div>
                        <div>Projects</div>
                        <div>Contact</div>
                    </div>
                </Wrapper>
            </HeaderBlock>
            <Spacer/>
        </>
    );
};

export default Header;