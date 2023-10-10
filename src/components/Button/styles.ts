import { TouchableOpacity } from 'react-native';
import styled, { DefaultTheme } from 'styled-components/native';

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';
type ButtonProps = {
  buttonType: ButtonTypeStyleProps;
};

export const Container = styled(TouchableOpacity)<ButtonProps>`
  min-height: 56px;
  max-height: 56px;
  width: 100%;
  padding: 16px 24px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  flex-direction: row;
  border-radius: 6px;
  color: ${({ theme, buttonType }: { theme: DefaultTheme } & ButtonProps) => {
    return buttonType === 'PRIMARY'
      ? theme.COLORS.GRAY_200
      : theme.COLORS.WHITE;
  }};

  border: 1px solid
    ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.GRAY_200};

  background-color: ${({
    theme,
    buttonType,
  }: { theme: DefaultTheme } & ButtonProps) => {
    return buttonType === 'PRIMARY'
      ? theme.COLORS.GRAY_200
      : theme.COLORS.WHITE;
  }};
`;

export const Title = styled.Text<ButtonProps>`
  color: ${({ theme, buttonType }: { theme: DefaultTheme } & ButtonProps) => {
    console.log('buttonType -> Title:', buttonType);
    return buttonType === 'PRIMARY'
      ? theme.COLORS.GRAY_200
      : theme.COLORS.WHITE;
  }};
  font-family: ${({ theme }: { theme: DefaultTheme }) =>
    theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.FONT_SIZE.SM}px;
  line-height: 18.2px;
  text-align: center;
`;
