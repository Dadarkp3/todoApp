import { Image, Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

export const Task = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.circle}
        onPress={() => console.log('Clicou')}
      />
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
          source={require('../../../assets/images/Trash.png')}
        />
      </TouchableOpacity>
    </View>
  );
};
