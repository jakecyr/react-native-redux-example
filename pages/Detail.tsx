import React from 'react';
import { Text, View } from 'react-native';
import { Todo } from '../store/todo/model';
import { selectCurrentTodo, selectTodos } from '../store/todo/selectors';

export default () => {
    const todo: Todo | undefined = selectCurrentTodo();

    return (
        <View>
            <Text>{todo?.title}</Text>
            <Text>{todo?.dateDue.toISOString().substring(0, 10)}</Text>
            <Text>{todo?.complete ? 'Complete' : 'Not Complete'}</Text>
        </View>
    );
};
