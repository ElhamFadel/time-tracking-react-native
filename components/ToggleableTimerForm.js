import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TimerForm from './TimerForm';
import TimerButton from './TimerButton';
 function ToggleableTimerForm({isOpen}) {
  return (
    <View
    style={[styles.container,!isOpen && styles.buttonPadding]}
    >
      {isOpen? <TimerForm />: <TimerButton title="+" color="black" />}
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