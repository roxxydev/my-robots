import React from 'react';
import {View, Text, Button} from 'react-native';
import {Svg, SvgUri} from 'react-native-svg';
import styles from './styles';
import Robot from '../../models/robot';
import {useAppDispatch} from '../../store/hooks';
import {deleteRobot} from '../../store/slice/robotSlice';
import {editRobotModal} from '../../store/slice/modalSlice';

interface RobotItemProps {
  item: Robot;
}

const RobotItem = ({item}: RobotItemProps) => {
  const dispatch = useAppDispatch();

  return (
    <View style={styles.itemContainer}>
      <SvgUri width="100%" height="100%" uri={item.avatar} />
      <Text>{item.id}</Text>
      <Text>{item.name}</Text>
      <Button title="Edit" onPress={() => dispatch(editRobotModal(item))} />
      <Button
        title="Remove"
        onPress={() => dispatch(deleteRobot({id: item.id}))}
      />
    </View>
  );
};

export default RobotItem;
