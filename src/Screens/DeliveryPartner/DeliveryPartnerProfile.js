import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {FONTSIZE, HEIGHT, NotoSans_Medium, WIDTH} from '../../Config/AppConst';
import colors from '../../Config/color.json';
import {useNavigation} from '@react-navigation/native';

const DeliveryPartnerProfile = () => {
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.forgotHeadline}>.
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
            My Profile
          </Text>
        </View>
      </View>

      <View style={{padding: WIDTH(3)}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <AntDesign name="logout" />
          <TouchableOpacity style={styles.button}>
            <Text
              style={{
                fontFamily: NotoSans_Medium,
                fontSize: FONTSIZE(2),
                color: colors.Black,
              }}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DeliveryPartnerProfile;

const styles = StyleSheet.create({
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

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: WIDTH(87),
    height: HEIGHT(7),
    borderRadius: 12,
    backgroundColor: colors.AuroraGreen,
    color: colors.ButtonNameColor,
    marginTop: HEIGHT(2),
  },
});
