import React from 'react';
import {connect} from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {loginUser} from '../store/actions/authActions';

const SigninSchema = Yup.object().shape({
  // eslint-disable-next-line prettier/prettier
  email: Yup.string().email('Invalid email').required('Email is Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Password is Required'),
});

const SignIn = ({navigation, loginUser}) => {
  //   console.log(props.loginUser({}));
  return (
    <>
      <View style={styles.container}>
        <Formik
          initialValues={{email: '', password: ''}}
          validationSchema={SigninSchema}
          // eslint-disable-next-line prettier/prettier
          onSubmit={(values) => {
            loginUser({user: values});
          }}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View>
              <TextInput
                placeholder="Enter Email..."
                style={styles.input}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                placeholderTextColor="#4e4f3e"
              />
              <Text style={styles.errorText}>
                {errors.email && touched.email && errors.email}
              </Text>
              <TextInput
                placeholder="Enter Password..."
                secureTextEntry={true}
                style={styles.input}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                placeholderTextColor="#4e4f3e"
              />
              <Text style={styles.errorText}>
                {errors.password && touched.password && errors.password}
              </Text>
              <TouchableOpacity
                onPress={handleSubmit}
                style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Sigin</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.textAlignCenter}>
                  Don't have an account? sign up here
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 300,
    borderColor: '#4e4f3e',
    borderWidth: 2,
    padding: 10,
  },
  buttonContainer: {alignItems: 'center', marginBottom: 10},
  buttonText: {
    backgroundColor: '#f4511e',
    width: 70,
    textAlign: 'center',
    padding: 10,
    borderRadius: 5,
  },
  errorText: {
    marginBottom: 20,
    paddingLeft: 5,
    color: '#f20a0a',
  },
  textAlignCenter: {
    textAlign: 'center',
  },
});

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapActionsToProps = {
  loginUser,
};

const SignInComponent = connect(mapStateToProps, mapActionsToProps)(SignIn);

export default SignInComponent;
