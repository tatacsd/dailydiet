import { TouchableOpacityProps } from 'react-native';
import {
  Container,
  OpenIcon,
  OpenIconContainer,
  ProgressInfo,
  ProgressText,
} from './styles';

type PercentageContainerProps = TouchableOpacityProps & {
  completedPercentage: number;
};

export function PercentageContainer({
  completedPercentage,
  ...rest
}: PercentageContainerProps) {
  return (
    <Container {...rest}>
      <OpenIconContainer>
        <OpenIcon />
      </OpenIconContainer>
      <ProgressText>{completedPercentage}%</ProgressText>
      <ProgressInfo>meals within the diet</ProgressInfo>
    </Container>
  );
}
