import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {FONTSIZE, HEIGHT, NotoSans_Medium, WIDTH} from '../../Config/AppConst';
import colors from '../../Config/color.json';
import {useNavigation} from '@react-navigation/native';

const DeliveryPartnerSetting = () => {
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
            Settings
          </Text>
        </View>
      </View>

      <View style={{padding: WIDTH(2)}}>
        <View style={styles.box}>
          <View style={{flexDirection: 'row', gap: 24}}>
            <Feather name="user" />
            <Text>My Profile</Text>
          </View>
          <FontAwesome
            name="chevron-circle-up"
            size={21}
            style={styles.dropdown}
          />
        </View>

        <View style={styles.box}>
          <View style={{flexDirection: 'row', gap: 24}}>
            <Text>Icon</Text>
            <Text>Privacy Policy</Text>
          </View>
          <Text>Icon</Text>
        </View>

        <View style={styles.box}>
          <View style={{flexDirection: 'row', gap: 24}}>
            <Text>Icon</Text>
            <Text>Terms & Conditions</Text>
          </View>
          <Text>Icon</Text>
        </View>

        <View style={styles.box}>
          <View style={{flexDirection: 'row', gap: 24}}>
            <AntDesign name="logout" />
            <Text>Log out</Text>
          </View>
          <Text>Icon</Text>
        </View>

        <View style={styles.box}>
          <Text>App version</Text>
          <Text>1.0.0</Text>
        </View>
      </View>
    </View>
  );
};

export default DeliveryPartnerSetting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.White,
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
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  dropdown: {
    height: HEIGHT(3.5),
    width: WIDTH(6),
  },
});
