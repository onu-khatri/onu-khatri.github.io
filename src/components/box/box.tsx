import { forwardRef } from 'react';
import type { AllHTMLAttributes, ElementType, ReactNode } from 'react';
import { atoms, extractAtoms, Sprinkles } from '../../core/atom';
import * as resetStyles from '../../core/reset.css';

export interface BoxProps
  extends Omit<
      AllHTMLAttributes<HTMLElement>,
      'as' | 'width' | 'height' | 'color' | 'className'
    >,
    Sprinkles {
  children?: ReactNode;
  as?: ElementType;
  className?: string,
  reset?: boolean
}

export const Box = forwardRef<HTMLElement, BoxProps>(
  (
    {
      as: Element = 'div',
      className,
      position,
      ...props
    },
    ref
  ) => {
    
    const [atomsProps, propsToForward] = extractAtoms(props);
    const styleClassName = atoms({
      className: className,
      reset: props.reset !== false ? Element as keyof typeof resetStyles.element: undefined,
      ...{...atomsProps, position: position || 'relative'}
    });
    
    return <Element ref={ref} className={styleClassName} {...propsToForward} />;
  }
);