import 'react-native-get-random-values';
import {createSlice} from '@reduxjs/toolkit';
import Robot from '../../models/robot';
import {RootState} from '../store';
import {v4 as uuid} from 'uuid';
import {createAvatar} from '@dicebear/core';
import {bottts} from '@dicebear/collection';

export interface RobotState {
  robots: Robot[];
}

const initialState: RobotState = {
  robots: [],
};

export const RobotSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addRobot: (state, action) => {
      const robotId = uuid();
      const avatar = createAvatar(bottts, {
        seed: robotId,
      });
      const dataUri = avatar.toDataUriSync();
      state.robots.push({
        id: robotId,
        name: action.payload.name,
        avatar: dataUri,
      });
    },
    deleteRobot: (state, action) => {
      state.robots = state.robots.filter(
        (robot: Robot) => robot.id !== action.payload.id,
      );
    },
    updateRobotName: (state, action) => {
      state.robots.map((robot: Robot) => {
        if (robot.id === action.payload.id) {
          robot.name = action.payload.name;
        }
      });
    },
  },
});

export const {addRobot, deleteRobot, updateRobotName} = RobotSlice.actions;
export const selectRobot = (state: RootState) => state.robot.robots;
export default RobotSlice.reducer;
