import { forwardRef, ReactNode } from "react";
import css from "./QrContainer.module.css";

type Props = {
  children: ReactNode;
};

export const QrContainer = forwardRef<HTMLDivElement, Props>(
  ({ children }, ref) => {
    return (
      <section className={css.qrContainer} ref={ref}>
        <div>{children}</div>
        <p>scan me</p>
      </section>
    );
  }
);

QrContainer.displayName = "QrContainer";
