import { ScrollView, StyleSheet, Text, View ,  KeyboardAvoidingView} from 'react-native';
import {ToggleableTimerForm,EditableTimer} from "./components"
import { useState,useEffect } from 'react';
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

  useEffect(()=>{
    const TIME_INTERVAL = 1000;
    const intervalId = setInterval(()=>{
    setTimers((prevTimers)=>{
     return prevTimers.map((timer)=>{
      const {elapsed,isRunning} = timer;
      return{
        ...timer,
        elapsed:isRunning?elapsed + TIME_INTERVAL:elapsed
      }
     })
    })
    },TIME_INTERVAL)
    return ()=>clearInterval(intervalId);
  },[])
  const handleCreateFormSubmit = (timer) =>{
     setTimers((prevTimers)=>[newTimer(timer),...prevTimers])
  }
 const handleFormSubmit = (attrs)=>{
   setTimers((prevTimers)=>{
    const timersAfterUpdate =  prevTimers.map((timer)=>{
        if (timer.id === attrs.id) {
           console.log("trueee")
          const { title, project } = attrs;
            return {
            ...timer,
            title,
            project,
            };
            }
            return timer
      })
      return timersAfterUpdate
   }
   )
 }

 const onRemoveTimer = (idTimer)=>{
    const timersUpdate = timers.filter((timer)=>timer.id !== idTimer)
    setTimers(timersUpdate)
 }

 const toggleStateIsRuning = (id)=>{
    const updateTimers = timers.map((timer)=>{
      if(timer.id == id){
        return {
          ...timer,
          isRunning:!timer.isRunning
        }
      }
      return timer
    })
    console.log(updateTimers,"hiiiiiiii")
    setTimers(updateTimers)
 }


  return (
    <View style={styles.appContainer}>
      <View style={styles.titleContainer}>
         <Text style={styles.title}>Timers</Text>
      </View>
      <KeyboardAvoidingView
      behavior='padding'
      >
      <ScrollView style={styles.timerList}>
         <ToggleableTimerForm
         onFormSubmit={handleCreateFormSubmit}
          />
         {
          timers?.map(({title,project,id,elapsed,isRunning})=>(
            <EditableTimer
            key={id}
            id={id}
            title={title}
            project={project}
            elapsed={elapsed}
            isRunning={isRunning}
            onFormSubmit={handleFormSubmit}
            onRemoveTimer={onRemoveTimer}
            changeStateTracking={toggleStateIsRuning}
          />
          ))
         }
      </ScrollView>
      </KeyboardAvoidingView>
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
