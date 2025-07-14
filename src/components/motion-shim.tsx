/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, forwardRef } from 'react';

interface MotionDivProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  initial?: any;
  animate?: any;
  variants?: any;
  transition?: any;
  whileHover?: any;
  whileTap?: any;
  whileInView?: any;
  viewport?: any;
  exit?: any;
}

export const MotionDiv = forwardRef<HTMLDivElement, MotionDivProps>(
  ({ children, className = "", style = {}, ...restProps }, ref) => {
    // Extract animation props and ignore them, keep only HTML props
    const { initial, animate, variants, transition, whileHover, whileTap, whileInView, viewport, exit, ...htmlProps } = restProps;
    
    return (
      <div ref={ref} className={className} style={style} {...htmlProps}>
        {children}
      </div>
    );
  }
);

MotionDiv.displayName = 'MotionDiv';

// Create component variants for different HTML elements
export const MotionA = forwardRef<HTMLAnchorElement, MotionDivProps & React.AnchorHTMLAttributes<HTMLAnchorElement>>(
  ({ children, className = "", style = {}, ...restProps }, ref) => {
    const { initial, animate, variants, transition, whileHover, whileTap, whileInView, viewport, exit, ...htmlProps } = restProps;
    return (
      <a ref={ref} className={className} style={style} {...htmlProps}>
        {children}
      </a>
    );
  }
);

export const MotionButton = forwardRef<HTMLButtonElement, MotionDivProps & React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ children, className = "", style = {}, ...restProps }, ref) => {
    const { initial, animate, variants, transition, whileHover, whileTap, whileInView, viewport, exit, ...htmlProps } = restProps;
    return (
      <button ref={ref} className={className} style={style} {...htmlProps}>
        {children}
      </button>
    );
  }
);

MotionA.displayName = 'MotionA';
MotionButton.displayName = 'MotionButton';

// Create a motion object that mimics framer-motion but uses normal elements
export const motion = {
  div: MotionDiv,
  section: MotionDiv,
  button: MotionButton,
  a: MotionA,
  p: MotionDiv,
  h1: MotionDiv,
  h2: MotionDiv,
  h3: MotionDiv,
  h4: MotionDiv,
  span: MotionDiv,
};

// Mock useInView hook that always returns true
export const useInView = (ref: any, options?: any) => {
  return true;
};

// Mock AnimatePresence component
export const AnimatePresence = ({ children, ...props }: { children: ReactNode, [key: string]: any }) => {
  return <>{children}</>;
}; 