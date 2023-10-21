import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "../../css/components/Movie.module.css";

function Movie({ id, coverImg, title, rating, genres }) {
  const [error, setError] = useState(false);

  /* 이미지 로딩 실패시 요소 hidden 처리 */
  const handleImageError = () => {
    setError(true);
  };

  return (
    <div className={styles.movie} style={{ display: error ? "none" : "block" }}>
      <div className={styles.movie_img_box}>
        <Link to={`/movie/${id}`}>
          <img
            src={coverImg}
            alt={title}
            className={styles.movie_img}
            onError={handleImageError}
          />
          <span className={styles.movie_rating}>{`★${rating}/10`}</span>
        </Link>
        <h2 className={styles.movie_title}>{title}</h2>
        <div className={styles.movie_genres}>
          {genres.map((genre) => (
            <ul key={genre}>{genre}</ul>
          ))}
        </div>
      </div>
    </div>
  );
}

Movie.propType = {
  id: PropTypes.number.isRquired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
