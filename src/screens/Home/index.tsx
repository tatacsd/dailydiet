import { Header } from '@components/Header';
import { Meals } from '@components/Meals';
import { PercentageContainer } from '@components/PercentageContainer';
import { useNavigation } from '@react-navigation/native';
import { Container } from './styles';

export function Home() {
  const { navigate } = useNavigation();

  const handleOpenStatistics = () => {
    navigate('statistics');
  };
  return (
    <Container>
      <Header type="HOME" />
      <PercentageContainer
        isPorcentageAbove60={false}
        completedPercentage={98.28}
        onPress={() => {
          handleOpenStatistics();
        }}
        activeOpacity={0.7}
      />
      <Meals />
    </Container>
  );
}
