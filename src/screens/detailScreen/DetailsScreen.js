import React, { useEffect } from 'react'
import { View, Text, FlatList } from 'react-native'
import Styles from './DetailScreenStyle'
import { useSelector, useDispatch } from 'react-redux'
import { getPosts } from '../../redux/slices/PostSlice'

const DetailsScreen = () => {


    const { posts, loading } = useSelector((state) => state.post)
    console.log(posts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPosts())
    }, [])


    const renderItem = ({ item, index }) => {
        return (
            <View style={Styles.subContainer}>
                <Text>{item.id}  </Text>
                <Text>{item.title}</Text>

            </View>
        )
    }

    return (
        <View style={Styles.container}>
            <FlatList

                data={posts}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
            />
        </View>
    )
}

export default DetailsScreen