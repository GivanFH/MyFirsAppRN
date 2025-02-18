/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { SafeAreaView } from 'react-native'
import { PaperProvider } from 'react-native-paper';
import { CounterM3Screen } from './src/presentation/screens/CounterM3Screen';
import IonIcon from '@react-native-vector-icons/ionicons';

export const App = () => {
  return (
    <PaperProvider
      settings={{
        icon: props => <IonIcon { ...props } />
      }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        < CounterM3Screen />
      </SafeAreaView>
    </PaperProvider>
  );
};
