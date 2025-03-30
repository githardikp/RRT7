import React from "react";
import { Text, View, FlatList, StyleSheet, Pressable } from "react-native";
import { useTaskInput } from "./TaskInput";
import { AntDesign } from '@expo/vector-icons';

type storageValue={
    key: string,
    data: string
}

const TaskList = ({ taskThatNeedsToBeDisplayed, idcDeleteIt }: { taskThatNeedsToBeDisplayed: storageValue[], idcDeleteIt: (key: string) => void }) => {
  return (
    <View>
        <FlatList
            data={taskThatNeedsToBeDisplayed}
            renderItem={({item}) => (
                <View style={styles.taskItem}>
                    <Text style={styles.taskText}>{item.data}</Text>
                    <Pressable
                        onPress={() => idcDeleteIt(item.key)}
                        style={({ pressed }) => [
                            styles.deleteButton,
                            pressed && styles.deleteButtonPressed
                        ]}
                    >
                        <Text style={styles.deleteButtonText}>✕</Text>
                    </Pressable>
                </View>
            )}
            keyExtractor={(item) => item.key}
            contentContainerStyle={styles.flatlistContent}
        />

    </View>
  );
};
const styles = StyleSheet.create({
    taskItem: {
        padding: 15,
        borderRadius: 10,
        marginBottom: 12,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
    },
    taskText: {
        fontSize: 16,
        color: '#333',
        flex: 1,
    },
    deleteButton: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: '#ff4444',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
    },
    deleteButtonPressed: {
        backgroundColor: '#cc3333',
    },
    deleteButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    flatlistContent: {
        paddingBottom: 20,
    }
});
export default TaskList;