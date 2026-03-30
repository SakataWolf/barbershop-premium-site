import { IconBase } from './IconBase';

export const CheckCircle = ({ className }) => (
  <IconBase className={className}>
    <circle cx="12" cy="12" r="9" />
    <polyline points="9 12 11 14 15 10" />
  </IconBase>
);