import styled from 'styled-components';

export const Component = styled.SafeAreaView`
  background: #e5e5e5;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Header = styled.View`
  background: #8257e5;
  width: 100%;
  height: 150px;
  top: 0;
  left: 0;
`;

export const ComponentTitle = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 40px;
`;

export const Title = styled.Text`
  left: 24px;
  font-weight: bold;
  font-size: 38px;
  color: #fff;
  font-family: 'RobotoSlap-Regular';
`;

export const Qtd = styled.Text`
  font-size: 15px;
  font-weight: 400;
  color: #fff;
  right: 50px;
`;

export const InputTask = styled.TextInput`
  width: 300px;
  height: 56px;
  padding: 15px;
  background: #ffffff;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-right-width: 1px;
  border-right-color: #ebebeb;
`;

export const ViewAreaInput = styled.View`
  position: absolute;
  display: flex;
  flex-direction: row;
  top: 122px;
`;

export const Button = styled.TouchableHighlight`
  width: 55px;
  background: #ffffff;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;

  border-color: #ebebeb;
  align-items: center;
  justify-content: center;
`;
export const Retangulo = styled.View`
  width: 2px;
  height: 56px;
  background: #ebebeb;
`;

export const Icon = styled.Image``;



export const TaskList = styled.View`
  width: 355px;
  height: 48px;
  
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonDelete = styled.TouchableHighlight``;
