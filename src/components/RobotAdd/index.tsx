import React, {useEffect, useState} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import styles from './styles';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {addRobot, updateRobotName} from '../../store/slice/robotSlice';
import {selectModal, setModalVisible} from '../../store/slice/modalSlice';

const RobotAddEdit = () => {
  const robotToEdit = useAppSelector(selectModal);
  const [name, setName] = useState<string>();
  const [title, setTitle] = useState<string>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (robotToEdit.robotItem) {
      setName(robotToEdit.robotItem.name);
      setTitle('Edit Robot');
    } else {
      setTitle('Add Robot');
    }
  }, [robotToEdit.robotItem]);

  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <TextInput
        value={name}
        placeholder="name"
        onChangeText={text => setName(text)}
      />
      <Button
        title="SAVE"
        onPress={() => {
          if (robotToEdit.robotItem) {
            dispatch(
              updateRobotName({
                id: robotToEdit.robotItem.id,
                name,
              }),
            );
          } else {
            dispatch(addRobot({name}));
          }
          dispatch(setModalVisible(false));
        }}
      />
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
