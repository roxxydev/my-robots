import React from 'react';
import {View, Text, Button} from 'react-native';
import {SvgUri} from 'react-native-svg';
import styles from './styles';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {deleteRobot, selectRobot} from '../../store/slice/robotSlice';
import {editRobotModal, setModalVisible} from '../../store/slice/modalSlice';
import {useNavigation} from '@react-navigation/native';

const RobotView = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const {robot} = useAppSelector(selectRobot);

  return (
    <View style={styles.itemContainer}>
      {robot && (
        <View>
          <View style={styles.image}>
            <SvgUri width="50%" height="50%" uri={robot.avatar} />
          </View>
          <Text style={styles.text}>{robot.id}</Text>
          <Text style={styles.text}>{robot.name}</Text>
          <Button
            title="Edit"
            onPress={() => dispatch(editRobotModal(robot))}
          />
          <Button
            title="Remove"
            onPress={() => {
              dispatch(deleteRobot({id: robot.id}));
              dispatch(setModalVisible(false));
              navigation.navigate('Home');
            }}
          />
        </View>
      )}
    </View>
  );
};

export default RobotView;
