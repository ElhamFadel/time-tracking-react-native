import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TimerButton from './TimerButton'
import {milliSecondToHuman} from "../utils"

const Timer = ({title,project,elapsed,onEditPress}) => {
  // function millescond to humman
  const elapsedString = milliSecondToHuman(elapsed);
  return (
    <View style={styles.timerContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text>{project}</Text>
      <Text style={styles.elapsedTime}>{elapsedString}</Text>
      <View style={styles.buttonGroup}>
        <TimerButton color="blue"  small title="Edit" onPress={onEditPress} />
        <TimerButton color="blue" small title="Remove" />
      </View>
      <TimerButton color="#21BA45" title="Start" />
    </View>
  )
}

export default Timer

const styles = StyleSheet.create({
timerContainer: {
backgroundColor: 'white',
borderColor: '#d6d7da',
borderWidth: 2,
borderRadius: 10,
padding: 15,
margin: 15,
marginBottom: 0,
},
title: {
fontSize: 14,
fontWeight: 'bold',
},
elapsedTime: {
  fontSize: 26,
fontWeight: 'bold',
textAlign: 'center',
paddingVertical: 15,
},
buttonGroup: {
flexDirection: 'row',
justifyContent: 'space-between',
},
});