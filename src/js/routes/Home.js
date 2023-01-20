import { useState, useEffect } from "react";
import Movie from "../components/Movie";
import styles from "../../css/routes/Home.module.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      `https://yts.mx/api/v2/list_movies/json?minumum_rating=8&sort_by=year`
    )
      .then((response) => response.json())
      .then((json) => {
        setMovies(json.data.movies);
        setLoading(false);
      });
  }, []);

  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <span>Loading...</span>
        </div>
      ) : (
        <div className={styles.movies}>
          {movies.map((movie) => {
            return (
              <Movie
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title_long}
                rating={movie.rating}
                genres={movie.genres}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
export default Home;
