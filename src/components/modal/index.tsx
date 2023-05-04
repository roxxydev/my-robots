import React, {useState} from 'react';
import {Modal, View} from 'react-native';
import RobotAddEdit from '../RobotAddEdit';
import Robot from '../../models/robot';
import styles from './styles';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {selectModal, setModalVisible} from '../../store/slice/modalSlice';

const AppModal = () => {
  const modalItem = useAppSelector(selectModal);
  const dispatch = useAppDispatch();

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalItem.visible}
        onRequestClose={() => {
          dispatch(setModalVisible(false));
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <RobotAddEdit />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default AppModal;
