import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import Card from '../common/Card';
import {DiHtml5, DiCss3, DiJsBadge} from 'react-icons/di';

const SkillsBlock = styled.div`
  background: #fafafa;
  padding-top: 4rem;
  padding-bottom: 4rem;
  text-align: center;
  
  .title {
    
  }
`;

const Wrapper = styled(Responsive)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Skills = () => {
    return (
        <SkillsBlock>
            Skills
            <Wrapper>
                <Card img={<DiHtml5 size="125" color="#FF8200"/>} title="HTML" text="안녕"/>
                <Card img={<DiCss3 size="125" color="#646EFF"/>} title="CSS" text="안녕"/>
                <Card img={<DiJsBadge size="125" color="#FF9614"/>} title="JavaScript" text="안녕"/>
            </Wrapper>
        </SkillsBlock>
    );
};

export default Skills;