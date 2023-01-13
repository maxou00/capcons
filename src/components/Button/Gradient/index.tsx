import classNames from "classnames";
import { HTMLAttributes } from "react";
import styles from "./index.module.scss";
export default function GradientButton(
  props: HTMLAttributes<HTMLButtonElement>
) {
  return (
    <button
      {...props}
      className={classNames(styles.button, props.className || "")}
    />
  );
}
