import { React, Component } from "react";
import './Home.css';
import { Box,  createTheme, Grid, IconButton } from '@mui/material';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

import Header from '../../common/header/Header'
import moviesData from '../../common/moviesData'

const options = { year: "numeric", month: "long", day: "numeric" }
const theme = createTheme();
class Home extends Component {
    constructor() {
        super()
        this.state = {
            moviesData: moviesData,
            movieName: '',
            genres: [],
            artists: [],
            releaseDateStart: '',
            releaseDateEnd: '',
        }
    }
    render() {
        function changetohand(e){
            e.target.className='tohand';
            // console.log(e.target.className);
        }
        function changetopointer(e){
           e.target.className='topointer';
            // console.log(e.target.className);
        }
        return (
            <>
                <div>

                    <Header />
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container>
                            <span className='heading' >Upcoming Movies</span>
                        </Grid>
                    </Box>

                    <Box sx={{ display: 'flex', overflowX: 'scroll' }}>
                        {
                            this.state.moviesData.map(movie => (
                                <ImageListItem key={movie.id} style={{ minWidth: 275, minHeight: 300, marginLeft: 1 }}>
                                    <img
                                        src={`${movie.poster_url}?w=250&fit=crop&auto=format`}
                                        srcSet={`${movie.poster_url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                        alt={movie.title}
                                    />
                                    <ImageListItemBar
                                        title={movie.title}
                                        subtitle={movie.author}
                                        actionIcon={
                                            <IconButton
                                                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                                aria-label={`info about ${movie.title}`} >
                                            </IconButton>
                                        }
                                    />
                                </ImageListItem>
                            ))
                        }
                    </Box>
                        {/* Released Movies */}
                    <Box className='flex-container'>
                        <Box className='left'>
                            {
                                this.state.moviesData.map(movie => (
                                    <Grid key={movie.id} columns={{ xs: 4, sm: 8, md: 3, lg:4 }}>
                                        <ImageListItem style={{  marginLeft: 15 }}>
                                            <img
                                            onMouseEnter={changetohand}
                                            onMouseLeave={changetopointer}
                                                src={`${movie.poster_url}?w=250&fit=crop&auto=format`}
                                                alt={movie.title}
                                                style={{ width: '250px', height: '350px'}}
                                            />
                                            <ImageListItemBar
                                                title={movie.title}
                                                subtitle={`Release Date: ${new Date(movie.release_date).toLocaleDateString(undefined, options)}`}
                                                actionIcon={
                                                    <IconButton
                                                        sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                                        aria-label={`info about ${movie.title}`} >
                                                    </IconButton>
                                                }
                                            />
                                        </ImageListItem>
                                    </Grid>
                                ))
                            }
                        </Box>
                        
                        
                    </Box>

                </div>
            </>
        )
    }
}
export default Home;