import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { fetchMovies } from '../reducers/movieReducer'
import { FlatList, Image, Text, View } from 'react-native'
import ImageCard from './ImageCard'

const Movies = () => {
    const dispatch = useDispatch()
    const movies = useSelector((state) => state.movies)
    const loading = useSelector((state) => state.loading)
    const error = useSelector((state) => state.error)
    useEffect(() => {
        dispatch(fetchMovies());

    }, [dispatch]);
    if (loading) return <Text>Loading...</Text>;
    if (error) return <Text>Error: {errorMessage}</Text>;
    console.log("movie",movies.movies.results.original_title);

    console.log("aaaaaaaaaaaaaaaaa");
    return (
        <View >
            {/* {movies.results?.map((movie) => {
                <View>
                    <Text>{movies.movies.results.original_title}</Text>
                    <ImageCard key={movies.id} movie={movie}></ImageCard>
                </View>
            })} */}
        </View>
    )
}


export default Movies