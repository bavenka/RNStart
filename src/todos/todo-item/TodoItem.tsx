import React from 'react';
import {View, Text, ViewStyle} from 'react-native';

import {styles} from './styles';

interface TodoItem {
  name: string;
  description: string | null;
  todoItemStyle?: ViewStyle;
}

export const TodoItem = ({name, description, todoItemStyle}: TodoItem) => (
  <View style={todoItemStyle}>
    <Text style={styles.name}>{name}</Text>
    <Text>{description}</Text>
  </View>
);
