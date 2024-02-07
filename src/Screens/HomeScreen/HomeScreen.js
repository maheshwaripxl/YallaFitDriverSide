import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import colors from '../../Config/color.json';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  FONTSIZE,
  HEIGHT,
  NotoSans_Bold,
  NotoSans_Medium,
  WIDTH,
} from '../../Config/AppConst';
import Modal from 'react-native-modal';
import {customerListArray} from '../../Array/CustomerListArray';

const HomeScreen = () => {
  const [showModal, setShowModal] = useState(false);
  const [array, setArray] = useState([]);

  const DisplayCustomers = ({item}) => {
    setArray(item);
    return (
      <TouchableOpacity
        onPress={() => setShowModal(true)}
        activeOpacity={0.6}
        style={styles.customerList}>
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
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.forgotHeadline}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 7,
          }}>
          <View>
            <Image
              style={{
                height: HEIGHT(7),
                width: WIDTH(13),
                borderWidth: 1,
                borderRadius: 50,
              }}
              source={require('../../Images/profile.png')}
            />
          </View>
          <View>
            <Text
              style={{
                fontSize: FONTSIZE(2),
                fontFamily: NotoSans_Medium,
                color: colors.Black,
                paddingLeft: WIDTH(2),
              }}>
              John James
            </Text>
            <Text>Delivery Partner</Text>
          </View>
        </View>
        <View>
          <Ionicons
            name="notifications-outline"
            style={{
              marginRight: WIDTH(5),
              fontSize: FONTSIZE(3.5),
              height: HEIGHT(6),
              width: WIDTH(12),
              paddingTop: HEIGHT(1),
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              backgroundColor: '#9CEFDF',
              borderRadius: 45,
              color: colors.Black,
              borderColor: 'gray',
            }}
          />
        </View>
      </View>

      <View style={{padding: WIDTH(3)}}>
        <TouchableOpacity style={styles.orderDeliverButton}>
          <Text
            style={{
              fontSize: FONTSIZE(2.1),
              fontFamily: NotoSans_Medium,
              color: colors.Black,
              // padding: HEIGHT(1),
            }}>
            Orders delivered
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={{
                fontSize: FONTSIZE(3.2),
                fontFamily: NotoSans_Bold,
                color: colors.Black,
                // padding: HEIGHT(1),
              }}>
              6 {''}
            </Text>
            <Text style={{marginTop: HEIGHT(1.2)}}>orders delivered</Text>
            <MaterialIcons name="keyboard-arrow-right" />
          </View>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: FONTSIZE(2.4),
            fontFamily: NotoSans_Medium,
            color: colors.Black,
            padding: HEIGHT(1),
          }}>
          Ready for pickup
        </Text>
        <ScrollView>
          <FlatList
            data={customerListArray}
            renderItem={({item}) => <DisplayCustomers item={item} />}
          />
        </ScrollView>
      </View>

      {showModal ? (
        <Modal
          isVisible={showModal}
          onBackdropPress={() => setShowModal(false)}
          style={{justifyContent: 'center', alignItems: 'center'}}>
          <View style={styles.modalWrap}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                gap: 9,
              }}>
              <View>
                <Image source={array.img} /> 
              </View>
              <View>
                <Text style={{fontSize: FONTSIZE(2.1), color: colors.Black}}>
                  {array.name}
                </Text>
                <Text
                  style={{
                    // fontSize: FONTSIZE(1.6),
                    color: colors.Gray,
                    letterSpacing: 0.7,
                  }}>
                  {array.details}
                </Text>
              </View>
            </View>

            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <TouchableOpacity style={styles.button}>
                <Text
                  style={{
                    fontFamily: NotoSans_Medium,
                    fontSize: FONTSIZE(2),
                    color: colors.Black,
                  }}>
                  Out for Delivery
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      ) : null}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: HEIGHT(2),
    backgroundColor: colors.White,
  },

  forgotHeadline: {
    backgroundColor: colors.White,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: WIDTH(4),
    width: WIDTH(100),
    height: HEIGHT(10),
    shadowColor: colors.Gray9,
    shadowOffset: {width: 3, height: 6},
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 7,
  },

  orderDeliverButton: {
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#9CEFDF',
    backgroundColor: '#9CEFDF',
    padding: WIDTH(2.4),
    marginTop: HEIGHT(1),
    marginBottom: HEIGHT(1),
  },

  customerList: {
    flexDirection: 'row',
    // height: HEIGHT(9),
    padding: HEIGHT(1.2),
    marginBottom: HEIGHT(1),
    alignItems: 'center',
    // borderWidth: 1,
    gap: 9,
  },

  modalWrap: {
    padding: WIDTH(3),
    // paddingTop: HEIGHT(3),
    backgroundColor: 'white',
    width: WIDTH(92),
    height: HEIGHT(19),
    borderWidth: 1,
    borderColor: colors.Gray,
    borderRadius: 12,
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
