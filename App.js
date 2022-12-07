import { Platform,ScrollView, StyleSheet, Text, View , TextInput, KeyboardAvoidingView, ImageBackground} from 'react-native';
import {ToggleableTimerForm,EditableTimer} from "./components"


export default function App() {
  
  return (
    <View style={styles.appContainer}>
      <View style={styles.titleContainer}>
         <Text style={styles.title}>Timers</Text>
      </View>
      <ScrollView style={styles.timerList}>
         <ToggleableTimerForm isOpen={false} />
          <EditableTimer
          id="1"
          title="Mow the lawn"
          project="House Chores"
          elapsed="8986300"
          isRunning
          />
          <EditableTimer
          id="2"
          title="Bake squash"
          project="kitchen Chores"
          elapsed="3890985"
          editFormOpen
          />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    flex:1
  },
  titleContainer:{
    paddingTop:35,
    paddingBottom:15,
    borderBottomWidth:1,
    borderBottomColor:'#D6D7DA'
  },
  title:{
    fontSize:18,
    fontWeight:'bold',
    textAlign:'center'
  },
  timerList:{
    paddingBottom:15
  }
  });