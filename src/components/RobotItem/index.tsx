import React from 'react';
import {View, Text} from 'react-native';
import {SvgUri} from 'react-native-svg';
import styles from './styles';
import Robot from '../../models/robot';

interface RobotItemProps {
  item: Robot;
}

const RobotItem = ({item}: RobotItemProps) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.image}>
        <SvgUri width="100%" height="100%" uri={item.avatar} />
      </View>
      <Text style={styles.text}>{item.id}</Text>
      <Text style={styles.text}>{item.name}</Text>
    </View>
  );
};

export default RobotItem;
