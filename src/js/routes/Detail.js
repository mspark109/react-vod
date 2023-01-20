import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "../../css/routes/Detail.module.css";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState();

  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading ? (
        <div className={styles.loader}>
          <span>Loading...</span>
        </div>
      ) : (
        <div>
          <img className={styles.bg} src={movie.background_image_original} />
          <div className={styles.content}>
            <img className={styles.img} src={movie.medium_cover_image} />
            <div className={styles.text_box}>
              <h1 className={styles.title}>{movie.title}</h1>
              <p className={styles.paragraph}>{movie.description_full}</p>
              <div className={styles.else}>
                <ul>rating: {movie.rating} / 10</ul>
                <ul>download: {movie.download_count}</ul>
                <ul>year: {movie.year}</ul>
              </div>
              <a className={styles.link} href={movie.url}>
                Go to Website
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
