import React from 'react';
import {
  Viro3DObject,
  ViroAnimations,
  ViroARImageMarker,
  ViroARScene,
  ViroARTrackingTargets,
  ViroFlexView,
  ViroMaterials,
  ViroOmniLight,
  ViroText,
} from '@viro-community/react-viro';
import { StyleSheet } from 'react-native';
import { ScreenProps } from '@types';

export const Screen1: React.FC<ScreenProps> = ({ pop }) => {
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
          text="Point camera at laptop keyboard"
          style={styles.back}
        />
        <ViroText
          width={7}
          height={0.5}
          text="Tap here to go back"
          style={styles.back}
        />
      </ViroFlexView>
      <ViroARImageMarker target="laptop">
        <ViroOmniLight position={[0.25, 1, 0.25]} color="#FFFFFF" />

        <Viro3DObject
          type="VRX"
          position={[0, 0.25, 0]}
          scale={[0.003, 0.003, 0.003]}
          rotation={[0, 70, 0]}
          source={require('../../assets/3d-models/gear/gear.vrx')}
          materials={['gear']}
          animation={{ name: 'loopRotate', run: true, loop: true }}
        />
      </ViroARImageMarker>
    </ViroARScene>
  );
};

ViroARTrackingTargets.createTargets({
  laptop: {
    source: require('../../assets/images/laptop/mbp-cr.jpg'),
    orientation: 'Up',
    physicalWidth: 0.3,
  },
});

ViroMaterials.createMaterials({
  gear: {
    lightingModel: 'Phong',
  },
});

ViroAnimations.registerAnimations({
  loopRotate: {
    properties: {
      rotateY: '+=45',
    },
    duration: 400,
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
