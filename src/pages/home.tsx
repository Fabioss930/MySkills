import React, {useState} from 'react';
import {StatusBar, StyleSheet, Text, View, FlatList, Alert} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Icone from '../images/Path.png';
import IconDelete from '../images/iconDelete.png';
import {
  Button,
  ButtonDelete,
  Component,
  ComponentTitle,
  Header,
  Icon,
  InputTask,
  List,
  Qtd,
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
  }

  const [newValueInput, setNewValueInput] = useState('');
  const [valueInput, setvalueInput] = useState<TypeSkill[]>([]);
  const [contTask, setContTask] = useState(0);

  const data = {
    id: String(new Date().getTime()),
    name: newValueInput,
    status: false,
  };

  function handleChange() {
    if (data.name) {
      setvalueInput(e => [...e, data]);
      setContTask(contTask + 1);
      setNewValueInput('');
    } else {
      Alert.alert('Insira uma tarefa!');
    }
  }

  function handleCheck(id: string) {
    var temp = valueInput.map(item => {
      if (item.id === id) {
        return {...item, status: !item.status};
      }
      return item;
    });
    setvalueInput(temp);
  }

  function handleDelete(id: string) {
    const newValues = valueInput.filter(item => item.id !== id);
    setvalueInput(newValues);
    setContTask(contTask - 1);
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
          placeholder="Adicionar uma Tarefa"
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
              <Text style={item.status ? styles.TaskTextDone : styles.TaskText}>
                {item.name}
              </Text>
            </View>

            <ButtonDelete onPress={() => handleDelete(item.id)}>
              <Icon source={IconDelete} />
            </ButtonDelete>
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
  CheckBoxTask: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  CheckBoxStyle: {
    borderWidth: 1.5,
    borderColor: '#B2B2B2',
    borderRadius: 4,
  },
});

export default Home;
