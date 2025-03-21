import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SettingScreen = ()=>{
    return(
        <View style={styles.conatiner}>
            <Text>Setting Screen</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    conatiner:{
        paddingTop: 60,
    }
});
export default SettingScreen;