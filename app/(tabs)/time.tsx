import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const time = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Time</Text>
      </View>
    </SafeAreaView>
  );
};

export default time;
