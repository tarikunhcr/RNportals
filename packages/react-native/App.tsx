import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {PortalView} from '@ionic/portals-react-native';

export default function App() {
  return (
    <PortalView
      portal={{
        name: 'shopwebapp',
        initialContext: {
          greeting: 'Goodbye!',
        },
      }}
      style={{flex: 1, height: 300}}
    />
  );
}

const styles = StyleSheet.create({});
