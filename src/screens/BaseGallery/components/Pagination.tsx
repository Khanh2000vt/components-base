/* eslint-disable no-shadow */
import React from 'react';
import {Animated, Dimensions, StyleSheet} from 'react-native';
import {IPaginationProps} from './types';

const {width, height} = Dimensions.get('window');

export const horizontal = {
  xxSmall: width * 0.0125,
  xSmall: width * 0.025,
  small: width * 0.0375,
  medium: width * 0.05,
  large: width * 0.075,
};

export const vertical = {
  xxSmall: height * 0.0125,
  xSmall: height * 0.025,
  small: height * 0.0375,
  medium: height * 0.05,
  normal: height * 0.065,
  large: height * 0.075,
};

export const Pagination = ({
  size,
  paginationStyle,
  scrollX,
  pageWidth = width,
  dotStyle,
}: IPaginationProps) => {
  return (
    <Animated.View style={[styles.container, paginationStyle]}>
      {Array.from({length: size}).map((_, index) => {
        const width = scrollX.interpolate({
          inputRange: [
            pageWidth * (index - 1),
            pageWidth * index,
            pageWidth * (index + 1),
          ],
          outputRange: [8, 16, 8],
          extrapolate: 'clamp',
        });
        const opacity = scrollX.interpolate({
          inputRange: [
            pageWidth * (index - 1),
            pageWidth * index,
            pageWidth * (index + 1),
          ],
          outputRange: [0.5, 1, 0.5],
          extrapolate: 'clamp',
        });
        return (
          <Animated.View
            key={index}
            style={[styles.normalDot, {width, opacity}, dotStyle]}
          />
        );
      })}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 8 / 2,
    backgroundColor: 'white',
    marginRight: 4,
  },
});
