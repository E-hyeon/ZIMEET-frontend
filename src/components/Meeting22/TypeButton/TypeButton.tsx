import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import * as S from './Styles';
import { track } from '@amplitude/analytics-browser';

interface TypeButtonProps {
  setSelectedTeamType: (teamType: string) => void;
}

const TypeButton: React.FC<TypeButtonProps> = ({ setSelectedTeamType }) => {
    const location = useLocation();
    const [selectedButton, setSelectedButton] = useState<string>('1to1');

    useEffect(() => {
        track('[접속]미팅_2대2');
    });

    const handleTypeChange = (teamType: string, button: string, size: number) => {
        setSelectedButton(button);
        setSelectedTeamType(teamType);

        if (button === '2to2') {
            track('[클릭]미팅_헤더_2대2버튼');
            track('[접속]미팅_2대2');
        } else if (button === '3to3') {
            track('[클릭]미팅_헤더_3대3버튼');
            track('[접속]미팅_3대3');
        } else if (button === '1to1') {
            track('[클릭]미팅_헤더_1대1버튼');
            track('[접속]미팅_1대1');
        } 
    };

    const handleRClick = () => {
        setSelectedButton('random');
        setSelectedTeamType('Random');

        track('[클릭]미팅_헤더_랜덤버튼');
        track('[접속]미팅_랜덤');
    };

    return (
        <S.TypeLayout>
            <S.TypeComponent>
                <S.Oneto1
                    onClick={() => handleTypeChange('ONE_TO_ONE', '1to1', 1)}
                    selected={selectedButton === '1to1'}
                >
                    1대1
                </S.Oneto1>
            </S.TypeComponent>
            <S.TypeComponent>
                <S.Twoto2
                    onClick={() => handleTypeChange('TWO_TO_TWO', '2to2', 2)}
                    selected={selectedButton === '2to2'}
                >
                    2대2
                </S.Twoto2>
            </S.TypeComponent>
            <S.TypeComponent>
                <S.Random
                    onClick={handleRClick}
                    selected={selectedButton === 'random'}
                >
                    랜덤
                </S.Random>
            </S.TypeComponent>
            <S.lookComponent>
                {location.pathname !== '/meeting-random' && (
                    <S.lookword>이성 팀만 보여요👀</S.lookword>
                )}
            </S.lookComponent>
        </S.TypeLayout>
    );
};

export default TypeButton;