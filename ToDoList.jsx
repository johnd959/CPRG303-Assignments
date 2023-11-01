import {
StyleSheet,
Platform,
SafeAreaView,
ScrollView,
Pressable,
View,
Text,
TextInput,
Button,

} from 'react-native';

export default function ToDoList({styles})
{
  
    return(
        <SafeAreaView style={[styles.mainContainer]}>
        <ScrollView>
          <Pressable>
            <View style={[styles.task, styles.completed]}>
              <Text style={styles.taskText}>Do Laundry</Text>
            </View>
          </Pressable>
          <Pressable>
            <View style={[styles.task]}>
              <Text style={[styles.taskText]}>Do Laundry</Text>
            </View>
          </Pressable>
          <Pressable>
            <View style={[styles.task, styles.completed]}>
              <Text style={[styles.taskText]}>Do Laundry</Text>
            </View>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    )
}

const styless = StyleSheet.create({
    mainContainer : {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: Platform.OS === 'android' ? 30 : 0, 
    },
    form: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: 20,
      marginTop: 20,
      gap: 10,
    },
    task : {
      marginVertical: 5,
      padding: 10,
      backgroundColor: 'tomato',
      borderRadius: 5, 
    },
    taskText : {
      fontSize: 18,
      color: 'white',
    },
    completed : {
      backgroundColor: 'crimson'
    },
  }
);