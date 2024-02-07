import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SplashScreen from '../Screens/SplashScreen/SplashScreen';
import SignInScreen from '../Screens/SignInScreen/SignInScreen';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import OrderDeliveryHistory from '../Screens/OrderScreens/OrderDeliveryHistory';
import OrderDeliveringTo from '../Screens/OrderScreens/OrderDeliveringTo';
import LocationForCustomer from '../Screens/LocationScreen/LocationForCustomer';
import VerificationCOD from '../Screens/LocationScreen/VerificationCOD';
import VerificationPAID from '../Screens/LocationScreen/VerificationPAID';
import DeliveredMSGScreen from '../Screens/OrderDetails/DeliveredMSGScreen';
import DeliveryPartnerProfile from '../Screens/DeliveryPartner/DeliveryPartnerProfile';
import DeliveryPartnerSetting from '../Screens/DeliveryPartner/DeliveryPartnerSetting';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
          customAnimationOnGesture: true,
          animation: 'fade_from_bottom',
          animationDuration: '400',
        }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        {/* <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
        {/* <Stack.Screen
          name="OrderDeliveryHistory"
          component={OrderDeliveryHistory}
        /> */}
        {/* <Stack.Screen
          name="OrderDeliveringTo"
          component={OrderDeliveringTo}
        /> */}
        {/* <Stack.Screen
          name="LocationForCustomer"
          component={LocationForCustomer}
        /> */}
        {/* <Stack.Screen name="VerificationCOD" component={VerificationCOD} /> */}
        {/* <Stack.Screen name="VerificationPAID" component={VerificationPAID} /> */}
        {/* <Stack.Screen name="DeliveredMSGScreen" component={DeliveredMSGScreen} /> */}
        <Stack.Screen
          name="DeliveryPartnerSetting"
          component={DeliveryPartnerSetting}
        />
        <Stack.Screen
          name="DeliveryPartnerProfile"
          component={DeliveryPartnerProfile}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
