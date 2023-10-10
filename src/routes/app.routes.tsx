import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '@screens/Home';
import { NewMeal } from '@screens/NewMeal';
import { Statistics } from '@screens/Statistics';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: 'transparent' },
      }}
    >
      <Screen name="home" component={Home} />
      <Screen name="newMeal" component={NewMeal} />
      <Screen name="statistics" component={Statistics} />
    </Navigator>
  );
}
