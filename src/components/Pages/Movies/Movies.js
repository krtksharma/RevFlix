import axios from "axios";
import { useEffect, useState } from "react";
import SingleContent from "../../SingleContent/SingleContent";
import CustomPagination from "../../Pagination/CustomPagination";
import Genres from "../../Genres";
import useGenre from "../../../hooks/useGenre";

const Movies= () => {
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const [numOfPages, setNumOfPages] = useState();
    const [genres, setGenres] = useState([]);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const genreforURL = useGenre(selectedGenres)

    const fetchMovies = async () => {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=edc0572366c6ae0683fdcf653297f19d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`
        );
        setContent(data.results);
        setNumOfPages(data.total_pages );
      };
    
      useEffect(() => {
        // window.scroll(0, 0);
        fetchMovies();
        // eslint-disable-next-line
      }, [page,genreforURL]);


    return(
        <div>
            <span className="PageTitle">Movies</span>
            <Genres
                type="movie"
                selectedGenres={selectedGenres}
                setSelectedGenres={setSelectedGenres}
                genres={genres}
                setGenres={setGenres}
                setPage={setPage}
            />
            <div className="trending">
                {
                    content && content.map((c) =>
                    <SingleContent key={c.id} 
                    id={c.id}
                    poster={c.poster_path}
                    title={c.title || c.name}
                    date = {c.release_date || c.first_air_date}
                    media_type = "movie"
                    vote_average = {c.vote_average} />)
                }
            </div>
            <CustomPagination setPage={ setPage } numOfPages={numOfPages > 500 ?  500 : numOfPages}/>
        </div>
    )
}
export default Movies;