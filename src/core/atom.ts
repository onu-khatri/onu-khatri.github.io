import clsx from "clsx";
import { sprinkles } from "./sprinkles.css";
import { omit, pick } from "lodash";
import { base, element } from "./reset.css";

export type Sprinkles = Parameters<typeof sprinkles>[0];

export interface Atoms extends Sprinkles {
  resetElement?: keyof JSX.IntrinsicElements | undefined;
  className?: string | string[];
}

export function atoms(atoms: Atoms) {    
  const { resetElement: reset, className, ...rest } = atoms;
  const sprinklesClassNames = sprinkles(rest);

  return clsx(
    reset ? [base, element[reset as keyof JSX.IntrinsicElements]] : null,
    sprinklesClassNames,
    className
  );
}

const keys = Array.from(sprinkles.properties.keys());
export const extractAtoms = <P extends object>(props: P) => [
  pick(props, keys),
  omit(props, keys),
];