import { StyleSheet, Text,TextInput, View } from 'react-native'
import TimerButton from "./TimerButton"
import React, { useState } from 'react'

const TimerForm = ({id,onFormClose,onFormSubmit,title:titleOld,project:projectOld}) => {
  const submitText = id ? 'Update' : 'Create';
  const [project,setProject] = useState(id?projectOld : '');
  const [title,setTitle] = useState(id?titleOld : '');

  const handleSubmit = ()=>{
    onFormSubmit({
      id,title,project
    })
  }
  return (
    <View style={styles.formContainer}>
     <View style={styles.attributeContainer}>
       <Text style={styles.textInputTitle}>Title</Text>
       <View style={styles.textInputContainer}>
         <TextInput
         style={styles.textInput}
         underlineColorAndroid="transparent"
         defaultValue={title}
         value={title}
         onChangeText={(title)=>setTitle(title)}
         />
       </View>
     </View>
     {/* project input */}
     <View style={styles.attributeContainer}>
      <Text style={styles.textInputTitle}>Project</Text>
       <View style={styles.textInputContainer}>
        <TextInput 
        style={styles.textInput}
        underlineColorAndroid="transparent"
        defaultValue={project}
        value={project}
        onChangeText={(project)=>setProject(project)}
        />
       </View>
     </View>
     {/* button group */}
     <View style={styles.buttonGroup}>
      <TimerButton small color="#21BA45" title={submitText} onPress={handleSubmit} />
      <TimerButton small color="#DB2828" title="Cancel" onPress={onFormClose} />
     </View>
    </View>
  )
}

export default TimerForm

const styles = StyleSheet.create({
  formContainer:{
    backgroundColor:'white',
    borderColor:'#D6D7DA',
    borderWidth:2,
    borderRadius:10,
    padding: 10,
    margin: 15,
    marginBottom:0
  },
  attributeContainer: {
marginVertical: 8,
},
textInputContainer: {
borderColor: '#D6D7DA',
borderRadius: 2,
borderWidth: 1,
marginBottom: 5,
},
textInput: {
height: 30,
padding: 5,
fontSize: 12,
},
textInputTitle: {
fontSize: 14,
fontWeight: 'bold',
marginBottom: 5,
},
buttonGroup: {
flexDirection: 'row',
justifyContent: 'space-between',
},
})