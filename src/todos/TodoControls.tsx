import React from 'react';
import {View, ScrollView} from 'react-native';

import {TodoForm} from './todo-form/TodoForm';
import {TodoItem} from './todo-item/TodoItem';

import {Todo} from './types';
import {styles} from './styles';

interface TodoControls {
  todos: Todo[];
}

export const TodoControls = ({todos}: TodoControls) => (
  <View style={styles.controls}>
    <TodoForm />
    <ScrollView style={styles.list}>
      {todos.map(({name, description, id}) => (
        <TodoItem
          key={id}
          name={name}
          description={description}
          todoItemStyle={styles.listItem}
        />
      ))}
    </ScrollView>
  </View>
);
