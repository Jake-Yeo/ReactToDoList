import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default function App() {
  return (
    <View style = {styles.appContainer}>
      <View style = {styles.inputContainer}>
        <TextInput style = {styles.textInput} placeholder = "Your course coal!" />
        <Button title = "Add Goal" />
      </View>
      <View>
        <Text>List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding:50,
    paddingHorizontal: 16
  },
    inputContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    textInput: {
      borderWidth: 1,
      borderColor: '#cccccc',
      width: '70%',
      marginRight: 8,
      padding: 8
    }
});
