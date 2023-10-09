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
