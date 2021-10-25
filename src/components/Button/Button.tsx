import { RefObject } from "react";
import { exportComponentAsPNG } from "react-component-export-image";

import css from "./Button.module.css";

type Props = {
  currentText: string;
  componentRef: RefObject<HTMLDivElement>;
  children: string;
};
export function Button({ currentText, componentRef, children }: Props) {
  return (
    <button
      disabled={componentRef === null || currentText === ""}
      className={css.button}
      onClick={() =>
        exportComponentAsPNG(componentRef, {
          fileName: `QR-${Date.now()}.png`,
          html2CanvasOptions: { backgroundColor: "transparent" },
        })
      }
    >
      {children}
    </button>
  );
}
