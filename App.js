import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList
} from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  };

  function addGoalHandler() {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      {text: enteredGoalText, key: Math.random().toString}]);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course coal!"
          onChangeText={goalInputHandler} />
        <Button
          title="Add Goal"
          onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList data={courseGoals}
        renderItem={itemData => {
          return (
            <View style={styles.goalItem}>
              <Text style={styles.goalText}>{itemData.item}</Text>
              </View>
          );
        }}
        keyExtractor={(item, index) => {
          return item.id;
        }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
    flex: 7
  },
  goalItem: {
    borderWidth: 1,
    borderRadius: 10,
    margin: 5,
    padding: 5,
    borderColor: '#cccccc',
    fontStyle: "normal",
    color: "black"
  }
});
