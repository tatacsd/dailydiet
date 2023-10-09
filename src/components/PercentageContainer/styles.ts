import { ArrowUpRight } from 'phosphor-react-native';
import { TouchableOpacity } from 'react-native';
import styled, { DefaultTheme, css } from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
  display: flex;
  width: 327px;
  padding: 8px;
  flex-direction: column;

  gap: 2px;

  border-radius: 8px;
  background: ${({ theme }: { theme: DefaultTheme }) =>
    theme.COLORS.GREEN_LIGHT};
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
  ({ theme }: { theme: DefaultTheme }) => ({
    color: theme.COLORS.GREEN_DARK,
    size: 24,
  })
)`
  position: absolute;
  right: 8px;
  top: 8px;
`;
