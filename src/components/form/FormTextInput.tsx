import React from 'react';
import {useField} from 'formik';
import {TextInput, ViewStyle} from 'react-native';

interface FormTextInput {
  fieldName: string;
  placeholder: string;
  inputStyle?: ViewStyle;
}

export const FormTextInput = ({
  fieldName,
  placeholder,
  inputStyle,
}: FormTextInput) => {
  const [{value, onChange}] = useField(fieldName);
  return (
    <TextInput
      style={inputStyle}
      value={value}
      onChangeText={onChange(fieldName)}
      placeholder={placeholder}
    />
  );
};
