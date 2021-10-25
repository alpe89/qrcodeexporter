import { forwardRef, ReactNode } from "react";
import telephone from "../../assets/images";
import css from "./QrContainer.module.css";

type Props = {
  children: ReactNode;
};

export const QrContainer = forwardRef<HTMLDivElement, Props>(
  ({ children }, ref) => {
    return (
      <section ref={ref} style={{ margin: "8px", width: "330px" }}>
        <div className={css.qrContainer}>
          <div>{children}</div>
        </div>
        <footer>
          <div>
            <img src={telephone} alt="a telephone icone" />
          </div>
          <h1>scan me</h1>
        </footer>
      </section>
    );
  }
);

QrContainer.displayName = "QrContainer";
