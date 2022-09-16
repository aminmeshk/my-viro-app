import React, { useRef } from 'react';
import { StyleSheet } from 'react-native';
import { ViroARSceneNavigator } from '@viro-community/react-viro';
import { HomeScreen } from './src/screens/Home';

export default () => {
  const navigatorRef = useRef<ViroARSceneNavigator>(null);

  const push = (scene: React.ReactNode) => {
    (navigatorRef.current?.push as any)({
      scene: scene,
      passProps: { pop: pop, push: push },
    });
  };

  const pop = () => {
    navigatorRef.current?.pop();
  };

  return (
    <ViroARSceneNavigator
      autofocus={true}
      ref={navigatorRef}
      initialScene={
        {
          scene: HomeScreen,
          passProps: { push, pop },
        } as any
      }
      style={styles.navigator}
    />
  );
};

var styles = StyleSheet.create({
  navigator: {
    flex: 1,
  },
});
