import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import useResult from '../hooks/useResult';
import ResultList from '../components/ResultList';

const SearchScreen = () => {

  const [searchText, setSearchText] = useState('');
  const [searchApi, results, errorMessage] = useResult();
  const filterRestultBasedOnPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    })
  }

  return (
    <View style={{ flex: 1 }}>
      <SearchBar
        value={searchText}
        onTextChange={(newItem) => {
          setSearchText(newItem);
        }}
        onSearchTextSubmitted={() => {
          console.log('Hello Done Submiting...');
          searchApi(searchText);
        }}
      />
      {
        errorMessage ? <Text>{errorMessage}</Text> : null
        // rating={4.5} Imagepath={require('../../assets/beach.jpg')}
      }
      <ScrollView>
        <ResultList
          title='Cost effective'
          results={filterRestultBasedOnPrice('$')}
        // navigation={navigation}
        />
        <ResultList
          title='Bit Pricer'
          results={filterRestultBasedOnPrice('$$')}
        // navigation={navigation}

        />
        <ResultList
          title='Big Spender'
          results={filterRestultBasedOnPrice('$$$')}
        // navigation={navigation}

        />
        <ResultList
          title='Very Big Spender'
          results={filterRestultBasedOnPrice('$$$')}
        // navigation={navigation}

        />
        <ResultList
          title='Very Very Big Spender'
          results={filterRestultBasedOnPrice('$')}
        // navigation={navigation}

        />
      </ScrollView>
    </View>
  );

}

const styles = StyleSheet.create({});


export default SearchScreen;