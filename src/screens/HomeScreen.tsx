import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import Animated, { useAnimatedKeyboard, useAnimatedStyle } from "react-native-reanimated";

const HomeScreen = ()=>{
    const keyboard = useAnimatedKeyboard();
    const translateStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: -300}],
        };
    })
    return(
        <View style={styles.container}>
            {/* <Text>Home Screen</Text> */}
            <Animated.View style={[styles.inputContainer, translateStyle]}>
                <TextInput 
                    placeholder='Enter the task' 
                    style={styles.inputBox}
                    autoFocus={true}
                    keyboardType='default'
                    placeholderTextColor='black'
                    // selectionColor={'black'}
                    cursorColor={'black'}
                />
            </Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding:40, 
        paddingTop: 60,
        flex: 1,
    },
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        
    },
    inputBox: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 50,
        padding: 10,
        color: 'black',
    }
});

export default HomeScreen;