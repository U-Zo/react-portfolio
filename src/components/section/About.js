import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';

const AboutBlock = styled(Responsive)`
  display: flex;
  padding-top: 8rem;
  padding-bottom: 8rem;
  justify-content: space-between;
  align-items: center;
  
  .left {
    font-size: 3rem;
    font-weight: bold;
    letter-spacing: 3px;
    margin-right: 5vw;
  }
  
  .right {
    font-size: 1.1rem;
    letter-spacing: 2px;
    p + p {
      margin-top: 1rem;
    }
  }
  
  @media (max-width: 768px) {
    display: block;
    .left {
      text-align: center;
    }
  }
`;

const About = () => {
    return (
        <>
            <AboutBlock>
                <div className="left">Hi,</div>
                <div className="right">
                    <p>
                        새로운 경험을 통해 성장하는 김우조입니다.
                    </p>
                    <p>
                        어려서부터 친구들과 컴퓨터 게임을 즐겨했습니다. 아주 잠깐이지만 오픈 소스를 이용한
                        게임을 친구들을 위해 운영했던 경험은 정말 즐거웠고 개발의 길로 이끌었습니다.
                    </p>
                    <p>
                        현재, 세상의 SW들은 삶에 엄청난 영향을 주고 있으며 이제는 삶의 일부입니다.
                        예를 들어 앱 하나면 금융 거래를 할 수 있고 집에서 원하는 물건을 살 수 있죠.
                    </p>
                    <p>
                        저는 삶의 일부인 SW의 개발자가 되고 싶습니다.
                        제 손에서 탄생한 SW가 세상의 일부가 되어
                        삶의 질을 더욱 향상시키고 그에 따라오는 큰 성취감을 느끼고 싶습니다.
                    </p>
                </div>
            </AboutBlock>
        </>
    );
};

export default About;