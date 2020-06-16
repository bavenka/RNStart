import React from 'react';
import {withAuthenticator} from 'aws-amplify-react-native';

import {TodosContainer} from './todos/TodosContainer';

const App = () => {
  return <TodosContainer />;
};

export default withAuthenticator(App);
