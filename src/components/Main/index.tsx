import { useState } from 'react';
import { FlatList, View } from 'react-native';

import { TaskModel } from '@models/TakModel';

import { FormInput } from '@components/FormInput';
import { NoTasksFound } from '@components/NoTasksFound';
import { Task } from '@components/Task';
import { TaskTags } from '@components/TaskTags';

import { styles } from './styles';

export const Main = () => {
  const [text, setText] = useState('');
  const [tasks, setTasks] = useState<TaskModel[]>([]);

  const handleAddTask = () => {
    const newTask: TaskModel = {
      id: new Date().getTime(),
      title: text,
      isDone: false,
    };

    setTasks([...tasks, newTask]);
    setText('');
  };

  const handleDeleteTask = (id: number) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  const countTasksDone = () => {
    const tasksDone = tasks.filter((task) => task.isDone);
    return tasksDone.length;
  };

  const handleEditTask = (id: number) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        task.isDone = !task.isDone;
      }
      return task;
    });
    setTasks(newTasks);
  };

  return (
    <View style={styles.container}>
      <FormInput
        text={text}
        handleChangeText={setText}
        handleTouchButton={handleAddTask}
      />
      <View style={styles.tags}>
        <TaskTags text="Criadas" color="#4EA8DE" number={tasks.length} />
        <TaskTags text="Concluídas" color="#8284FA" number={countTasksDone()} />
      </View>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Task
            key={item.id}
            title={item.title}
            handleOnPressCircle={() => handleEditTask(item.id)}
            handlePressDelete={() => handleDeleteTask(item.id)}
            isDone={item.isDone}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => <NoTasksFound />}
      />
    </View>
  );
};
