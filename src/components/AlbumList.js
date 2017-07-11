import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
      console.log('1');
  }

  renderAlbums() {
    console.log('2');
     return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
      );
  }

  render() {
    console.log(this.state);
      console.log('Now call render');

    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
