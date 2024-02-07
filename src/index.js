import {StyleSheet, StatusBar} from 'react-native';
import React from 'react';
import StackNavigator from './Navigation/StackNavigation';
import {PaperProvider} from 'react-native-paper';

const index = () => {
  // StatusBar.setHidden(true);

  return (
    <PaperProvider>
      <StackNavigator />
    </PaperProvider>
  );
};

export default index;

const styles = StyleSheet.create({});
