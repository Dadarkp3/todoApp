import { Image, View } from 'react-native';

import { styles } from './styles';

export const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../../assets/images/Logo.png')}
      />
    </View>
  );
};
