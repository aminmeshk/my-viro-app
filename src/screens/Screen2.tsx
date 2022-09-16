import React from 'react';
import {
  ViroARPlane,
  ViroARScene,
  ViroFlexView,
  ViroImage,
  ViroMaterials,
  ViroOmniLight,
  ViroText,
} from '@viro-community/react-viro';
import { StyleSheet } from 'react-native';
import { ScreenProps } from '@types';

export const Screen2: React.FC<ScreenProps> = ({ pop }) => {
  return (
    <ViroARScene>
      <ViroFlexView
        height={2}
        width={7}
        position={[0, 0, -1.8]}
        scale={[0.2, 0.2, 0.2]}
        onClick={pop}>
        <ViroText
          width={7}
          height={0.5}
          text="Point camera at a flat surface"
          style={styles.back}
        />
        <ViroText
          width={7}
          height={0.5}
          text="Tap here to go back"
          style={styles.back}
        />
      </ViroFlexView>
      <ViroARPlane minHeight={0.2} minWidth={0.2} alignment="Horizontal">
        <ViroOmniLight position={[1, 1, 1]} color="#FFFFFF" />

        <ViroImage
          position={[0, 0.1, 0]}
          rotation={[-90, 0, 0]}
          scale={[0.3, 0.3, 0.3]}
          source={require('../../assets/images/blackbit/blackbit.jpg')}
        />
      </ViroARPlane>
    </ViroARScene>
  );
};

ViroMaterials.createMaterials({
  box: {
    lightingModel: 'Phong',
    diffuseColor: '#FF0000',
  },
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    opacity: 0.5,
    borderWidth: 1,
  },
  back: {
    fontSize: 42,
  },
});
