import * as React from 'react';
import { makeStyles } from '@mui/styles';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import SearchIcon from '@mui/icons-material/Search';
import ShowsIcon from '@mui/icons-material/Tv';
import { useNavigate} from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        width:'100%',
        position:"fixed",
        bottom: 0,

        zIndex: 100,
    },
  });



export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();


  
  
  return (
      <BottomNavigation    
        showLabels    
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        className={classes.root}
        style={{backgroundColor:"#161718"}}
      >
        <BottomNavigationAction label="Trending" icon={<WhatshotIcon />} style={{color:"white"}} onClick={() =>{navigate("/")}} />
        <BottomNavigationAction label="Movies" icon={<MovieIcon />} style={{color:"white"}} onClick={() =>{navigate("/movies")}}/>
        <BottomNavigationAction label="TV-Series" icon={<ShowsIcon />} style={{color:"white"}} onClick={() =>{navigate("/series")}} />
        <BottomNavigationAction label="Search" icon={<SearchIcon />} style={{color:"white"}} onClick={() =>{navigate("/search")}} />
      </BottomNavigation>
    
  );
}
