import { useCallback, useEffect, useRef, useState } from "react";
import classes from "./Home.module.css";

const tourArr = [
  { date: "JUL16", city: "DETROIT, MI", theater: "DTE ENERGY MUSIC THEATRE" },
  { date: "JUL19", city: "TORONTO,ON", theater: "BUDWEISER STAGE" },
  { date: "JUL22", city: "BRISTOW, VA", theater: "JIGGY LUBE LIVE" },
  { date: "JUL29", city: "PHOENIX, AZ", theater: "AK-CHIN PAVILION" },
];
const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const titleRef = useRef("");
  const textRef = useRef("");
  const dateRef = useRef("");

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://swapi.dev/api/films/");
      if (!response.ok) {
        throw new Error("something went wrong...Retrying!");
      }
      const data = await response.json();
      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingtext: movieData.opening_crawl,
          releasedate: movieData.release_date,
        };
      });
      setMovies(transformedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);
  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);


  const formSubmitHandler = (event) => {
    event.preventDefault();
    const newMovieObj = {
      title: titleRef.current.value,
      openingText: textRef.current.value,
      releaseDate: dateRef.current.value,
    };
    console.log(newMovieObj);
  };
  return (
    <>
      <div className={classes.container}>
        <section className={classes.upperSec}>
          <button className={classes.latestBtn}>Get Our Latest Album</button>
          <button className={classes.playBtn}>►</button>
        </section>
        <section className={classes.lowerSec}>
          <h1>TOURS</h1>
          {tourArr.map((ele) => (
            <div>
              <span className={classes.date}>{ele.date}</span>
              <span className={classes.city}>{ele.city}</span>
              <span className={classes.theater}>{ele.theater}</span>
              <button>BUY TICKETS</button>
            </div>
          ))}
        </section>

        <section>
          <form onSubmit={formSubmitHandler}>
            <label>title</label>
            <input type="text" ref={titleRef} />
            <label>Opening Text</label>
            <textarea rows="5" ref={textRef} />
            <label>Release Date</label>
            <input type="text" ref={dateRef} />
            <button type="submit">Add Movie</button>
          </form>
          <button onClick={fetchMoviesHandler}>Fetch Movies</button>
        </section>
        <section>
          {!isLoading && (
            <ul>
              {movies.map((movie) => (
                <li>
                  <h2>{movie.title}</h2>
                  <h3>{movie.releasedate}</h3>
                  <p>{movie.openingtext}</p>
                </li>
              ))}
            </ul>
          )}
          {!isLoading && error && <p>{error}</p>}
          {isLoading && <p>Loading...</p>}
        </section>
      </div>
    </>
  );
};
export default Home;