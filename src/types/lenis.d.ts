declare module 'react-lenis' {
  import { ReactNode, CSSProperties } from 'react';

  export interface LenisOptions {
    wrapper?: HTMLElement | Window;
    content?: HTMLElement;
    wheelEventsTarget?: HTMLElement | Window;
    eventsTarget?: HTMLElement | Window;
    smoothWheel?: boolean;
    syncTouch?: boolean;
    smoothTouch?: boolean;
    touchMultiplier?: number;
    touchInertiaMultiplier?: number;
    duration?: number;
    easing?: (t: number) => number;
    lerp?: number;
    infinite?: boolean;
    orientation?: 'vertical' | 'horizontal';
    gestureOrientation?: 'vertical' | 'horizontal' | 'both';
    tabIndex?: number;
    wheelMultiplier?: number;
    autoResize?: boolean;
  }

  export interface ReactLenisProps {
    root?: boolean;
    options?: LenisOptions;
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
  }

  export const ReactLenis: React.FC<ReactLenisProps>;
  export default ReactLenis;
}