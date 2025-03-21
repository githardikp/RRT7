import React from "react";
import { View, Text, StyleSheet, ScrollView, TextInput } from "react-native";
// import { TextInput } from "react-native-gesture-handler";
import Animated, { useAnimatedKeyboard, useAnimatedStyle } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";





const HomeScreen = ()=>{
    return(
        <View style={styles.conatiner}>
            <Text>Home Screen</Text>
            <ScrollView style={styles.inputContainer}>
                    <TextInput 
                        placeholder='Enter the task' 
                        style={styles.inputBox}
                        autoFocus={true}
                        keyboardType='default'
                        placeholderTextColor='black'
                    />
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    conatiner:{
        padding: 40,
        flex:1,
        // backgroundColor: 'red',
    },
    inputContainer:{
        flex:1,
        justifyContent:'center',
        // alignItems:'center',
        // backgroundColor: 'blue',
    },
    inputBox:{
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 50,
        
    }
});
export default HomeScreen;