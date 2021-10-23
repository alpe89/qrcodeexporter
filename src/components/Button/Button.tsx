import { RefObject } from "react";
import { exportComponentAsPNG } from "react-component-export-image";

import css from "./Button.module.css";

type Props = {
  componentRef: RefObject<HTMLDivElement>;
  children: string;
};
export function Button({ componentRef, children }: Props) {
  return (
    <button
      disabled={componentRef === null}
      className={css.button}
      onClick={() => exportComponentAsPNG(componentRef)}
    >
      {children}
    </button>
  );
}
