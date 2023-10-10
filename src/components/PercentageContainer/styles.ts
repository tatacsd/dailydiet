import { ArrowUpRight } from 'phosphor-react-native';
import { TouchableOpacity } from 'react-native';
import styled, { DefaultTheme, css } from 'styled-components/native';
import { PercentageContainerProps } from '.';

export const Container = styled(TouchableOpacity)<PercentageContainerProps>`
  display: flex;
  width: 100%;
  padding: 8px;
  flex-direction: column;

  gap: 2px;

  border-radius: 8px;
  background: ${({
    theme,
    isPorcentageAbove60,
  }: { theme: DefaultTheme } & PercentageContainerProps) => {
    console.log(isPorcentageAbove60);
    return isPorcentageAbove60 === true
      ? theme.COLORS.GREEN_LIGHT
      : theme.COLORS.RED_LIGHT;
  }};
`;
export const ProgressText = styled.Text`
  ${({ theme }: { theme: DefaultTheme }) =>
    css`
      font-family: ${theme.FONT_FAMILY.BOLD};
      font-size: ${theme.FONT_SIZE.XXL}px;
      color: ${theme.COLORS.GRAY_100};
    `}

  text-align: center;
  line-height: 40px;

  padding-top: 24px;
`;

export const ProgressInfo = styled.Text`
  ${({ theme }: { theme: DefaultTheme }) =>
    css`
      font-family: ${theme.FONT_FAMILY.REGULAR};
      font-size: ${theme.FONT_SIZE.SM}px;
      color: ${theme.COLORS.GRAY_200};
    `}

  text-align: center;
  font-weight: 400;
  line-height: 18.2px;

  align-self: stretch;
  padding-bottom: 24px;
`;

export const OpenIconContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const OpenIcon = styled(ArrowUpRight).attrs(
  ({
    theme,
    isPorcentageAbove60,
  }: { theme: DefaultTheme } & PercentageContainerProps) => ({
    color:
      isPorcentageAbove60 === true
        ? theme.COLORS.GREEN_DARK
        : theme.COLORS.RED_DARK,
    size: 24,
  })
)`
  position: absolute;
  right: 8px;
  top: 8px;
`;
