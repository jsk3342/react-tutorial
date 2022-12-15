import React from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

const About = () => {
    const [serchParams, setSerchParams] = useSearchParams();
    const detail = serchParams.get('detail')
    const mode = serchParams.get('mode')

    const onToggleDetail = () => {
        setSerchParams({mode, detail: detail=== 'true' ? false : true})
    }

    const onIncreaseMode = () => {
        const nextMode = mode === null ? 1 : parseInt(mode) + 1;
        setSerchParams({mode: nextMode, detail})
    }
    return (
        <div>
            <h1>소개</h1>
            <p>라우터 소개</p>
            <p>detail: {detail}</p>
            <p>mode: {mode}</p>
            <button onClick={onToggleDetail}>Toggle detail</button>
            <button onClick={onIncreaseMode}>mode +1 </button>
        </div>
    );
};

export default About;