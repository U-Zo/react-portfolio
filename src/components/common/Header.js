import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const HeaderBlock = styled(Row)`
  @import url('https://fonts.googleapis.com/css2?family=Roboto');
  font-family: 'Roboto', sans-serif;
  position: fixed;
  width: 100%;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
`;

const Wrapper = styled(Col)`
  
`;

const Header = () => {
    return (
        <Container fluid={true}>
            <HeaderBlock>
                <Col>
                    <Link to="/">Woojo</Link>
                </Col>
            </HeaderBlock>
        </Container>
    );
};

export default Header;