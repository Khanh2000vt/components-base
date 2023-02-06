import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const [shortDimension, longDimension] =
    width < height ? [width, height] : [height, width];

// base UI design
const baseWidth = 375;
const baseHeight = 812;

const horizontal = (size: number) => (shortDimension / baseWidth) * size;
const vertical = (size: number) => (longDimension / baseHeight) * size;
const moderate = (size: number, factor = 0.5) =>
    size + (horizontal(size) - size) * factor;

// Will return a linear scaled result of the provided size, based on your device's screen width.
const horizontalScale = (size: number) => {
    return horizontal(size);
};

// Will return a linear scaled result of the provided size, based on your device's screen height.
const verticalScale = (size: number) => {
    return vertical(size);
};

// Sometimes you don't want to scale everything in a linear manner, that's where moderateScale comes in.
// The cool thing about it is that you can control the resize factor (default is 0.5).
// If normal scale will increase your size by +2X, moderateScale will only increase it by +X, for example:
// ➡️   scale(10) = 20
// ➡️   moderateScale(10) = 15
// ➡️   moderateScale(10, 0.1) = 11
const moderateScale = (size: number) => {
    return moderate(size);
};

export { horizontalScale, verticalScale, moderateScale };
