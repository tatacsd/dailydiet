import { ArrowLeft } from 'phosphor-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { DefaultTheme } from 'styled-components/native';

export const ContainerHome = styled.View`
  padding: 22px 0;
  width: 100%;
  background-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.COLORS.GRAY_700};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.Image`
  width: 78px;
  height: 37px;
`;

export const ProfileContainer = styled.View`
  border: 2px solid
    ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.GRAY_200};
  border-radius: 40px;
`;

export const ProfileImage = styled.Image`
  width: 40px;
  height: 40px;
`;

export const ContainerAdding = styled(SafeAreaView)`
  padding: 0px 24px;
  width: 100%;
  background-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.COLORS.GRAY_500};
  flex-direction: row;
  align-items: center;
  text-align: center;
`;

export const ScreenTitle = styled.Text`
  flex: 1;
  width: 100%;
  text-align: center;
  font-family: ${({ theme }: { theme: DefaultTheme }) =>
    theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.GRAY_100};
`;

export const IconGoBack = styled(ArrowLeft)`
  color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.GRAY_100};
  size: 30px;
`;
