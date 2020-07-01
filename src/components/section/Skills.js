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
                <Card img={<DiHtml5 size="125" color="#FF8200"/>} title="HTML">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </Card>
                <Card img={<DiCss3 size="125" color="#646EFF"/>} title="CSS">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </Card>
                <Card img={<DiJsBadge size="125" color="#FF9614"/>} title="JavaScript">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </Card>
            </Wrapper>
        </SkillsBlock>
    );
};

export default Skills;