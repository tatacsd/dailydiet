import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { DefaultTheme } from 'styled-components/native';
export const Container = styled(SafeAreaView)`
  flex: 1;
  width: 100%;
  background-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.COLORS.GRAY_700};
`;

export const NewMealText = styled.Text`
  font-family: ${({ theme }: { theme: DefaultTheme }) =>
    theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.FONT_SIZE.MD}px;
  line-height: 20.8px;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.GRAY_100};
  text-align: left !important;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 8px;
`;

export const MealSectionLabel = styled.Text`
  font-family: ${({ theme }: { theme: DefaultTheme }) =>
    theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.FONT_SIZE.XL}px;
  line-height: 40px;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.GRAY_100};
  text-align: left;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 8px;
`;
