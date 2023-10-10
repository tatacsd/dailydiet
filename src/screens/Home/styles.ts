import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { DefaultTheme } from 'styled-components/native';
export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 0 32px;
  align-items: center;
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
