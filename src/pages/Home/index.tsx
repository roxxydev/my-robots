import * as React from 'react';
import {Button} from 'react-native';
import RobotList from '../../components/RobotList';
import Container from '../../components/Container';
import {useAppDispatch} from '../../store/hooks';
import {addRobotModal} from '../../store/slice/modalSlice';

const HomeScreen = (): JSX.Element => {
  const dispatch = useAppDispatch();

  return (
    <Container>
      <Button title="Add Robot" onPress={() => dispatch(addRobotModal())} />
      <RobotList />
    </Container>
  );
};

export default HomeScreen;
