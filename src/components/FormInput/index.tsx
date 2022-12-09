import { Dispatch, SetStateAction } from 'react';
import { Image, TextInput, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

type Props = {
  text: string;
  handleChangeText: Dispatch<SetStateAction<string>>;
  handleTouchButton: () => void;
};

export const FormInput = ({
  handleChangeText,
  text,
  handleTouchButton,
}: Props) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#808080"
        onChangeText={handleChangeText}
        defaultValue={text}
        cursorColor="#F2F2F2"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleTouchButton()}
      >
        <Image
          style={styles.image}
          source={require('../../../assets/images/plus.png')}
        />
      </TouchableOpacity>
    </View>
  );
};
