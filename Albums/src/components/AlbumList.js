import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = { albumList: [] }
  componentWillMount() {
    console.log('Componenet Will Mount');
    axios.get('https://rallycoding.herokuapp.com/api/music_albums').then((response) => {
      this.setState({ albumList: response.data });
    })
  }
  renderAlbums() {
    console.log('Inside ');
    return this.state.albumList.map(album =>
      <AlbumDetail
        album={album}
        key={album.title}
      />
    );
    // console.log(temp);
    // return temp;
  }
  render() {
    return (
      <ScrollView>
        {
          this.renderAlbums()
        }
        {
          // this.state.albumList.map(album => <Text>{album.title}</Text>)
        }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({});

export default AlbumList;