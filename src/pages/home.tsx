import React, {useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
  TextInput,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Icone from '../images/Path.png';
import IconDelete from '../images/delete.png';
import IconEdit from '../images/Edit.png';
import Rectangle from '../images/Rectangle.png';
import X from '../images/X.png';
import {
  Button,
  ButtonDelete,
  ButtonEdit,
  Component,
  ComponentTitle,
  Header,
  Icon,
  IconX,
  InputTask,
  Qtd,
  Retangulo,
  TaskList,
  Title,
  ViewAreaInput,
} from './style';

const Home: React.FC = () => {
  // const initialState = {
  //   task1: false,
  //   task2: false,
  // };
  // const [state, setState] = useState(initialState);

  interface TypeSkill {
    id: string;
    name: string;
    status: boolean;
    editValue: boolean;
  }

  const [newValueInput, setNewValueInput] = useState('');
  const [valueInput, setvalueInput] = useState<TypeSkill[]>([]);
  const [contTask, setContTask] = useState(0);
  const [inputEdit, setInputEdit] = useState('');

  const data = {
    id: String(new Date().getTime()),
    name: newValueInput,
    status: false,
    editValue: false,
  };

  function handleChange() {
    const nameTask = valueInput.map(task => task.name);

    if (nameTask.toString() !== newValueInput) {
      setvalueInput(e => [...e, data]);
      setContTask(contTask + 1);
      setNewValueInput('');
    } else {
      Alert.alert(
        'Tareja já cadastrada!',
        'Você não pode cadastrar uma tarefa com o mesmo nome',
      );
    }
  }

  function handleCheck(id: string) {
    var temp = valueInput.map(task => {
      if (task.id === id) {
        return {...task, status: !task.status};
      }
      return task;
    });
    setvalueInput(temp);
  }

  function handleEdit(id: string) {
    var temp = valueInput.map(task => {
      if (task.id === id) {
        setInputEdit(task.name);
        return {...task, editValue: !task.editValue};
      }
      return task;
    });
    setvalueInput(temp);
  }

  function handleDelete(id: string) {
    function deleteTask() {
      const newValues = valueInput.filter(item => item.id !== id);
      setvalueInput(newValues);
      setContTask(contTask - 1);
    }

    Alert.alert(
      'Remover item',
      'Tem certeza que você deseja remover esse item?',
      [
        {
          text: 'Não',
        },
        {
          text: 'Sim',
          onPress: () => deleteTask(),
        },
      ],
    );
  }

  function handleNewTask(id: string) {
    var temp = valueInput.map(task => {
      if (task.id === id) {
        return {...task, name: inputEdit, editValue: !task.editValue};
      }
      return task;
    });
    setvalueInput(temp);
  }

  return (
    <Component>
      <StatusBar barStyle={'light-content'} backgroundColor={'#8257E5'} />
      <Header />
      <ComponentTitle>
        <Title>to.do</Title>
        <Qtd>Você tem {contTask} tarefas</Qtd>
      </ComponentTitle>
      <ViewAreaInput>
        <InputTask
          value={newValueInput}
          placeholder="Adicionar uma tarefa"
          onChangeText={setNewValueInput}
        />

        <Button onPress={handleChange}>
          <Icon source={Icone} />
        </Button>
      </ViewAreaInput>
      <FlatList
        style={{marginTop: 50}}
        data={valueInput}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TaskList>
            <View style={styles.CheckBoxTask}>
              <CheckBox
                style={styles.CheckBoxStyle}
                value={item.status}
                onValueChange={() => handleCheck(item.id)}
              />
              {!item.editValue ? (
                <Text
                  style={item.status ? styles.TaskTextDone : styles.TaskText}>
                  {item.name}
                </Text>
              ) : (
                <TextInput
                  style={styles.TaskEdit}
                  onChangeText={setInputEdit}
                  value={inputEdit}
                  autoFocus={true}
                  returnKeyType="send"
                  onSubmitEditing={() => handleNewTask(item.id)}
                />
              )}
            </View>

            <View style={styles.ContentButtons}>
              <ButtonEdit
                activeOpacity={0.6}
                onPress={() => handleEdit(item.id)}>
                {!item.editValue ? (
                  <Icon source={IconEdit} />
                ) : (
                  <IconX source={X} />
                )}
              </ButtonEdit>
              <Retangulo>
                <Icon source={Rectangle} />
              </Retangulo>
              <ButtonDelete
                activeOpacity={0.6}
                onPress={() => handleDelete(item.id)}>
                <Icon source={IconDelete} />
              </ButtonDelete>
            </View>
          </TaskList>
        )}
      />
    </Component>
  );
};

const styles = StyleSheet.create({
  TaskText: {
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 14,
  },
  TaskTextDone: {
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 14,
    color: '#1DB863',
    textDecorationLine: 'line-through',
  },
  TaskEdit: {
    marginLeft: 10,

    padding: 0,
    fontSize: 14,
  },
  CheckBoxTask: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  ContentButtons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',

    width: 80,
  },

  CheckBoxStyle: {
    borderWidth: 1.5,
    borderColor: '#B2B2B2',
    borderRadius: 4,
  },
});

export default Home;
