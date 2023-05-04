import {createSlice} from '@reduxjs/toolkit';
import Robot from '../../models/robot';
import {RootState} from '../store';
import {ModalType} from '../../models/const';

export interface ModalState {
  visible: boolean;
  modalType: ModalType;
  robotItem?: Robot;
}

const initialState: ModalState = {
  visible: false,
  modalType: ModalType.Add,
};

export const ModalSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addRobotModal: state => {
      state.robotItem = undefined;
      state.modalType = ModalType.Add;
      state.visible = true;
    },
    editRobotModal: (state, action) => {
      state.robotItem = action.payload;
      state.modalType = ModalType.Edit;
      state.visible = true;
    },
    setModalVisible: (state, action) => {
      state.visible = action.payload;
      state.robotItem = undefined;
      state.modalType = ModalType.Add;
    },
  },
});

export const {addRobotModal, editRobotModal, setModalVisible} =
  ModalSlice.actions;
export const selectModal = (state: RootState) => state.modal;
export default ModalSlice.reducer;
