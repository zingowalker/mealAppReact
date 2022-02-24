import React from 'react';
import styled from 'styled-components/native';
import { Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import { SvgXml } from "react-native-svg";

import star from '../../../../assets/star';

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
    background-color: ${(props) => props.theme.colors.bg.primary};
    padding: ${(props) => props.theme.space[3]};
`;

const Address = styled(Text)`
    font-family: ${(props) => props.theme.fonts.body};
    font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Title = styled(Text)`
    font-family: ${(props) => props.theme.fonts.heading};
    font-size: ${(props) => props.theme.fontSizes.body};
    color: ${(props) => props.theme.colors.ui.primary};
`;

const Info = styled.View`
    padding: ${(props) => props.theme.space[3]};
`;

const Rating = styled.View`
    flex-direction: row;
    padding-top: ${(props) => props.theme.space[2]};
    padding-bottom: ${(props) => props.theme.space[2]};
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
    const {
        name = 'Gesmo Restaurant',
        icon,
        photos = [
            'https://media-cdn.tripadvisor.com/media/photo-s/1d/cc/bd/e4/caption.jpg'
        ],
        address = 'Leh, UT - Ladakh 194101',
        isOpenNow = false,
        rating = 3,
        isClosedTemporarily,
    } = restaurant;


    const ratingArray = Array.from(new Array(Math.floor(rating)));

    
    return (
        <RestaurantCard elevation={5}>
        <RestaurantCardCover key= {name} source={{ uri: photos[0] }} />
        <Info >
            <Title>{name}</Title>
            <Rating >
            {ratingArray.map(() => (
                <SvgXml xml={star} width={20} height={20}/>
            ))}
            </Rating>
            <Address>{address}</Address>
        </Info>
        </RestaurantCard>

    );
}

