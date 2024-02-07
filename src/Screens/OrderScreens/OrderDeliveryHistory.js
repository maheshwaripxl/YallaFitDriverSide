import {FlatList, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {FONTSIZE, HEIGHT, NotoSans_Medium, WIDTH} from '../../Config/AppConst';
import colors from '../../Config/color.json';
import {useNavigation} from '@react-navigation/native';
import {customerListArray} from '../../Array/CustomerListArray';
import {OrderHistoryList} from '../../Array/OrderHistoryList';

const OrderDeliveryHistory = () => {
  const navigation = useNavigation()

  const DisplayCustomers = ({item}) => {
    return (
      <View style={styles.customerList}>
        <View style={{flexDirection: 'row', gap: 12}}>
          <View>
            <Image source={item.img} />
          </View>
          <View>
            <Text style={{fontSize: FONTSIZE(2.1), color: colors.Black}}>
              {item.name}
            </Text>
            <Text
              style={{
                fontSize: FONTSIZE(1.6),
                color: colors.Gray,
                letterSpacing: 0.7,
              }}>
              {item.details}
            </Text>
          </View>
        </View>
        <View style={{alignItems: 'flex-end', gap: 9}}>
          <Text style={{color: colors.SplashScreenColor}}>{item.status}</Text>
          <Text style={{color: colors.Black}}>{item.PMode} OMR</Text>
        </View>
      </View>
    );
  };

  return (
    <View>
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
            Order History
          </Text>
        </View>
      </View>

      <View style={{padding: WIDTH(3)}}>
        <FlatList
          data={OrderHistoryList}
          renderItem={({item}) => <DisplayCustomers item={item} />}
        />
      </View>
    </View>
  );
};

export default OrderDeliveryHistory;

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

  customerList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // height: HEIGHT(9),
    padding: HEIGHT(1.2),
    marginBottom: HEIGHT(1),
    alignItems: 'center',
    // borderWidth: 1,
    borderRadius: 6,
    // shadowColor: '#000',
    // shadowOffset: {width: 1, height: 1},
    // shadowOpacity: 0.4,
    // shadowRadius: 1,
    // elevation: 2,
  },
});
