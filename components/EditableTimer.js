import { StyleSheet, Text, View } from 'react-native'
import TimeForm from "./TimerForm"
import Timer from "./Timer"
import React from 'react'
function EditableTimer({id,title,project,elapsed,editFormOpen,isRunning}) {
  if(editFormOpen){
    return <TimeForm id={id} title={title} project={project} />
  }
  return (
    <Timer
    id={id}
    title={title}
    project={project}
    elapsed={elapsed}
    isRunning={isRunning}
    />
  )
}

const styles = StyleSheet.create({});

export default EditableTimer