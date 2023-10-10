import { Button } from '@components/Button';
import { MealItem } from '@components/MealItem';
import { MealsDataType } from '@models/meal';
import { useEffect, useState } from 'react';
import { RefreshControl, SectionList, View } from 'react-native';
import { Container, MealSectionLabel, NewMealText } from './styles';

const mealsData2 = [
  {
    title: '12.08.22',
    data: [
      {
        id: '5',
        name: 'Breakfast2',
        date: new Date(),
        isMealWithinDiet: true,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies ultrices, nunc nisl aliquam nunc, vitae tincidunt nisl nunc eget nisl. Donec auctor, nisl eget ultricies ultrices, nunc nisl aliquam nunc, vitae tincidunt nisl nunc eget nisl.',
      },
      {
        id: '6',
        name: 'Snack2',
        date: new Date(),
        isMealWithinDiet: false,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies ultrices, nunc nisl aliquam nunc, vitae tincidunt nisl nunc eget nisl. Donec auctor, nisl eget ultricies ultrices, nunc nisl aliquam nunc, vitae tincidunt nisl nunc eget nisl.',
      },
      {
        id: '7',
        name: 'Lunch2',
        date: new Date(),
        isMealWithinDiet: true,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies ultrices, nunc nisl aliquam nunc, vitae tincidunt nisl nunc eget nisl. Donec auctor, nisl eget ultricies ultrices, nunc nisl aliquam nunc, vitae tincidunt nisl nunc eget nisl.',
      },
      {
        id: '8',
        name: 'Dinner2',
        date: new Date(),
        isMealWithinDiet: true,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies ultrices, nunc nisl aliquam nunc, vitae tincidunt nisl nunc eget nisl. Donec auctor, nisl eget ultricies ultrices, nunc nisl aliquam nunc, vitae tincidunt nisl nunc eget nisl.',
      },
      {
        id: '9',
        name: 'Dinner2',
        date: new Date(),
        isMealWithinDiet: true,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies ultrices, nunc nisl aliquam nunc, vitae tincidunt nisl nunc eget nisl. Donec auctor, nisl eget ultricies ultrices, nunc nisl aliquam nunc, vitae tincidunt nisl nunc eget nisl.',
      },
      {
        id: '20',
        name: 'Dinner20',
        date: new Date(),
        isMealWithinDiet: true,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies ultrices, nunc nisl aliquam nunc, vitae tincidunt nisl nunc eget nisl. Donec auctor, nisl eget ultricies ultrices, nunc nisl aliquam nunc, vitae tincidunt nisl nunc eget nisl.',
      },
      {
        id: '21',
        name: 'Dinner21',
        date: new Date(),
        isMealWithinDiet: true,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies ultrices, nunc nisl aliquam nunc, vitae tincidunt nisl nunc eget nisl. Donec auctor, nisl eget ultricies ultrices, nunc nisl aliquam nunc, vitae tincidunt nisl nunc eget nisl.',
      },
    ],
  },
  {
    title: '13.08.22',
    data: [
      {
        id: '1',
        name: 'Breakfast',
        date: new Date(),
        isMealWithinDiet: true,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies ultrices, nunc nisl aliquam nunc, vitae tincidunt nisl nunc eget nisl. Donec auctor, nisl eget ultricies ultrices, nunc nisl aliquam nunc, vitae tincidunt nisl nunc eget nisl.',
      },
      {
        id: '4',
        name: 'Snack',
        date: new Date(),
        isMealWithinDiet: false,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies ultrices, nunc nisl aliquam nunc, vitae tincidunt nisl nunc eget nisl. Donec auctor, nisl eget ultricies ultrices, nunc nisl aliquam nunc, vitae tincidunt nisl nunc eget nisl.',
      },
      {
        id: '2',
        name: 'Lunch',
        date: new Date(),
        isMealWithinDiet: true,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies ultrices, nunc nisl aliquam nunc, vitae tincidunt nisl nunc eget nisl. Donec auctor, nisl eget ultricies ultrices, nunc nisl aliquam nunc, vitae tincidunt nisl nunc eget nisl.',
      },
      {
        id: '3',
        name: 'Dinner',
        date: new Date(),
        isMealWithinDiet: true,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies ultrices, nunc nisl aliquam nunc, vitae tincidunt nisl nunc eget nisl. Donec auctor, nisl eget ultricies ultrices, nunc nisl aliquam nunc, vitae tincidunt nisl nunc eget nisl.',
      },
    ],
  },
  {
    title: '14.08.22',
    data: [
      {
        id: '30',
        name: 'Breakfast',
        date: new Date(),
        isMealWithinDiet: true,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies ultrices, nunc nisl aliquam nunc, vitae tincidunt nisl nunc eget nisl. Donec auctor, nisl eget ultricies ultrices, nunc nisl aliquam nunc, vitae tincidunt nisl nunc eget nisl.',
      },
      {
        id: '31',
        name: 'Snack',
        date: new Date(),
        isMealWithinDiet: false,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        id: '32',
        name: 'Lunch',
        date: new Date(),
        isMealWithinDiet: true,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        id: '33',
        name: 'Dinner',
        date: new Date(),
        isMealWithinDiet: true,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
    ],
  },
];

export function Meals() {
  const [sections, setSections] = useState<MealsDataType[]>([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleButtonPress = () => {
    console.log('Button pressed');
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 2000);
  };

  useEffect(() => {
    setSections(mealsData2);
  }, []);

  return (
    <>
      <NewMealText>Meals</NewMealText>
      <Button
        title="New Meal"
        iconType="PLUS"
        buttonType="PRIMARY"
        onPress={handleButtonPress}
        activeOpacity={0.7}
      />
      <Container>
        <View>
          <SectionList
            sections={sections}
            keyExtractor={(item, index) => item.id + index}
            renderItem={({ item, section }) => (
              <MealItem
                date={item.date}
                isMealWithinDiet={item.isMealWithinDiet}
                name={item.name}
              />
            )}
            renderSectionHeader={({ section }) => (
              <MealSectionLabel>{section.title}</MealSectionLabel>
            )}
            ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
            SectionSeparatorComponent={() => <View style={{ height: 12 }} />}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={() => <View style={{ marginBottom: 80 }} />}
            initialNumToRender={5}
            refreshControl={
              <RefreshControl
                refreshing={isRefreshing}
                onRefresh={handleRefresh}
                progressViewOffset={100}
              />
            }
          />
        </View>
      </Container>
    </>
  );
}
