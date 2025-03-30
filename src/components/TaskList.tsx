import React from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";
type storageValue={
    key: string,
    data: string
}
const TaskList = ({ taskThatNeedsToBeDisplayed }: { taskThatNeedsToBeDisplayed: storageValue[] }) => {
  return (
    <View>
        {(()=>{
            console.log('before flatlist');
            return null;
        })()}
        <FlatList
            data={taskThatNeedsToBeDisplayed}
            renderItem={({item}) => (
                <View style={styles.taskItem}>
                    <Text style={styles.taskText}>{item.data}</Text>
                </View>
            )}
            keyExtractor={(item) => item.key}
            contentContainerStyle={styles.flatlistContent}
        />
        {(()=>{
            console.log('after flatlist');
            return null;
        })()}
    </View>
  );
};
const styles = StyleSheet.create({
    taskItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    taskText: {
        fontSize: 16,
        color: '#333',
    },
    flatlistContent: {
        paddingBottom: 20,
    }
});
export default TaskList;