import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
  // state == {count :0}
  // action === {type :'increment' || 'decrement', payload : number to increment / decrement}
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + action.payload }
    case 'decrement':
      return { ...state, count: state.count - action.payload }
    default:
      console.log('default case');
      return state;
  }
}


const CounterScreen = () => {

  const [state, dispatch] = useReducer(reducer, { count: 0 })

  const { count } = state;

  console.log(state);


  return (
    <View>
      <Button title="Increase" onPress={() => {
        dispatch({ type: 'increment', payload: 1 });
      }} />
      <Button title="Decrease" onPress={() => {
        dispatch({ type: 'decrement', payload: 1 });
      }} />
      <Text>Current Counter : {count}</Text>
    </View>
  );

}

const styles = StyleSheet.create({})

export default CounterScreen;