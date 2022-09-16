module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.tsx',
          '.ios.ts',
          '.ios.js',
          '.android.tsx',
          '.android.ts',
          '.android.js',
          '.js',
          '.ts',
          '.tsx',
          '.json',
        ],
        alias: {
          '@screens': './src/screens',
          '@types': './src/types',
        },
      },
    ],
  ],
};
