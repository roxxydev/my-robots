/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React, {useCallback} from 'react';
import {View, FlatList, TouchableHighlight, Platform} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {selectRobot, viewRobot} from '../../store/slice/robotSlice';
import RobotItem from '../RobotItem';
import Robot from '../../models/robot';

const RobotList = () => {
  const navigation = useNavigation();
  const {robots} = useAppSelector(selectRobot);
  const dispatch = useAppDispatch();
  const onItemClick = useCallback(
    (robotItem: Robot) => {
      dispatch(viewRobot(robotItem));
      navigation.navigate('Details');
    },
    [dispatch, navigation],
  );

  return (
    <View style={styles.container}>
      <FlatList
        ItemSeparatorComponent={
          Platform.OS !== 'android' &&
          (({highlighted}) => (
            <View style={[styles.separator, highlighted && {marginLeft: 0}]} />
          ))
        }
        data={robots}
        keyExtractor={item => item.id}
        renderItem={({item, separators}) => (
          <TouchableHighlight
            key={item.id}
            onPress={() => {
              onItemClick(item);
            }}
            onShowUnderlay={separators.highlight}
            onHideUnderlay={separators.unhighlight}>
            <RobotItem item={item} />
          </TouchableHighlight>
        )}
      />
    </View>
  );
};

export default RobotList;
