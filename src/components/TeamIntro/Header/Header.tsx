import * as S from './Styles';
import { useNavigate } from 'react-router-dom';

interface TeamDataProps {
  verification: number;
  name: string;
}

const Header: React.FC<TeamDataProps> = ({ verification, name }) => {
  const navigate = useNavigate();
  const isVerified = verification === 1;

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <S.HeaderLayout>
      <S.BackContainer>
        <S.BackButton onClick={handleBackClick} />
        <S.Title>팀 소개</S.Title>
      </S.BackContainer>
      <S.TeamNameContainer>
        {isVerified && <S.CertificationIcon />}
        <S.TeamName>{name}팀</S.TeamName>
      </S.TeamNameContainer>
    </S.HeaderLayout>
  );
};

export default Header;
