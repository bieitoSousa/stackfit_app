import React from 'react';
import { Text } from 'react-native';
import { THEME , DEFAULT_STYLE } from '../../theme';


export const TextDefault = ({ children, size, lineH, color, style }) => {
    return (
        <Text style={{
            fontFamily: DEFAULT_STYLE.TEXT.FONT_FAMILY, //FONT_FAMILY
            fontSize: size || DEFAULT_STYLE.TEXT.FONT_SIZE,
            lineHeight: lineH || DEFAULT_STYLE.TEXT.LINE_HEIGHT,
            color: color || DEFAULT_STYLE.TEXT.COLOR,
            ...style
        }}
        >
            {children}
        </Text>
    );
}