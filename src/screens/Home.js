import {ViroARScene, ViroFlexView, ViroText} from '@viro-community/react-viro';
import React, {useCallback} from 'react';
import {StyleSheet} from 'react-native';
import {Screen1} from './Screen1';
import {Screen2} from './Screen2';

export const HomeScreen = ({push}) => {
  const handleClick1 = useCallback(() => {
    push(Screen1);
  }, [push]);

  const handleClick2 = useCallback(() => {
    push(Screen2);
  }, [push]);

  return (
    <ViroARScene>
      <ViroFlexView
        position={[0, 0, -1.8]}
        style={styles.container}
        scale={[0.8, 0.8, 0.8]}
        width={2}
        height={2}>
        <ViroFlexView
          height={0.5}
          width={1.5}
          style={styles.button}
          onClick={handleClick1}>
          <ViroText
            style={styles.text}
            textLineBreakMode="Justify"
            text="Screen 1"
            width={1.6}
            height={1}
            scale={[0.5, 0.5, 0.5]}
            onClick={handleClick1}
          />
        </ViroFlexView>
        <ViroFlexView
          height={0.5}
          width={1.5}
          style={styles.button}
          onClick={handleClick2}>
          <ViroText
            style={styles.text}
            textLineBreakMode="Justify"
            text="Screen 2"
            width={1.6}
            height={1}
            scale={[0.5, 0.5, 0.5]}
            onClick={handleClick2}
          />
        </ViroFlexView>
      </ViroFlexView>
    </ViroARScene>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    opacity: 0.5,
    borderWidth: 1,
  },
  text: {
    flex: 1,
    paddingVertical: 0.1,
    fontSize: 42,
    borderColor: 'blue',
    borderWidth: 0.01,
  },
  button: {
    backgroundColor: 'blue',
  },
});
