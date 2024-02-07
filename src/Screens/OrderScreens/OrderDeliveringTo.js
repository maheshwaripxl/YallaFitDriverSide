import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {
  FONTSIZE,
  HEIGHT,
  NotoSans_Bold,
  NotoSans_Medium,
  WIDTH,
} from '../../Config/AppConst';
import colors from '../../Config/color.json';
import {useNavigation} from '@react-navigation/native';
import {Image} from 'react-native';

const OrderDeliveringTo = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.forgotHeadline}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingTop: HEIGHT(2),
            paddingBottom: HEIGHT(1.5),
          }}>
          <FontAwesome5
            name="long-arrow-alt-left"
            color="black"
            onPress={() => navigation.goBack()}
            style={{fontSize: FONTSIZE(2.1)}}
          />
          <Text
            style={{
              fontSize: 16,
              fontFamily: NotoSans_Medium,
              color: colors.Black,
              paddingLeft: WIDTH(2),
            }}>
            Delivering to
          </Text>
        </View>
      </View>

      <View style={{padding: WIDTH(3)}}>
        <View style={{flexDirection: 'row', gap: 12}}>
          <View>
            <Image source={require('../../Images/profile2.png')} />
          </View>
          <View>
            <Text style={{fontSize: FONTSIZE(2.1), color: colors.Black}}>
              Peter Pan
            </Text>
            <Text
              style={{
                fontSize: FONTSIZE(1.6),
                color: colors.Black,
                letterSpacing: 0.7,
              }}>
              Order id: #RD071
            </Text>
          </View>
        </View>
        <View>
          <Text style={{color: colors.Black}}>
            SM readers, apartment 02 salah Pin 947359
          </Text>
        </View>
        <Text style={{color: colors.SplashScreenColor}}>Home address</Text>
        <View>
          <Text style={{color: colors.Black}}>+1224567890</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: WIDTH(2),
          }}>
          <View>
            <Text
              style={{
                color: colors.Black,
                fontSize: FONTSIZE(2.1),
                fontFamily: NotoSans_Bold,
              }}>
              Diet:
            </Text>
            <View style={styles.box}>
              <Text style={{color: colors.Black, fontSize: FONTSIZE(2)}}>
                Keto
              </Text>
            </View>
          </View>

          <View>
            <Text
              style={{
                color: colors.Black,
                fontSize: FONTSIZE(2.1),
                fontFamily: NotoSans_Bold,
              }}>
              Meal plan:
            </Text>
            <View style={styles.box}>
              <Text style={{color: colors.Black, fontSize: FONTSIZE(2)}}>
                Breakfast
              </Text>
            </View>
          </View>
        </View>

        <Text style={{color: colors.Black, fontSize: FONTSIZE(2)}}>Payment: COD</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={{color: colors.Black, fontSize: FONTSIZE(2.1)}}>2.5 OMR Collected</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrderDeliveringTo;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: colors.White
  }, 

  forgotHeadline: {
    paddingLeft: WIDTH(3),
    width: WIDTH(100),
    height: HEIGHT(9),
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 4},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },

  box: {
    height: HEIGHT(7),
    width: WIDTH(43.5),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: HEIGHT(1),
    borderWidth: 1,
    borderColor: colors.Gray,
    borderRadius: 10,
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: WIDTH(87),
    height: HEIGHT(7),
    borderRadius: 12,
    backgroundColor: '#E1E1E1',
    color: colors.ButtonNameColor,
    marginTop: HEIGHT(2),
  }
});
