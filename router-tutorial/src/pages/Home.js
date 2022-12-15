import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Home = () => {
    const { params } = useParams();
    return (
        <div>
            <h1>홈</h1>
            <p>가장 먼저 보여짐</p>
            <p>나는 파라미터 입니다 {params}</p>
            <ul>
                <li>
                    <Link to="/about">소개</Link>
                </li>
                <li>
                    <Link to="/articles">게시글</Link>
                </li>
                <li>
                    <Link to="/about/jsk">지수</Link>

                </li>
                <li>

                    <Link to="/about/yoo">준상</Link>
                </li>
                <li>
                    <Link to="/about/void">없음</Link>

                </li>

            </ul>
        </div>
    );
};

export default Home 