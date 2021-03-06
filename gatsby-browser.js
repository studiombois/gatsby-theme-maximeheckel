/**
 * Import fonts to expose them globaly
 */
import 'typeface-fira-code';

import React from 'react';
import RootWrapper from './src/context/ThemeProvider';

export const wrapRootElement = ({ element }) => {
  return <RootWrapper>{element}</RootWrapper>;
};
