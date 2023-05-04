import React, {useEffect, useState} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import styles from './styles';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {addRobot, updateRobotName} from '../../store/slice/robotSlice';
import {selectModal, setModalVisible} from '../../store/slice/modalSlice';
import {useForm, Controller} from 'react-hook-form';

const RobotAddEdit = () => {
  const robotToEdit = useAppSelector(selectModal);
  const [title, setTitle] = useState<string>();
  const dispatch = useAppDispatch();
  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm({
    defaultValues: {
      name: robotToEdit.robotItem ? robotToEdit.robotItem.name : undefined,
    },
  });

  const onSubmit = (data: {name?: string}) => {
    if (robotToEdit.robotItem) {
      dispatch(
        updateRobotName({
          id: robotToEdit.robotItem.id,
          name: data.name,
        }),
      );
    } else {
      dispatch(addRobot({name: data.name}));
    }
    dispatch(setModalVisible(false));
  };

  useEffect(() => {
    if (robotToEdit.robotItem) {
      setTitle('Edit Robot');
    } else {
      setTitle('Add Robot');
    }
  }, [robotToEdit.robotItem]);

  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            placeholder="Robot Name"
            // onChangeText={text => setName(text)}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="name"
      />
      {errors.name && <Text>Name is required.</Text>}
      <Button title="SAVE" onPress={handleSubmit(onSubmit)} />
      <Button
        title="CANCEL"
        onPress={() => {
          dispatch(setModalVisible(false));
        }}
      />
    </View>
  );
};

export default RobotAddEdit;
