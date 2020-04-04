import React from 'react';
import {StyleSheet, Modal, View, ActivityIndicator} from 'react-native';

const FullScreenLoader = ({loading}) => {
  return (
    <Modal transparent animationType="none" visible={loading}>
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator
            size="large"
            animating={loading}
            color={'#f20a0a'}
          />
        </View>
      </View>
    </Modal>
  );
};

export default FullScreenLoader;

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  activityIndicatorWrapper: {
    backgroundColor: '#4e4f3e',
    height: 100,
    width: 100,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
