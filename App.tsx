/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { SafeAreaView } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import IonIcon from '@react-native-vector-icons/ionicons';
import FlexDirectionsScreen from './src/presentation/screens/FlexDirectionsScreen';

export const App = () => {
  return (
    <PaperProvider
      settings={{
        icon: props => <IonIcon {...props} />,
      }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        {/* <HelloWorldScreen /> */}
        {/* <CounterM3Screen /> */}
        {/* <CounterScreen /> */}
        {/* <BoxObjectModelScreen /> */}
        {/* <DimensionScreen /> */}
        {/* <PositionScreen /> */}
        <FlexDirectionsScreen />
      </SafeAreaView>
    </PaperProvider>
  );
};
