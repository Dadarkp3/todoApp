import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { styles } from './styles';

export const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsxmojko to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
};
