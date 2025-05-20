import styled from 'styled-components';

export const ModalLayout = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
    width: 84%; 
    height: auto;
    background: #ffffff;
    padding: 5%;
    border-radius: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    
    @media (min-width: 430px) {
        width: 50%;
    }
    @media (min-width: 630px) {
        width: 40%;
    }
    @media (min-width: 768px) {
        width: 30%;
    }
`;

export const ModalTitle = styled.h2`
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 30px;
    margin: 2% 0 5%;
`;

export const ModalText = styled.p`
    font-size: 12px;
    color: #9C9C9C;
    white-space: pre-line;
    word-wrap: break-word;
    text-align: center;
    margin-bottom: 8%;
    line-height: 180%;
`;

export const ButtonBox = styled.div`
    height: 25%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const CancelButton = styled.button`
    width: 65%;
    display:flex;
    justify-content:center;
    align-items:center;
    background: #F2F2F2;
    color: #A6A6A6;
    font-weight: bold;
    border: none;
    border-radius: 12px;
    cursor: pointer;
`;

export const RefuseButton = styled.button`
    width: 30%;
    padding: 4% 2%;
    margin-right: 3%;
    background: #1A1A1A;
    color: #FFFFFF;
    border: none;
    font-weight: bold;
    border-radius: 12px;
    cursor: pointer;
`;

export const Text = styled.div`
    margin-left: -7%;
`;