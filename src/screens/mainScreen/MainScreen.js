import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, ScrollView } from 'react-native'
import Styles from './MainScreenStyle'
import { useGetAllPostsQuery } from '../../redux/slices/Post'


export default function MainScreen() {

    const responseInfo = useGetAllPostsQuery()


    console.log(responseInfo)

    // useEffect(() => {
    // }, [])




    if (responseInfo.isLoading) {
        return (
            <View style={Styles.messageStyle}>
                <Text style={Styles.textMessageStyle}>Loading...</Text>
            </View>
        )
    }
    if (responseInfo.isError) {
        return (
            <View style={Styles.messageStyle}>
                <Text style={Styles.textMessageStyle}>Error Occured !</Text>
            </View>
        )
    }


    return (
        <View style={Styles.container}>
            <FlatList
                data={responseInfo.data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => {
                    return (
                        <View style={Styles.dataStyle}>
                            <Text>{item.title}</Text>
                        </View>
                    )
                }}
            />
            {/* 
            {
                responseInfo.data.map((item, index) =>

                    <View
                        style={Styles.dataStyle}
                        key={index}>
                        <Text>{item.id}  {item.title}</Text>
                    </View>



                )
            } */}



        </View>
    )
}