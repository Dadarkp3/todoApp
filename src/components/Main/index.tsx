import { useState } from 'react';
import { View } from 'react-native';
import { FormInput } from '@components/FormInput';
import { NoTasksFound } from '@components/NoTasksFound';
import { TaskTags } from '@components/TaskTags';

import { styles } from './styles';

export const Main = () => {
  const [text, setText] = useState('');

  const handleTouchButton = () => {
    console.log(text);
  };

  return (
    <View style={styles.container}>
      <FormInput
        text={text}
        handleChangeText={setText}
        handleTouchButton={handleTouchButton}
      />
      <View style={styles.tags}>
        <TaskTags text="Criadas" color="#4EA8DE" number="5" />
        <TaskTags text="Concluídas" color="#8284FA" number="1" />
      </View>
      <NoTasksFound />
    </View>
  );
};
