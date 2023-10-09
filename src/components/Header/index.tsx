import logoImg from '@assets/logo.png';
import profileImg from '@assets/profileImage.png';
import { ContainerHome, Logo, ProfileContainer, ProfileImage } from './styles';

type HeaderType = 'HOME' | 'STATISTICS' | 'ADDING';

type HeaderProps = {
  type: HeaderType;
};

function renderHomeHeader() {
  return (
    <ContainerHome>
      <Logo source={logoImg} />
      <ProfileContainer>
        <ProfileImage source={profileImg} />
      </ProfileContainer>
    </ContainerHome>
  );
}

export function Header({ type }: HeaderProps) {
  return <>{type === 'HOME' && renderHomeHeader()}</>;
}
