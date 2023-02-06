import {getUseField} from '@utils';
import {Formik} from 'formik';
import React from 'react';
import {Button, Text, TextInput, View} from 'react-native';

export const EXFormik = () => {
  const initFormik = {
    input: '',
    search: '',
  };
  return (
    <View>
      <Text>EXFormik</Text>
      <Formik
        initialValues={initFormik}
        validateOnChange={false}
        enableReinitialize
        onSubmit={values => console.log(values)}>
        {({values, handleChange, handleSubmit}) => (
          <View>
            <TextInput
              onChangeText={handleChange('input')}
              value={values.input}
              style={{
                borderWidth: 1,
                height: 50,
                backgroundColor: 'red',
                margin: 20,
              }}
            />
            <ComponentOther />
            <Button title="Submit" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
};

const ComponentOther = () => {
  const {value: valueInput} = getUseField('input');
  const {value: valueSearch, setValue: setValueSearch} = getUseField('search');

  return (
    <View>
      <TextInput
        onChangeText={text => setValueSearch(text)}
        value={valueSearch}
        style={{
          borderWidth: 1,
          height: 50,
          backgroundColor: 'green',
          margin: 20,
        }}
      />
      <Text>Input in Component: {valueInput}</Text>
    </View>
  );
};
