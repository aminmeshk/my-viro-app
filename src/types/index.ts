import React from 'react';

export type ScreenProps = {
  push: (scene: React.ReactNode) => void;
  pop: () => void;
};
