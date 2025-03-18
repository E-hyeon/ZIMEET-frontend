import React from 'react';
import * as S from './Styles';
import TypeButton from '../../components/Booth/TypeButton/TypeButton';
import Booths from '../../components/Booth/Booths/Booths';
import Header from '../../components/Booth/Header/Header';
import NavigationBar from 'components/Common/NavigationBar/NavigationBar';
import GotoMeeting from 'components/GotoMeeting/GotoMeeting';
import { useRecoilState } from 'recoil';
import { selectedSpaceState } from 'recoil/state/boothState';

const Booth: React.FC = () => {
    const [selectedSpace, setSelectedSpace] = useRecoilState(selectedSpaceState);

    return (
        <S.BoothLayout>
            <Header />
            <S.BoothContainer>
                <TypeButton />
                <S.ColorType>🟥 연애 / 팅 🟨 이벤트 / 게임 🟩 물품판매 🟦 먹거리</S.ColorType>
                <S.Explanation>동아리를 <b>길게 눌러</b> 계좌번호를 쉽게 복사해보세요!</S.Explanation>
                <Booths />
            </S.BoothContainer>
            <NavigationBar />
            <GotoMeeting />
        </S.BoothLayout>
    );
};

export default Booth;
