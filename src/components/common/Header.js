import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  background: #fff;
  box-shadow: 0 2px rgba(0, 0, 0, 0.1);
`;

const Wrapper = styled(Responsive)`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  .logo {
    cursor: pointer;
    font-size: 1.45rem;
    letter-spacing: 2px;
    text-decoration: none;
  }
  
  .right {
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    li {
      cursor: pointer;
    }
    
    li + li {
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


const Header = ({about, skills, projects}) => {
    return (
        <>
            <HeaderBlock>
                <Wrapper>
                    <div className="logo">U-Zo</div>
                    <ul className="right">
                        <li onClick={about}>소개</li>
                        <li onClick={skills}>기술스택</li>
                        <li onClick={projects}>프로젝트</li>
                        <li>깃허브</li>
                    </ul>
                </Wrapper>
            </HeaderBlock>
            <Spacer/>
        </>
    );
};

export default Header;