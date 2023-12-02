import React from 'react'
import { Image, Text, View } from 'react-native'

const ImageCard = ({movie}) => {
    return (
        <View>
            <Text className="text-red-300 " >{movie.original_title}</Text>
            <Image
                className="w-1/2 h-52 object-contain"
                source={{ uri: `https://image.tmdb.org/t/p/original${movie.backdrop_path}` }}
            />
        </View>
    )
}

export default ImageCard