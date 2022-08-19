import { PermissionsAndroid, StyleSheet, Text, View, Platform } from 'react-native'
import React, { useEffect } from 'react'
import Geolocation from '@react-native-community/geolocation'

const Permission = () => {
    useEffect(() => {
        const requestLocationPermission = async () => {

            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                    {
                        title: 'Location Access Required',
                        message: 'This App needs to Access your location',
                    },
                )
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    //To Check, If Permission is granted

                } else {
                    alert('Permission Denied')
                }
            } catch (err) {
                console.warn(err)
            }

        };
        requestLocationPermission()
        return () => Geolocation.clearWatch(watchID)
    }, [])








    return (
        <View>
            <Text>Permission</Text>
        </View>
    )
}

export default Permission

const styles = StyleSheet.create({})