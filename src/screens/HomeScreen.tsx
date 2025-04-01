import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Pressable, FlatList } from "react-native";
import Animated, { useAnimatedKeyboard, useAnimatedStyle } from "react-native-reanimated";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from '@expo/vector-icons';
import TaskInput, {useTaskInput} from "../components/TaskInput";
import TaskList from "../components/TaskList";
type storageValue={
    key: string,
    data: string
}

const HomeScreen = ()=>{
    const {task, inputText, handleOnSubmit, setInputText, handleOnDelete} = useTaskInput(); 

    return(
        <View style={styles.container}>

            <TaskInput
                inputText={inputText}
                handleOnSubmit={handleOnSubmit}
                setInputText={setInputText}
            />

            <SafeAreaView style={styles.listContainer}>
                <TaskList 
                    taskThatNeedsToBeDisplayed={task}
                    idcDeleteIt={handleOnDelete}
                />
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20, 
        paddingTop: 60,
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    inputWithButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    inputBox: {
        flex: 1,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 25,
        padding: 15,
        paddingHorizontal: 20,
        color: 'black',
        backgroundColor: 'white',
        fontSize: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    addButton: {
        marginLeft: 10,
        backgroundColor: '#0077cc',
        borderRadius: 25,
        paddingVertical: 12,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,
    },
    buttonPressed: {
        backgroundColor: '#005999',
        transform: [{ scale: 0.98 }],
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
        marginRight: 5,
    },
    listContainer: {
        flex: 1,
        // backgroundColor: 'red',
    },
    flatlistContent: {
        paddingBottom: 20,
    },
    taskItem: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        marginBottom: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
    },
    taskText: {
        fontSize: 16,
        color: '#333',
    }
});

export default HomeScreen;