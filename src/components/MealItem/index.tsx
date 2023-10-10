import { Meal } from '@models/meal';
import { Circle } from 'phosphor-react-native';
import { useTheme } from 'styled-components';
import { Container, MealName, MealTime, MealTimeContainer } from './styles';

type MealItemProps = Pick<Meal, 'name' | 'date' | 'isMealWithinDiet'>;

function formatTime(date: Date): string {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const formattedTime = `${hours}:${minutes.toString().padStart(2, '0')}`;
  return formattedTime;
}

export function MealItem({ name, date, isMealWithinDiet }: MealItemProps) {
  const { COLORS } = useTheme();

  return (
    <Container>
      <MealTimeContainer>
        <MealTime>{formatTime(date)}</MealTime>
      </MealTimeContainer>
      <MealName numberOfLines={1} ellipsizeMode="tail">
        {name}
      </MealName>
      <Circle
        size={14}
        color={isMealWithinDiet ? COLORS.GREEN_LIGHT : COLORS.RED_LIGHT}
        weight="fill"
      />
    </Container>
  );
}
