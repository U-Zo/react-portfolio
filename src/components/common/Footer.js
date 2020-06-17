import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';

const FooterBlock = styled.div`
  padding-top: 4rem;
  padding-bottom: 4rem;
  background: #41494e;
`;

const Wrapper = styled(Responsive)`
  color: #ececec;
`;

const Footer = () => {
    return (
        <FooterBlock>
            <Wrapper>
                <div>
                    <div>
                        <ul>
                            <li>김우조</li>
                            <li>kwoojo0127@gmail.com</li>
                        </ul>
                    </div>
                    <div>

                    </div>
                </div>
                <div>
                    Copyright ⓒ 2020 U-Zo All Rights Reserved.
                </div>
            </Wrapper>
        </FooterBlock>
    );
};

export default Footer;