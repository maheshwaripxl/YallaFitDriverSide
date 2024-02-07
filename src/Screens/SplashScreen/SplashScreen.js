import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import colors from '../../Config/color.json';
import {
  FONTSIZE,
  HEIGHT,
  NotoSans_Bold,
  NotoSans_Medium,
  WIDTH,
} from '../../Config/AppConst';
import {useNavigation} from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();

  const GetStarted = () => {
    navigation.navigate('SignInScreen')
    setTimeout(() => {
      navigation.navigate('SignInScreen')
    }, 200);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../Images/YalaLogo.png')}
        style={{marginBottom: HEIGHT(4)}}
      />
      <Image
        source={require('../../Images/splashScreenImg.png')}
        style={styles.image}
      />
      <TouchableOpacity onPress={() => GetStarted()} style={styles.button}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.SplashScreenColor,
  },

  button: {
    justifyContent: 'center',
    padding: HEIGHT(0.5),
    alignItems: 'center',
    textAlign: 'center',
    width: WIDTH(85),
    height: HEIGHT(8),
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: colors.Black,
    position: 'absolute',
    bottom: HEIGHT(5),
  },

  buttonText: {
    fontSize: FONTSIZE(2.3),
    fontFamily: NotoSans_Bold,
    textAlign: 'center',
    color: colors.White,
  },
});
