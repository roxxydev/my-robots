import {createSlice} from '@reduxjs/toolkit';
import Robot from '../../models/robot';
import {RootState} from '../store';

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
      state.robots.push(action.payload);
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
