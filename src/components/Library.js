 import React, { Component } from 'react';
 import { Link } from 'react-router-dom';
 import albumData from './../data/albums';

 class Library extends Component {
   constructor(props) {
     super(props);
     this.state = { albums: albumData };
   }

   render() {
    return (
      <section className="flexcontainer">
        {
          this.state.albums.map( (album, index) =>
            <Link to={`/album/${album.slug}`} key={index}>
              <section className="card">
              <img className="card-img-top" src={album.albumCover} alt={album.title} />
              <div className="card-title">{album.title}</div>
              <div className="card-text">{album.artist}</div>
              <div className="card-text">{album.songs.length} songs</div>
              </section>
            </Link>
          )
        }
      </section>
     );
   }
 }

export default Library;
