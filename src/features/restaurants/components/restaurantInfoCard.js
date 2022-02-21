import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';




export const RestaurantInfoCard = ({ restaurant = {} }) => {
    const {
        name = 'Gesmo Restaurant',
        icon,
        photos = [
            'https://media-cdn.tripadvisor.com/media/photo-s/1d/cc/bd/e4/caption.jpg'
        ],
        address = 'Leh, UT - Ladakh 194101',
        isOpenNow = false,
        rating = 4.5,
        isClosedTemporarily,
    } = restaurant;
    return (
        <Card elevation={5} style={styles.card}>
        <Card.Cover key= {name} style={styles.cover} source={{ uri: photos[0] }} />
            <Text style={styles.title}>{name}</Text>
        </Card>
        
        
    );
}

const styles = StyleSheet.create({
    card: {backgroundColor: "white"},
    cover: {padding: 10, backgroundColor: "white"},
    title: {padding: 10},
});