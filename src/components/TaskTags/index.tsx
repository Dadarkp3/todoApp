import { Text, View } from 'react-native';

import { styles } from './styles';

type Props = {
  text: string;
  color: string;
  number: number;
};

export const TaskTags = ({ text, color, number }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, { color: color }]}>{text}</Text>
      <View style={styles.tag}>
        <Text style={styles.tagText}>{number}</Text>
      </View>
    </View>
  );
};
