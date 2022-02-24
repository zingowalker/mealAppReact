import React from 'react';
import styled from 'styled-components/native';
import { Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`
const RestaurantCardCover = styled(Card.Cover)`
    background-color: ${(props) => props.theme.colors.bg.primary};
    padding: ${(props) => props.theme.space[3]};
`
const Title = styled(Text)`
    font-family: ${(props) => props.theme.fonts.body};
    padding: ${(props) => props.theme.space[3]};
    color: ${(props) => props.theme.colors.ui.primary};
`

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
        <RestaurantCard elevation={5}>
        <RestaurantCardCover key= {name} source={{ uri: photos[0] }} />
            <Title>{name}</Title>
        </RestaurantCard>

    );
}

