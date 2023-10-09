import { Header } from '@components/Header';
import { Text } from 'react-native';
import { Container } from './styles';
export function Home() {
  return (
    <Container>
      <Header type="HOME" />
      <Text>Home</Text>
    </Container>
  );
}
