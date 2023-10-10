import { Loading } from '@components/Loading';
import {
  Nunito_400Regular,
  Nunito_700Bold,
  useFonts,
} from '@expo-google-fonts/nunito';
import { Routes } from '@routes/index';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import theme from './src/theme';

export default function App() {
  // Load fonts to all app
  const [fontLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
  });
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      {fontLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}
