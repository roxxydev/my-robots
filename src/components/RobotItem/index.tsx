import React from 'react';
import {View, Text, Button} from 'react-native';
import styles from './styles';
import {useAppDispatch} from '../../store/hooks';
import Robot from '../../models/robot';
import {deleteRobot} from '../../store/slice/robots';

interface RobotItemProps {
  item: Robot;
}

const RobotItem = ({item}: RobotItemProps) => {
  const dispatch = useAppDispatch();

  return (
    <View style={styles.itemContainer}>
      <Text>{item.id}</Text>
      <Text>{item.name}</Text>
      <Button
        title="Remove"
        onPress={() => dispatch(deleteRobot({id: item.id}))}
      />
    </View>
  );
};

export default RobotItem;
