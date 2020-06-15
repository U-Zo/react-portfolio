import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';

const CardBlock = styled.div`
  width: 100%;
`;

const SkillsBlock = styled.div`
  background: #fafafa;
  padding-top: 8rem;
  padding-bottom: 8rem;
`;

const Wrapper = styled(Responsive)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Card = ({list}) => {
    return (
        <CardBlock>

        </CardBlock>
    );
};

const Skills = () => {
    return (
        <SkillsBlock>
            <Wrapper>
                <Card list={}/>
            </Wrapper>
        </SkillsBlock>
    );
};

export default Skills;