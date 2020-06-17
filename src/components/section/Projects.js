import React from 'react';
import styled from 'styled-components';
import Card from '../common/Card';
import Responsive from '../common/Responsive';

const Project = styled(Card)`
  width: 20%;
`;

const ProjectsBlock = styled.div`
  padding-top: 4rem;
  padding-bottom: 4rem;
`;

const Wrapper = styled(Responsive)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Projects = () => {
    return (
        <>
            <ProjectsBlock>
                <Wrapper>
                    <Project title="Lorem" text="Lorem Ipsum is simply dummy text"/>
                </Wrapper>
            </ProjectsBlock>
        </>
    );
};

export default Projects;