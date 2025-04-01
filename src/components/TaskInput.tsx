import React, { useEffect, useState } from "react";
import { Text, View, FlatList, StyleSheet, TextInput, Pressable } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
type storageValue = {
    key: string,
    data: string
}
// console.log('TaskInput');
const STORAGE_KEY = 'taskList';
const useTaskInput = () => {
    const [task, setTask] = useState<storageValue[]>([]);
    const [inputText, setInputText] = useState<string>(''); 

    useEffect(()=>{

        const loadTasks = async()=>{
            try{
                const savedTasks = await AsyncStorage.getItem(STORAGE_KEY)
                if(savedTasks){
                    const savedTasksParsed = JSON.parse(savedTasks);
                    setTask(savedTasksParsed);
                }else{
                    console.log('No tasks found in storage');
                }
            }catch(e){
                console.log('Error fetching tasks', e);
            }
        }
        loadTasks();
    }, [])

    const saveToStorage = async (newTask: storageValue[]) => {
        try{
            await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newTask));
            console.log('Task saved to storage');
        }catch(e){
            console.log('Error saving to storage', e);
        }
    }   

    const handleOnSubmit = () => {
        // makes sure no empty tasks are there in the list
        if(inputText === '') {
            return;
        }
        const dateNow = new Date();
        const id = dateNow.getTime().toString();
        setTask(task.concat([{key: id, data: inputText}]));
        saveToStorage(task.concat([{key: id, data: inputText}]));
        setInputText(''); // Clear input after adding task
    }

    const handleOnDelete = (key: string) => {
        const newTask = task.filter(task => task.key !== key);  
        setTask(newTask);
        saveToStorage(newTask);
    }

    return {task, inputText, handleOnSubmit, setInputText, setTask, saveToStorage, handleOnDelete};
}

const TaskInput = ({inputText, handleOnSubmit, setInputText}: any) => {
    return (
        <View style={styles.container}>
            {(()=>{
                console.log('code is getting to the textInput');
                return null;
            })()}
            <TextInput 
                placeholder='Enter the task' 
                style={styles.inputBox}
                autoFocus={false}
                keyboardType='default'
                placeholderTextColor='#888'
                cursorColor={'#3498db'}
                value={inputText}
                onChangeText={setInputText}
            />
            <Pressable
                onPress={handleOnSubmit}
                style={({pressed}) => [
                    styles.addButton,
                    pressed ? styles.buttonPressed : null
                ]}
            >
                <Text style={styles.buttonText}>Add Task</Text>
            </Pressable>
            {(()=>{
                console.log('code is getting to the pressable');
                return null;
            })()}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#f5f5f5',
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        marginHorizontal: 16,
        marginVertical: 8,
    },
    inputBox: {
        height: 50,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        paddingHorizontal: 16,
        fontSize: 16,
        backgroundColor: '#fff',
        marginBottom: 12,
        color: '#333',
    },
    addButton: {
        backgroundColor: '#3498db',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonPressed: {
        backgroundColor: '#2980b9',
        transform: [{ scale: 0.98 }],
    },
    buttonText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 16,
    },
});

export default TaskInput;
export { useTaskInput };