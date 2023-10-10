import { Header } from '@components/Header';
import { Meals } from '@components/Meals';
import { PercentageContainer } from '@components/PercentageContainer';
import { Container } from './styles';

export function Home() {
  const handleButtonPress = () => {
    console.log('Button pressed');
  };
  return (
    <Container>
      <Header type="HOME" />
      <PercentageContainer
        isPorcentageAbove60={false}
        completedPercentage={98.28}
        onPress={() => {
          console.log('PercentageContainer pressed');
        }}
        activeOpacity={0.7}
      />
      <Meals />
    </Container>
  );
}
