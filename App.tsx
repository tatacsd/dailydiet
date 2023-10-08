import {
  Nunito_400Regular,
  Nunito_700Bold,
  useFonts,
} from '@expo-google-fonts/nunito';
import { Home } from '@screens/Home';
import { ThemeProvider } from 'styled-components';
// import { Groups } from '@screens/Groups';
import { ActivityIndicator } from 'react-native';
import theme from './src/theme';

export default function App() {
  // Load fonts to all app
  const [fontLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
  });
  return (
    <ThemeProvider theme={theme}>
      {fontLoaded ? <Home /> : <ActivityIndicator />}
    </ThemeProvider>
  );
}
