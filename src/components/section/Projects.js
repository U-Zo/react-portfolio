import React, {useState} from 'react';
import styled from 'styled-components';
import Card from '../common/Card';
import Responsive from '../common/Responsive';
import Modal from '../common/Modal';

const Project = styled(Card)`
  width: 20%;
`;

const ProjectsBlock = styled.div`
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
  align-items: center;
`;

const Projects = () => {
    const [modal, setModal] = useState(false);
    const onClick = () => {
        setModal(true);
    };
    const onClose = () => {
        setModal(false);
    };

    return (
        <ProjectsBlock>
            <p className="title">프로젝트</p>
            <Wrapper>
                <Project onClick={onClick} title="Lorem">
                    Lorem Ipsum is simply dummy text
                </Project>
                <Modal visible={modal} onClose={onClose}/>
                <Project title="Lorem">
                    Lorem Ipsum is simply dummy text
                </Project>
                <Project title="Lorem">
                    Lorem Ipsum is simply dummy text
                </Project>
            </Wrapper>
        </ProjectsBlock>
    );
};

export default Projects;