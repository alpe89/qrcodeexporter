import { ChangeEvent } from "react";
import css from "./Input.module.css";

type Props = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export function Input({ value, onChange }: Props) {
  return (
    <input
      className={css.input}
      value={value}
      onChange={onChange}
      placeholder="Testo..."
    />
  );
}
