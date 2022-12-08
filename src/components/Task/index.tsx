import { Image, Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

export const Taks = () => {
  return (
    <View style={styles.container}>
      <View></View>
      <Text style={styles.title}>
        {
          'Integer urna interdum massa libero auctor neque turpis turpis semper.'
        }
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log('Clicou')}
      >
        <Image
          style={styles.image}
          source={require('../../../assets/images/plus.png')}
        />
      </TouchableOpacity>
    </View>
  );
};
