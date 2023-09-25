import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput , ScrollView , FlatList} from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enteredGoalText,
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View  style={styles.goalsContainer}>
      {/* <ScrollView> */}

       {/* We used scrollView here , which is suitable for container type view , but when we want to render list we should use FlatList */}
        {/* { {courseGoals.map((goal) => (
          <View key={goal} style={styles.goalItem}>
            <Text style={styles.goalText}>{goal}</Text>
          </View>
        ))} } */}

{/* 
      </ScrollView> */}
     
     <FlatList data={courseGoals} renderItem={(itemData) => {
     return(
      <View style={styles.goalItem}>
            <Text style={styles.goalText}>{itemData.item}</Text>
          </View>
     );

     }
    }
    />
     
     
      </View>
    </View>
  );
}








const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    
  },
  goalText:
  {
    color:'white',
  },

  goalsContainer: {
    flex: 5,
  },
});

