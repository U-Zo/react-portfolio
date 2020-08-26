import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import Card from '../common/Card';
import skills from '../../lib/skills.json';

const SkillsBlock = styled.div`
  background: #fafafa;
  padding-top: 4rem;
  padding-bottom: 4rem;
  text-align: center;
  
  > .title {
    font-size: 1.3rem;
  }
`;

const Wrapper = styled(Responsive)`
  padding-top: 4rem;
  display: flex;
  justify-content: space-between;
`;

const Skills = () => {
    return (
        <SkillsBlock>
            <p className="title">기술스택</p>
            <Wrapper>
                {skills.map((item) => (
                    <Card title={item.skill}>
                        {item.description}
                    </Card>
                ))}
            </Wrapper>
        </SkillsBlock>
    );
};

export default Skills;