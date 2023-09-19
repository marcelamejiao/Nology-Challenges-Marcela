import AlbumsCard from '../../components/AlbumsCards/AlbumsCard.jsx';
import albums from '../../data/albums.json';
import styles from './AlbumList.module.scss';

const AlbumList = () => {


  return (
    <div className={styles.wrap}>
      {albums.map((album, index ) => {
        return <AlbumsCard
          key={`album-${index}`}
          albumTitle={album.albumTitle}
          bandName={album.bandName}
          albumRating={album.albumRating}
          image={album.image}
        />
      })} 
    </div>
  );
};

export default AlbumList;
