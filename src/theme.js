import { StyleSheet } from 'react-native';

// Colors
export const DEFAULT_STYLE = {
    TEXT : {
        FONT_FAMILY:'Montserrat_400Regular',
        FONT_SIZE:15,
        LINE_HEIGHT:23,
        COLOR: 'black',

    },
    TEXT_SINZE:{
        XX_SMALL:0,
        X_SMALL:0,
        SMALL:0,
        MEDIUM:15, // TEXT
        LARGE:0,
        X_LARGE:34, // TITLE
        XX_LARGE:0,
    },
    TEXT_INTERLINIADO:{
        XX_SMALL:0,
        X_SMALL:0,
        SMALL:0,
        MEDIUM:43, // TEXT
        LARGE:0,
        X_LARGE:34, // TITLE
        XX_LARGE:0,
    },
    COLOR :{
         WHITE:'#FFFFFF',
         BLACK:'#2A2A2A',
         DARK_GREY:'#707070',
         LIGHT_GREY:'#9F9F9F',
         ORANGE:'#F07D19',   
    },
    BACKGROUND_COLOR: '#2A2A2A',
}

export const THEME = {
    FONT_FAMILY:DEFAULT_STYLE.TEXT.FONT_FAMILY,
    BACKGROUND_COLOR: DEFAULT_STYLE.COLOR.BLACK,
    TEXT_COLOR: DEFAULT_STYLE.COLOR.WHITE,
    TITLE_TEXT : {
        TEXT_SIZE:DEFAULT_STYLE.TEXT_SINZE.X_LARGE,
        TEXT_COLOR:DEFAULT_STYLE.COLOR.WHITE, 
    },
    TITLE_CONTAINER : {
        backgroundColor: DEFAULT_STYLE.BACKGROUND_COLOR, 
    },
    HEADER: {
        color:DEFAULT_STYLE.COLOR.WHITE, 
    },
    BUTTON:{
        BORDER_COLOR:DEFAULT_STYLE.COLOR.ORANGE,
        BACKGROUND_COLOR: DEFAULT_STYLE.COLOR.WHITE,
        TEXT_COLOR:DEFAULT_STYLE.COLOR.WHITE,
        TEXT_SIZE: DEFAULT_STYLE.TEXT_SINZE.X_LARGE,
    },
    TAB_NAVIGATION:{
        BACKGROUND_COLOR: DEFAULT_STYLE.COLOR.WHITE,
        BORDER_COLOR:DEFAULT_STYLE.COLOR.BLACK,
    },
    TAB_NAVIGATION_HEADER:{
        TEXT_WEIGHT: 'bold',
        TEXT_SIZE: DEFAULT_STYLE.TEXT_SINZE.MEDIUM,
        TEXT_COLOR: DEFAULT_STYLE.COLOR.BLACK,
    },
    STACK_NAVIGATION:{
        BACKGROUND_COLOR: DEFAULT_STYLE.COLOR.BLACK,
        BORDER_COLOR:DEFAULT_STYLE.COLOR.BLACK,
        TINT_COLOR: DEFAULT_STYLE.COLOR.BLACK,
    },
    STACK_NAVIGATION_HEADER:{
        TEXT_WEIGHT: 'bold',
        TEXT_SIZE: DEFAULT_STYLE.TEXT_SINZE.MEDIUM,
        TEXT_COLOR: DEFAULT_STYLE.COLOR.WHITE,
    },
    SEARCH_BAR:{
      PLACE_HOLDER_TEXT_COLOR:DEFAULT_STYLE.COLOR.WHITE,
    }

}

// Icons
export const icons = {
    homeInactive : require('../assets/icons/home-claro.png'),
    homeActive : require('../assets/icons/home-oscuro.png'),
    tachographInactive : require('../assets/icons/tacografo-claro.png'),
    tachographActive : require('../assets/icons/tacografo-oscuro.png'),
    consumeInactive : require('../assets/icons/consumo-claro.png'),
    consumeActive : require('../assets/icons/consumo-oscuro.png'),
    documentationInactive : require('../assets/icons/docs-claro.png'),
    documentationActive : require('../assets/icons/docs-oscuro.png'),
    flecha_white : require('../assets/icons/flecha-blanca.png'),
    flecha_orange : require('../assets/icons/flecha-naranja.png'),
    staroilInactive : require('../assets/icons/staroil-claro.png'),
    staroilActive : require('../assets/icons/staroil-oscuro.png'),
    marketPin :require('../assets/icons/staroil-oscuro.png'),
}

// Images
export const images = {
    homeScreenImg: require('../assets/img/homeScreenImg.png'),
}

// MAP


export const mapStyle = [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#242f3e"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#746855"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#242f3e"
        }
      ]
    },
    {
      "featureType": "administrative.locality",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#d59563"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#d59563"
        }
      ]
    },
    {
      "featureType": "poi.attraction",
      "elementType": "labels.icon",
      "stylers": [
        {
          "color": "#ffae3d"
        },
        {
          "visibility": "on"
        },
        {
          "weight": 1.5
        }
      ]
    },
    {
      "featureType": "poi.business",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#263c3f"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#6b9a76"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#38414e"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#212a37"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9ca5b3"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "labels",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#746855"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#1f2835"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#f3d19c"
        }
      ]
    },
    {
      "featureType": "road.local",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#2f3948"
        }
      ]
    },
    {
      "featureType": "transit.station",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#d59563"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#17263c"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#515c6d"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#17263c"
        }
      ]
    }
  ]