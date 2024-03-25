import { ElementType, ComponentPropsWithoutRef } from 'react';
import { Sprinkles, atoms, extractAtoms } from '../../core/atom';

export type BoxProps<C extends ElementType> = Sprinkles &
  ComponentPropsWithoutRef<C> & {
    as?: C;
    reset?: boolean;
  };

export const Box = <C extends ElementType = 'div'>({as, children, ...props}: BoxProps<C>) => {
  const Component = as || 'div';
  const [atomsProps, propsToForward] = extractAtoms(props);
  const className = atoms({
    className: propsToForward.className,
    reset: props.reset !== false ? typeof Component === "string" ? Component : "div": undefined,
    ...atomsProps
  });

  return (
    <Component
      {...propsToForward}
      className={className}
    >
      {children}
    </Component>
  );
};
