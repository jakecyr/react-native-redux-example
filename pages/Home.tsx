import React, { useEffect } from 'react';
import { FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import Separator from '../components/Separator';
import { MockTodoService } from '../services/MockTodoService';
import { loadTodos, setCurrentTodo } from '../store/todo/actions';
import { Todo } from '../store/todo/model';
import { selectTodos } from '../store/todo/selectors';

export default ({ navigation }: any) => {
    const todos: Todo[] = selectTodos();
    const dispatch = useDispatch();

    useEffect(() => {
        MockTodoService
            .getTodos()
            .then((todos: Todo[]) => {
                dispatch(
                    loadTodos(todos)
                );
            })
            .catch((error) => {
                console.error('Error loading todos', error);
            });
    }, []);

    const handleTodoPress = (todo: Todo) => {
        dispatch(setCurrentTodo(todo));
        navigation.navigate('Detail');
    };

    return (
        <FlatList
            data={todos}
            ItemSeparatorComponent={Separator}
            renderItem={({ item }) => (
                <TouchableOpacity style={styles.item} onPress={() => handleTodoPress(item)}>
                    <Text>{item.title}</Text>
                </TouchableOpacity>
            )}
        />
    );
};

const styles = StyleSheet.create({
    item: {
        paddingVertical: 25,
        paddingHorizontal: 25,
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
    },
});
