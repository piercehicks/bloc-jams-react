import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';

class Library extends Component {
  constructor(props) {
    super(props);

    this.state = {
      albums: albumData
    };
  }

  render() {
    return (
      <section className="Library">
        {
          this.state.albums.map( (album, index) =>
          <Link to={`/album/${album.slug}`} key={index}>
          <img src={album.albumCover} alt={album.title} />
              <div className="library-link-style">{album.title}</div>
              <div className="library-link-style">{album.artist}</div>
              <div className="library-link-style">{album.songs.length} songs</div>
           </Link>
        )
        }
      </section>
    );
  }
}


export default Library;
