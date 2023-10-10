export type Meal = {
  id: string; // The id of the meal
  name: string; // The name of the meal
  description: string; // A description of the meal
  date: Date; // The date the meal was consumed
  isMealWithinDiet: boolean; // Indicates whether the meal is within the diet plan
};

export type MealsDataType = {
  title: string;
  data: Meal[];
};
