module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@assets': './assets',
          '@api': './src/api',
          '@components': './src/components',
          '@constants': './src/constants',
          '@firebase': './src/firebase',
          '@helper': './src/helper',
          '@hooks': './src/hooks',
          '@model': './src/model',
          '@navigation': './src/navigation',
          '@redux': './src/redux',
          '@screens': './src/screens',
          '@utils': './src/utils',
          '@theme': './src/theme',
          // "@i18n": "./src/i18n",
          // "@routes": "./src/routes",
          // "@services": "./src/services",
          // '@env': './src/env.js',
        },
      },
    ],
  ],
};
