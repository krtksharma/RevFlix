import axios from "axios";
import { useEffect, useState } from "react";
import SingleContent from "../../SingleContent/SingleContent";
import "./Trending.css";
import CustomPagination from "../../Pagination/CustomPagination";

const Trending = () => {
    
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const [numOfPages, setNumOfPages] = useState();
    
    const fetchTrending = async () => {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/trending/all/day?api_key=${"edc0572366c6ae0683fdcf653297f19d"}&page=${page}`
        );
        // console.log(data)
        setContent(data.results);
        setNumOfPages(data.total_pages );
    };
    useEffect(() => {
        fetchTrending();
        // eslint-disable-next-line
    },[page])

    return(
        <div>
            <span className="PageTitle">Trending</span>
            <div className="trending">
                {
                    content && content.map((c) =>
                    <SingleContent key={c.id} 
                    id={c.id}
                    poster={c.poster_path}
                    title={c.title || c.name}
                    date = {c.release_date || c.first_air_date}
                    media_type = {c.media_type}
                    vote_average = {c.vote_average} />)
                }
            </div>
            <CustomPagination setPage={ setPage } numOfPages={numOfPages > 50 ?  50 : numOfPages} />
        </div>
    );

};
export default Trending;