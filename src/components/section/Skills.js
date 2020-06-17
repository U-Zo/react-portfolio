import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import {DiHtml5, DiCss3, DiJsBadge} from 'react-icons/di';

const CardBlock = styled.div`
  text-align: center;
  width: 30%;
  
  .skill {
    font-size: 1.1rem;
    padding-bottom: 10px;
  }
`;

const SkillsBlock = styled.div`
  background: #fafafa;
  padding-top: 4rem;
  padding-bottom: 4rem;
`;

const Wrapper = styled(Responsive)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Card = ({icon, skill, text}) => {
    return (
        <CardBlock>
            {icon}
            <p className="skill">
                {skill}
            </p>
            <p>
                {text}
            </p>
        </CardBlock>
    );
};

const Skills = () => {
    return (
        <SkillsBlock>
            Skills
            <Wrapper>
                <Card icon={<DiHtml5 size="125" color="#FF8200"/>} skill="HTML" text="안녕"/>
                <Card icon={<DiCss3 size="125" color="#646EFF"/>} skill="CSS" text="안녕"/>
                <Card icon={<DiJsBadge size="125" color="#FF9614"/>} skill="JavaScript" text="안녕"/>
            </Wrapper>
        </SkillsBlock>
    );
};

export default Skills;