import { StyleSheet, Text, View } from 'react-native'
import TimeForm from "./TimerForm"
import Timer from "./Timer"
import { useState } from 'react'
function EditableTimer({id,title,project,elapsed,isRunning}) {
  const [editFormOpen,setEditFormOpen] = useState(false);
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