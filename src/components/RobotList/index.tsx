import React from 'react';
import {View, FlatList} from 'react-native';
import styles from './styles';
import {useAppSelector} from '../../store/hooks';
import {selectRobot} from '../../store/slice/robots';
import RobotItem from '../RobotItem';

const RobotList = () => {
  const data = useAppSelector(selectRobot);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => <RobotItem item={item} />}
      />
    </View>
  );
};

export default RobotList;
