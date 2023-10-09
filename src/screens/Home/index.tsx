import { Header } from '@components/Header';
import { PercentageContainer } from '@components/PercentageContainer';
import { Text } from 'react-native';
import { Container } from './styles';
export function Home() {
  return (
    <Container>
      <Header type="HOME" />
      <PercentageContainer
        completedPercentage={98.28}
        onPress={() => {
          console.log('PercentageContainer pressed');
        }}
        activeOpacity={0.7}
      />
      <Text>Home</Text>
    </Container>
  );
}
