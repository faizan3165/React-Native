import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';

import { COLORS, SIZES, FONTS, SHADOWS } from '../constants';

export const CircleButton = ({ imgUrl, pressHandler, ...props }) => {
	return (
		<TouchableOpacity
			onPress={pressHandler}
			style={{
				width           : 40,
				height          : 40,
				backgroundColor : COLORS.white,
				position        : 'absolute',
				borderRadius    : SIZES.extraLarge,
				alignItems      : 'center',
				justifyContent  : 'center',
				...SHADOWS.light,
				...props
			}}>
			<Image source={imgUrl} resizeMode='contain' style={{ width: 24, height: 24 }} />
		</TouchableOpacity>
	);
};

export const RectButton = ({ minWidth, fontSize, pressHandler, ...props }) => {
	return (
		<View>
			<TouchableOpacity
				onPress={pressHandler}
				style={{
					backgroundColor : COLORS.primary,
					borderRadius    : SIZES.extraLarge,
					minWidth        : minWidth,
					padding         : SIZES.small,
					...props
				}}
            >
                <Text style={{fontFamily: FONTS.semiBold, fontSize: fontSize, color: COLORS.white, textAlign: 'center'}}>
                    Place a bid
                </Text>
            </TouchableOpacity>
		</View>
	);
};
