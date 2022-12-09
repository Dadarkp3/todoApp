import { Image, Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

type Props = {
  handleOnPressCircle: () => void;
  title: string;
  handlePressDelete: () => void;
  isDone: boolean;
};

export const Task = ({
  handleOnPressCircle,
  title,
  handlePressDelete,
  isDone,
}: Props) => {
  return (
    <View
      style={[
        styles.container,
        {
          borderColor: isDone ? '#262626' : '#333333',
        },
      ]}
    >
      <TouchableOpacity
        style={[
          styles.circle,
          {
            backgroundColor: isDone ? '#8284FA' : '#333333',
            borderColor: isDone ? '#8284FA' : '#4EA8DE',
          },
        ]}
        onPress={handleOnPressCircle}
      >
        {isDone && (
          <Image
            style={styles.checked}
            source={require('../../../assets/images/Checked.png')}
          />
        )}
      </TouchableOpacity>
      <Text
        style={[
          styles.title,
          {
            color: isDone ? '#808080' : '#F2F2F2',
            textDecorationLine: isDone ? 'line-through' : 'none',
          },
        ]}
      >
        {title}
      </Text>
      <TouchableOpacity style={styles.button} onPress={handlePressDelete}>
        <Image
          style={styles.image}
          source={require('../../../assets/images/Trash.png')}
        />
      </TouchableOpacity>
    </View>
  );
};
