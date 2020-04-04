import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {connect} from 'react-redux';
import {logOut} from '../store/actions/authActions';

const Home = ({logOut, auth}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>User: {auth.user.email}</Text>
      <Button title="Logout" onPress={() => logOut()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginBottom: 20,
  },
});

const mapStateToProps = (state) => {
  return {auth: state.auth};
};

const mapActionsToProps = {
  logOut,
};

const HomeComponent = connect(mapStateToProps, mapActionsToProps)(Home);

export default HomeComponent;
