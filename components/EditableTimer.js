import { StyleSheet, Text, View } from 'react-native'
import TimeForm from "./TimerForm"
import Timer from "./Timer"
import { useState } from 'react'
function EditableTimer({id,title,project,elapsed,isRunning,onFormSubmit}) {
  const [editFormOpen,setEditFormOpen] = useState(false);
  const handleEditPress = () =>{
    openForm();
  }
  const handleFormClose = () =>{
    closeForm();
  }
 const handleSubmit = (timer)=>{
  onFormSubmit(timer);
  closeForm();
 }

 const closeForm = ()=>{
  setEditFormOpen(false)
 }

 const openForm = () =>{
  setEditFormOpen(true)
 }

  if(editFormOpen){
    return <TimeForm id={id} title={title} project={project} onFormSubmit={handleSubmit} onFormClose={handleFormClose}  />
  }
  return (
    <Timer
    id={id}
    title={title}
    project={project}
    elapsed={elapsed}
    isRunning={isRunning}
    onEditPress={handleEditPress}
    />
  )
}

const styles = StyleSheet.create({});

export default EditableTimer