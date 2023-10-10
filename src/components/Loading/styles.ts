import styles from 'styled-components/native';

export const Container = styles.View`
    flex: 1;
    justify-content: center;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const LoadingIndicator = styles.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.COLORS.GREEN_700,
  size: 'large',
}))``;
