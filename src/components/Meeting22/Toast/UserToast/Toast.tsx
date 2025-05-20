import React, { useEffect } from 'react';
import * as S from './Styles';
import { track } from '@amplitude/analytics-browser';

interface ToastProps {
    isOpen: boolean;
    onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ isOpen, onClose }) => {

    useEffect(() => {
        if (isOpen) {
            track('[접속]미팅_1대1참여안할때_토스트');
          const timer = setTimeout(() => {
            onClose();
          }, 1000); 
          return () => clearTimeout(timer); 
        }
      }, [isOpen]);

    if (!isOpen) return null;

    return (
        <S.ToastLayOut>
          <S.ToastText>프로필을 보려면 상단 참여하기를 눌러주세요!</S.ToastText>
        </S.ToastLayOut>
    );
};

export default Toast;