import client from './client';

// 프로젝트 내용 받아오기
export const readProject = () => {
    client.get('../projects.json');
};