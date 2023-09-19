import styles from "./AlbumsCards.module.scss"

const AlbumsCard = ({
  albumTitle,
  bandName,
  albumRating,
  image
}) => {
  let cardClasses = styles.card;
  let bannerClasses = styles.banner;
  let hiddenClasses = styles.hidden;

  if(albumRating === 5) {
    hiddenClasses = '';
  }

  return (
    <article className={cardClasses} style={{
      backgroundImage: `url("${image}")`
    }}>
      <h3>{albumTitle}</h3>
      <p className={`${hiddenClasses} ${bannerClasses}`}>Top Rating</p>
      <p>{bandName}</p>
      <p>{albumRating}</p>
    </article>
  );
};

export default AlbumsCard;
