import React, {useEffect, useState} from 'react';
import {DataStore} from '@aws-amplify/datastore';

import {Todo as TodoModel} from '../models';
import {Todo} from './types';

import {TodoControls} from './TodoControls';

export const TodosContainer = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetchTodos();

    const subscription = DataStore.observe(TodoModel).subscribe(() =>
      fetchTodos(),
    );
    return () => {
      subscription.unsubscribe();
    };
  }, [todos]);

  async function fetchTodos() {
    try {
      const todosList = (await DataStore.query(TodoModel)) as Todo[];
      setTodos(todosList);
    } catch (err) {
      console.log('error fetching todos:', err);
    }
  }

  return <TodoControls todos={todos} />;
};
