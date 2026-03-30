import { IconBase } from './IconBase';

export const Clock = ({ className }) => (
  <IconBase className={className}>
    <circle cx="12" cy="12" r="9" />
    <polyline points="12 7 12 12 15 14" />
  </IconBase>
);