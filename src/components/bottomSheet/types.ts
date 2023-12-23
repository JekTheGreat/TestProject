import {ReactNode} from 'react';

export interface BottomsheetProps {
  isVisible: boolean;
  onClose: () => void;
  renderChild: ReactNode;
}
