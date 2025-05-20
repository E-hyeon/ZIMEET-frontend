import React, { useState, useEffect } from 'react';
import * as S from './Styles';
import { getOnetoOneHi } from '../../../../../api/Meeting/Getouthi';
import { postsendHi } from '../../../../../api/Hi/PostsendHi';
import { useRecoilValue } from 'recoil';
import { track } from '@amplitude/analytics-browser';
import { MyProfileState } from '../../../../../recoilStores/state/Meeting/MyProfileState';
import { UserData } from 'recoilStores/type/Meeting/UserDetail';

interface SendQuestionProps {
  onClose: () => void;
  onConfirm: () => void;
  user: UserData;
}

const SendQuestion: React.FC<SendQuestionProps> = ({
  onClose,
  onConfirm,
  user,
}) => {
  const [hiCount, setHiCount] = useState(0);
  const myProfile = useRecoilValue(MyProfileState);

  useEffect(() => {
    const fetchHiCount = async () => {
      try {
        const response = await getOnetoOneHi();
        if (response) {
          setHiCount(response.data.hi);
        } else {
          setHiCount(0);
        }
      } catch (error) {
        console.error('Error fetching hi count:', error);
        setHiCount(0);
      }
    };
    fetchHiCount();
    track('[접속]미팅_유저_하이보내기');
  });
  const sendHi = async () => {
    try {
      if (myProfile) {
        await postsendHi({
          toId: user.userId,
          fromId: myProfile?.userId ?? 0,
          type: 'USER',
        });
      } else {
        console.error('myProfile is null');
      }
    } catch (error) {
      console.error('Error sending hi:', error);
    }
  };

  const handleConfirm = async () => {
    track('[클릭]미팅_유저_하이보내기_하이보내기버튼', {
      user_nickname: user.nickname,
      remaining_hi: hiCount,
    });
    await sendHi();
    onConfirm();
  };

  const handleClose = () => {
    track('[클릭]미팅_유저_하이보내기_하이보내기취소', {
      user_nickname: user.nickname,
      remaining_hi: hiCount,
    });
    onClose();
  };

  return (
    <S.Modallayout>
      <S.ModalContent>
        <S.ModalTitle>{user.nickname} 님에게 하이를 보낼까요?</S.ModalTitle>
        <S.ModalText>
          내가 보낸 하이를 수락하면 채팅방이 열려요!
          <br />
          하이는 내가 가진 1대1 하이 수에서 1개 차감되며
          <br />
          보낸 하이는 취소할 수 없어요.
        </S.ModalText>
        <S.TicketCount>남은 1대1 하이 : {hiCount}개</S.TicketCount>
        <S.ButtonBox>
          <S.CancelButton onClick={handleClose}>취소</S.CancelButton>
          <S.ConfirmButton onClick={handleConfirm}>
            <S.Hi />
            <S.Text>보내기</S.Text>
          </S.ConfirmButton>
        </S.ButtonBox>
      </S.ModalContent>
    </S.Modallayout>
  );
};

export default SendQuestion;
