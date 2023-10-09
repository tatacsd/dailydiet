import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { DefaultTheme } from 'styled-components/native';
export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 32px;
  align-items: center;
  background-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.COLORS.GRAY_700};
`;
