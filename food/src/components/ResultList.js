import React from 'react';
import { View, StyleSheet, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import Card from '../components/Card';
import { withNavigation } from 'react-navigation';

const ResultList = ({ title, results, navigation }) => {
  if (!results.length) {
    return null;
  }
  return (
    <View style={{ marginBottom: 10 }}>
      <Text style={styles.title}>{title}</Text>
      <View>
        {/* <Image source={Imagepath} /> */}
        {/* <Text>Rating is {rating}</Text> */}
        {/* <Text>Result : {results.length}</Text> */}
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={results}
          keyExtractor={(result) => { result.name }}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => {
                navigation.navigate('ImageDetail', item)
              }}>
                <Card item={item} />
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );

}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15
  }
});

export default withNavigation(ResultList);
