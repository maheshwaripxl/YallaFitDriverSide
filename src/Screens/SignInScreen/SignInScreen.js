import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  FONTSIZE,
  HEIGHT,
  NotoSans_Medium,
  NotoSans_SemiBold,
  WIDTH,
} from '../../Config/AppConst';
import colors from '../../Config/color.json';
// import ApiManager from '../../API/Api';

const SignInScreen = () => {
  const [inputValue, setInputValue] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  useEffect(() => {}, [inputValue]);

  // Check if the input is a valid email
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var isEmailValid = emailRegex.test(inputValue);

  // Check if the input is a valid phone number
  var phoneRegex = /^[6-9]\d{9}$/;
  var isValidNumber = phoneRegex.test(inputValue);

  const ContinueButton = () => {
    if (inputValue.length > 1 && isEmailValid && isValidNumber) {
      navigation.navigate('HomeScreen');
    } else {
      Alert.alert(
        'Invalid Input',
        'Please enter a valid email or phone number.',
      );
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text
          style={{
            fontSize: 24,
            fontFamily: NotoSans_Medium,
            color: colors.Black,
          }}>
          Sign In
        </Text>
        <Text style={styles.subheadline}>Email / Phone number</Text>

        <TextInput
          style={styles.InputField}
          value={inputValue}
          onChangeText={text => setInputValue(text)}
        />
        {inputValue.length > 0 &&
        !isEmailValid &&
        inputValue.length > 0 &&
        !isValidNumber ? (
          <Text style={{fontSize: 12, color: 'red'}}>
            Please Enter Valid Email/Phone Number
          </Text>
        ) : null}

        <Text style={styles.subheadline}>Password</Text>

        <TextInput
          style={styles.InputField}
          onChangeText={text => setPassword(text)}
          value={password}
        />
        {password.length > 0 && password.length < 6 ? (
          <Text style={{fontSize: 12, color: 'red'}}>Wrong Password</Text>
        ) : null}

        <TouchableOpacity
          // disabled={inputValue ? "#51E3B7" : "#757575"}
          onPress={() => ContinueButton()}
          style={styles.button}>
          <Text
            style={{
              fontFamily: NotoSans_SemiBold,
              fontSize: FONTSIZE(2),
              color: colors.ButtonNameColor,
            }}>
            Sign In
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: HEIGHT(2),
    backgroundColor: colors.White,
  },

  subheadline: {
    fontSize: FONTSIZE(1.8),
    marginTop: HEIGHT(2),
    color: colors.Gray9,
    fontFamily: NotoSans_Medium,
  },

  InputField: {
    marginTop: HEIGHT(2),
    borderRadius: 12,
    borderWidth: 1,
    paddingLeft: 12,
    color: colors.Black,
    borderColor: colors.Gray,
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: WIDTH(93),
    height: HEIGHT(7),
    borderRadius: 8,
    backgroundColor: colors.AuroraGreen,
    color: colors.ButtonNameColor,
    marginTop: HEIGHT(6),
  },

  forgot: {
    fontSize: FONTSIZE(1.8),
    marginTop: HEIGHT(2),
    fontFamily: NotoSans_Medium,
    right: 3,
    color: colors.MollyRobins,
  },
});
