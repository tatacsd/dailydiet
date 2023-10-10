import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { DefaultTheme } from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  width: 100%;
  max-height: 50px;
  flex-direction: row;
  display: flex;
  padding: 14px 16px 14px 12px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  align-self: stretch;
  border-radius: 6px;
  justify-content: space-between;
  background-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.COLORS.GRAY_700};
  border: 1px solid
    ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.GRAY_500};
`;

export const MealTimeContainer = styled.View`
  border-right-width: 1px solid
    ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.GRAY_500};
  text-align: center;
  justify-content: center;
  align-items: center;
  padding-right: 12px;
`;

export const MealTime = styled.Text`
  color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.GRAY_100};
  font-family: ${({ theme }: { theme: DefaultTheme }) =>
    theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.FONT_SIZE.SM}px;
  width: 100%;
  text-align: center;
`;

export const MealName = styled.Text`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  flex: 1;
  padding-right: 12px;
`;
