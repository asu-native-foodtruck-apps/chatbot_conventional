import React, { useState } from 'react';
import { View, Text, Button, TextInput, ScrollView, StyleSheet } from 'react-native';


///<ChatbotFlow />

const ChatbotFlow = () => {
  const [step, setStep] = useState(1);
  const [mealType, setMealType] = useState('');
  const [customization, setCustomization] = useState('');
  const [nutritionInfo, setNutritionInfo] = useState('');
  const [recipeDetails, setRecipeDetails] = useState('');
  const [forumTopics, setForumTopics] = useState('');
  const [language, setLanguage] = useState('');

  const handleStep = (nextStep) => setStep(nextStep);

  const renderStep = () => {
 switch(step){
    case 1:
        // jerome chatbot
        break;
    case 2: 
    switch (step) {
        case 1:
          return (
            <View>
              <Text>Welcome to the Apache Food Truck App! How can I assist you today?</Text>
              <Button title="Order a meal" onPress={() => handleStep(2)} />
              <Button title="Get Nutrition Info" onPress={() => handleStep(6)} />
              <Button title="Share a Recipe" onPress={() => handleStep(7)} />
              <Button title="Join a Forum" onPress={() => handleStep(9)} />
              <Button title="Provide Feedback" onPress={() => handleStep(11)} />
              <Button title="Change Language" onPress={() => handleStep(12)} />
            </View>
          );
        case 2:
          return (
            <View>
              <Text>What type of meal are you looking for today?</Text>
              <Button title="Breakfast" onPress={() => { setMealType('Breakfast'); handleStep(3); }} />
              <Button title="Lunch" onPress={() => { setMealType('Lunch'); handleStep(3); }} />
              <Button title="Dinner" onPress={() => { setMealType('Dinner'); handleStep(3); }} />
              <Button title="Snacks" onPress={() => { setMealType('Snacks'); handleStep(3); }} />
            </View>
          );
        case 3:
          return (
            <View>
              <Text>Would you like to customize your meal?</Text>
              <Button title="Yes" onPress={() => handleStep(4)} />
              <Button title="No" onPress={() => handleStep(5)} />
            </View>
          );
        case 4:
          return (
            <View>
              <Text>What customization would you like? (e.g., ingredients, portion size)</Text>
              <TextInput 
                placeholder="Enter your customization" 
                value={customization}
                onChangeText={setCustomization}
              />
              <Button title="Submit" onPress={() => handleStep(5)} />
            </View>
          );
        case 5:
          return (
            <View>
              <Text>Order confirmed: {mealType} with {customization}</Text>
              <Button title="End Session" onPress={() => handleStep(14)} />
            </View>
          );
        case 6:
          return (
            <View>
              <Text>What nutrition information would you like?</Text>
              <Button title="Nutritional Value" onPress={() => { setNutritionInfo('Nutritional Value'); handleStep(6); }} />
              <Button title="Healthy Cooking Tips" onPress={() => { setNutritionInfo('Healthy Cooking Tips'); handleStep(6); }} />
              <Button title="Meal Planning Guidance" onPress={() => { setNutritionInfo('Meal Planning Guidance'); handleStep(6); }} />
            </View>
          );
        case 7:
          return (
            <View>
              <Text>What recipe would you like to share?</Text>
              <TextInput 
                placeholder="Enter recipe details" 
                value={recipeDetails} 
                onChangeText={setRecipeDetails} 
              />
              <Button title="Share Recipe" onPress={() => handleStep(8)} />
            </View>
          );
        case 8:
          return (
            <View>
              <Text>Recipe shared: {recipeDetails}</Text>
              <Button title="End Session" onPress={() => handleStep(14)} />
            </View>
          );
        case 9:
          return (
            <View>
              <Text>Would you like to join a forum or provide feedback?</Text>
              <Button title="Join Forum" onPress={() => handleStep(10)} />
              <Button title="Provide Feedback" onPress={() => handleStep(11)} />
            </View>
          );
        case 10:
          return (
            <View>
              <Text>What forum topics are you interested in?</Text>
              <TextInput 
                placeholder="Enter forum topics" 
                value={forumTopics} 
                onChangeText={setForumTopics} 
              />
              <Button title="Join Forum" onPress={() => handleStep(14)} />
            </View>
          );
        case 11:
          return (
            <View>
              <Text>Please enter your feedback</Text>
              <TextInput 
                placeholder="Enter feedback" 
                value={forumTopics} 
                onChangeText={setForumTopics} 
              />
              <Button title="Submit Feedback" onPress={() => handleStep(14)} />
            </View>
          );
        case 12:
          return (
            <View>
              <Text>Would you like to change the language?</Text>
              <Button title="Yes" onPress={() => handleStep(13)} />
              <Button title="No" onPress={() => handleStep(14)} />
            </View>
          );
        case 13:
          return (
            <View>
              <Text>Select your language:</Text>
              <Button title="English" onPress={() => setLanguage('English')} />
              <Button title="Apache" onPress={() => setLanguage('Apache')} />
              <Button title="Other" onPress={() => setLanguage('Other')} />
              <Button title="Submit" onPress={() => handleStep(14)} />
            </View>
          );
        case 14:
          return (
            <View>
              <Text>Thank you for using the San Carlos Apache Food Truck App! Have a great day!</Text>
              <Button title="Start Over" onPress={() => handleStep(1)} />
              <Button title="Exit" onPress={() => {}} />
            </View>
          );
        default:
          return null;
      }
 }
  };

  return (
    <ScrollView style={styles.container}>
      {renderStep()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  button: {
    marginTop: 20,
  },
});

export default ChatbotFlow;
