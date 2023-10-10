import { Header } from '@components/Header';
import { Container } from './styles';

export function Statistics() {
  const handleButtonPress = () => {
    console.log('Button pressed');
  };
  return (
    <Container>
      <Header type="HOME" />
    </Container>
  );
}
