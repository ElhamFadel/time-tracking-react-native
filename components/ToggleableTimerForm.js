import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import TimerForm from './TimerForm';
import TimerButton from './TimerButton';
 function ToggleableTimerForm() {
  const [isOpen,setIsOpen] = useState(false);
  return (
    <View
    style={[styles.container,!isOpen && styles.buttonPadding]}
    >
      {isOpen? <TimerForm />: <TimerButton title="+" color="black" onPress={()=>setIsOpen(true)} />}
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    paddingVertical:10
  },
  buttonPadding:{
    paddingHorizontal:15
  }
})

export default ToggleableTimerForm;