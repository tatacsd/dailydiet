import { TouchableOpacityProps } from 'react-native';
import {
  Container,
  OpenIcon,
  OpenIconContainer,
  ProgressInfo,
  ProgressText,
} from './styles';

export type PercentageContainerProps = TouchableOpacityProps & {
  completedPercentage: number;
  isPorcentageAbove60: boolean;
};

export function PercentageContainer({
  completedPercentage,
  isPorcentageAbove60,
  ...rest
}: PercentageContainerProps) {
  return (
    <Container {...rest} isPorcentageAbove60={isPorcentageAbove60}>
      <OpenIconContainer>
        <OpenIcon isPorcentageAbove60={isPorcentageAbove60} />
      </OpenIconContainer>
      <ProgressText>{completedPercentage}%</ProgressText>
      <ProgressInfo>meals within the diet</ProgressInfo>
    </Container>
  );
}
