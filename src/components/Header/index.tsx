import logoImg from '@assets/logo.png';
import profileImg from '@assets/profileImage.png';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import {
  ContainerAdding,
  ContainerHome,
  IconGoBack,
  Logo,
  ProfileContainer,
  ProfileImage,
  ScreenTitle,
} from './styles';

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

function renderStatisticsHeader() {
  return <></>;
}

export function Header({ type }: HeaderProps) {
  const { navigate } = useNavigation();
  function handleGoBackButtonPress() {
    navigate('home');
  }
  function renderAddingHeader() {
    return (
      <ContainerAdding>
        <TouchableOpacity onPress={handleGoBackButtonPress}>
          <IconGoBack />
        </TouchableOpacity>
        <ScreenTitle>Add new meal</ScreenTitle>
      </ContainerAdding>
    );
  }

  return (
    <>
      {type === 'HOME' && renderHomeHeader()}
      {type === 'STATISTICS' && renderStatisticsHeader()}
      {type === 'ADDING' && renderAddingHeader()}
    </>
  );
}
