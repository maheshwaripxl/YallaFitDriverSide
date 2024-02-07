import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../../Config/color.json';
import {FONTSIZE, HEIGHT, NotoSans_Bold, WIDTH} from '../../Config/AppConst';

const DeliveredMSGScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../Images/ThankyouLogo.png')}
        style={{marginBottom: HEIGHT(3)}}
      />
      <View
        style={{
          width: WIDTH(40),
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            textAlign: 'center',
            color: colors.Black,
            fontSize: FONTSIZE(2),
            fontFamily: NotoSans_Bold,
          }}>
          Order Delivered Successfully !
        </Text>
      </View>
    </View>
  );
};

export default DeliveredMSGScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.White,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
