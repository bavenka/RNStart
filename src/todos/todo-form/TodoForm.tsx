import React from 'react';
import {Button} from 'react-native';
import {Formik, FormikValues} from 'formik';
import {DataStore} from 'aws-amplify';

import {FormTextInput} from '../../components/form/FormTextInput';
import {Todo} from '../../models';

import {styles} from './styles';

type FormValues = {
  name: string;
  description: string;
};

const initialState = {name: '', description: ''};

async function onSubmit(todo: FormValues, {resetForm}: FormikValues) {
  try {
    await DataStore.save(new Todo({...todo}));
    resetForm(initialState);
  } catch (err) {
    console.log('error creating todo:', err);
  }
}

export const TodoForm = () => {
  return (
    <Formik initialValues={initialState} onSubmit={onSubmit}>
      {({handleSubmit}) => (
        <>
          <FormTextInput
            fieldName="name"
            placeholder="Name"
            inputStyle={styles.input}
          />
          <FormTextInput
            fieldName="description"
            placeholder="Description"
            inputStyle={styles.input}
          />
          <Button title="Create Todo" onPress={handleSubmit} />
        </>
      )}
    </Formik>
  );
};
