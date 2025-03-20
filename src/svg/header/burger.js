import { clsx } from '@/utils/functions';
import React from 'react';

const SvgComponent = ({ width = 16, height = 16, className, ...remainingProps }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width} height={height} className={clsx('svg-wrapper', className)} {...remainingProps}>
  <rect x="2" y="5" width="20" height="3" rx="1.5" fill="#FFF"/>
  <rect x="2" y="11" width="20" height="3" rx="1.5" fill="#FFF"/>
  <rect x="2" y="17" width="20" height="3" rx="1.5" fill="#FFF"/>
</svg>
);

export default SvgComponent;
