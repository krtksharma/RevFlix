import { Chip } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import { ThemeProvider,  createTheme } from '@mui/material/styles';


const theme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

const Genres = ({
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  type,
  setPage,
}) => {
    const handleAdd = (genre) => {
        setSelectedGenres([...selectedGenres, genre]);
        setGenres(genres.filter((g) => g.id !== genre.id));
        setPage(1);
      };
    
      const handleRemove = (genre) => {
        setSelectedGenres(
          selectedGenres.filter((selected) => selected.id !== genre.id)
        );
        setGenres([...genres, genre]);
        setPage(1);
      };

    const fetchGenres = async () => {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/genre/${type}/list?api_key=edc0572366c6ae0683fdcf653297f19d&language=en-US`
        );
        setGenres(data.genres);
        console.log(genres);
      };
    
      useEffect(() => {
        fetchGenres();    
        return () => {
          setGenres({}); // unmounting
        };
        // eslint-disable-next-line
      }, []);

    return (
        <div style={{ padding: "6px 0" }}>
            {selectedGenres.map((genre) => (
        <ThemeProvider theme={theme}>   
        <Chip
          style={{ margin: 2 }}
          label={genre.name}
          key={genre.id}
          color="primary"
          clickable
          size="small"
          onDelete={() => handleRemove(genre)}
        />
        </ThemeProvider>
      ))}
      {genres.map((genre) => (
        <ThemeProvider theme={theme}>
        <Chip
          style={{ margin: 2 }}
          label={genre.name}
          key={genre.id}
          clickable
          size="small"
          onClick={() => handleAdd(genre)}
        />
        </ThemeProvider>
      ))}
        </div>
    )
}

export default Genres
