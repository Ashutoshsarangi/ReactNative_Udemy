import React, { useReducer } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Squaredetail from '../components/SquareDetail';

const COLOR_INCLREMENT = 10;
// action --> Hot I need to change my Object,
// It should have action and payload.
const reducer = (state, action) => {
  // state === {red: number, green : number, blue:number};
  // action == {type: 'change_red' || 'change_green' || 'change_blue', payload : 15 || -15};

  switch (action.type) {
    case 'change_red':
      if (state.red + action.payload > 255 || state.red + action.payload < 0) {
        return state;
      }
      return { ...state, red: state.red + action.payload }
    case 'change_green':
      if (state.green + action.payload > 255 || state.green + action.payload < 0) {
        return state;
      }
      return { ...state, green: state.green + action.payload }
    case 'change_blue':
      if (state.blue + action.payload > 255 || state.blue + action.payload < 0) {
        return state;
      }
      return { ...state, blue: state.blue + action.payload }
    default:
      console.log('default case');
      return state;

  }
}

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;
  console.log(state);


  return (
    <View>
      <Squaredetail
        onIncrease={() => {
          dispatch({ type: 'change_red', payload: COLOR_INCLREMENT });
        }}
        onDecrease={() => {
          dispatch({ type: 'change_red', payload: -1 * COLOR_INCLREMENT });
        }}
        title='red' />
      <Squaredetail
        onIncrease={() => {
          dispatch({ type: 'change_green', payload: COLOR_INCLREMENT });
        }}
        onDecrease={() => {
          dispatch({ type: 'change_green', payload: -1 * COLOR_INCLREMENT });
        }}
        title='green' />
      <Squaredetail
        onIncrease={() => {
          dispatch({ type: 'change_blue', payload: COLOR_INCLREMENT });
        }}
        onDecrease={() => {
          dispatch({ type: 'change_blue', payload: -1 * COLOR_INCLREMENT });
        }}
        title='blue' />

      <View style={{ width: 100, height: 100, backgroundColor: `rgb(${red},${green},${blue})` }} />
    </View>
  );

}

const styles = StyleSheet.create({});

export default SquareScreen;