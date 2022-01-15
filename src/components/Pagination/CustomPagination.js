import Pagination from '@mui/material/Pagination';
import { ThemeProvider,  createTheme } from '@mui/material/styles';


const theme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

const CustomPagination = ({setPage,numOfPages=10}) => {

    const handlePageChange = (page) => {
        setPage(page);
        window.scroll(0,0)
    };
    return (
        <div
        style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
        marginBottom:10,
        
      }}
        > 
        <ThemeProvider theme={theme}>
        <Pagination
          onChange={(e) => handlePageChange(e.target.textContent)}
          count={numOfPages}
          color='primary'
          hideNextButton
          hidePrevButton
          
        />
        </ThemeProvider>
        </div>
    )
}

export default CustomPagination;
