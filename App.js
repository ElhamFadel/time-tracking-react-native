import { Platform,ScrollView, StyleSheet, Text, View , TextInput, KeyboardAvoidingView, ImageBackground} from 'react-native';
import {ToggleableTimerForm,EditableTimer} from "./components"
import { useState } from 'react';
import 'react-native-get-random-values';
import {newTimer} from "./utils"
import { v4 as uuidv4 } from 'uuid';
const mockTimers = [
  {
title: 'Mow the lawn',
project: 'House Chores',
id: uuidv4(),
elapsed: 5456099,
isRunning: true,
},
{
title: 'Bake squash',
project: 'Kitchen Chores',
id: uuidv4(),
elapsed: 1273998,
isRunning: false,
}
]
export default function App() {
  const [timers,setTimers] = useState(mockTimers);
  const handleCreateFormSubmit = (timer) =>{
     setTimers((prevTimers)=>[newTimer(timer),...prevTimers])
  }
 const handleFormSubmit = (attrs)=>{
   setTimers((prevTimers)=>{
      prevTimers.map((timer)=>{
        if (timer.id === attrs.id) {
          const { title, project } = attrs;
            return {
            ...timer,
            title,
            project,
            };
            }
            return timer
      })
   })
 }
  return (
    <View style={styles.appContainer}>
      <View style={styles.titleContainer}>
         <Text style={styles.title}>Timers</Text>
      </View>
      <ScrollView style={styles.timerList}>
         <ToggleableTimerForm
         onFormSubmit={handleCreateFormSubmit}
          />
         {
          timers.map(({title,project,id,elapsed,isRunning})=>(
            <EditableTimer
            key={id}
            id={id}
            title={title}
            project={project}
            elapsed={elapsed}
            isRunning={isRunning}
            onFormSubmit={handleFormSubmit}
          />
          ))
         }
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
