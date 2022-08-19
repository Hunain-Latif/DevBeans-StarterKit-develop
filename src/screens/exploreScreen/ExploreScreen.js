import React, { useEffect, useRef, useState } from 'react'
import { Alert, PermissionsAndroid, View, } from 'react-native'
import styles from './ExploreScreenStyle'
import MapView, { Marker, Callout, Circle } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { PERMISSIONS } from 'react-native-permissions';

const ExploreScreen = () => {
    const [pin, setPin] = useState({
        latitude: 31.5072,
        longitude: 74.3185,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
    })
    const [region, setRegion] = useState({
        latitude: 31.5072,
        longitude: 74.3185,

    })

    const requestLocationPermission = () => {
        try {
            const granted = PermissionsAndroid.request(
                PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION, {
                'title': 'Location Access Required',
                'message': 'This App needs to Access your location'
            }
            )
            if (granted) {
                Alert.alert('granted')

                //To Check, If Permission is granted
                setGrantedPermission(true)
                // _getCurrentLocation();
            } else {
                alert("Permission Denied");
            }
        } catch (err) {
            alert("err", err);
        }
    }
    useEffect(() => {
        requestLocationPermission()
        goTo()

    }, [region])

    const goTo = () => {
        mapRef.current.animateToRegion(region, 1 * 1000)
    }

    const mapRef = useRef(null);
    // console.log('map==>', _map)
    return (
        <View style={styles.container}>

            <MapView
                ref={mapRef}
                initialRegion={{
                    latitude: 31.5072,
                    longitude: 74.3185,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
                // region={{
                //     latitude: 31.5072,
                //     longitude: 74.3185,
                //     latitudeDelta: 0.015,
                //     longitudeDelta: 0.0121,
                // }}
                showsUserLocation={true}
                rotateEnabled={true}
                showsMyLocationButton={true}
                showsCompass={true}
                showsIndoors={true}
                style={styles.map}

            >
                {/* <Marker
                    coordinate={pin}
                    draggable={true}
                    // onDragStart={(e) => {
                    //     // console.log("Drag Start==>", e.nativeEvent.coordinate)
                    // }}
                    onDragEnd={(e) => {
                        setPin({
                            latitude: e.nativeEvent.coordinate.latitude,
                            longitude: e.nativeEvent.coordinate.longitude
                        })
                    }}

                >
                    <Callout>
                        <Text>test title</Text>
                    </Callout>

                </Marker> */}


                <Marker coordinate={{ latitude: region.latitude, longitude: region.longitude, }} />


            </MapView>

            <GooglePlacesAutocomplete
                placeholder='Search'
                fetchDetails={true}
                GooglePlacesSearchQuery={{
                    rankby: 'distance'
                }}
                onPress={(data, details = null) => {
                    console.log('onpress', data, details);
                    setRegion({
                        latitude: details.geometry.location.lat,
                        longitude: details.geometry.location.lng,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    })

                }}
                query={{
                    key: 'AIzaSyBtkiYEE1Cy5PeDGT9TuvddRRI0WwRhwoA',
                    language: 'en',
                    components: 'country:pk',
                    type: 'establishment',
                    radius: 2000,
                    location: `${region.latitude},${region.longitude}`

                }}



            />
        </View>




    )
}

export default ExploreScreen



{/* <Marker
                    title='Yor are here'
                    //  description='This is a description'
                    coordinate={position} /> */}


{/* <Circle center={pin} radius={80} /> */ }

// const requestLocationPermission = () => {
    //     try {
    //         const granted = PermissionsAndroid.request(
    //             PERMISSIONS.ACCESS_FINE_LOCATION, {
    //             'title': 'Location Access Required',
    //             'message': 'This App needs to Access your location'
    //         }
    //         )
    //         if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    //             //To Check, If Permission is granted
    //             setGrantedPermission(true)
    //             // _getCurrentLocation();
    //         } else {
    //             alert("Permission Denied");
    //         }
    //     } catch (err) {
    //         alert("err", err);
    //     }
    // }