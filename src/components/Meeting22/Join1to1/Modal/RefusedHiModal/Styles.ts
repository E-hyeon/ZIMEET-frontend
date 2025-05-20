import styled from 'styled-components';

export const ModalLayout = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
    width: 84%;
    height: auto;
    display: flex;
    flex-direction: column;
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

export const ModalTitle = styled.div`
    font-size: 16px;
    font-weight: 700;
    color: #000000;
    margin: 2% 0 3%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ModalText = styled.p`
    font-size: 12px;
    font-weight: 400;
    color: #9C9C9C;
    margin-bottom: 4%;
    line-height: 22px;
    white-space: pre-line;
    word-wrap: break-word;
    text-align: center;
`;


export const HighlightText = styled.span`
    font-weight: bold;
    text-decoration: underline;
`;

export const CancelButton = styled.button`
    width: 100%;
    height: 100%;
    min-height: 35px;
    background: #1A1A1A;
    color: #FFFFFF;
    border: none;
    font-weight: bold;
    border-radius: 12px;
    cursor: pointer;
`;