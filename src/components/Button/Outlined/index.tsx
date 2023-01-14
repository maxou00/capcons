import classNames from "classnames";
import { HTMLAttributes } from "react";
import styles from "./index.module.scss";
export default function OutlinedButton(
  props: HTMLAttributes<HTMLButtonElement>
) {
  return (
    <button
      {...props}
      className={classNames(styles.button, props.className || "")}
    />
  );
}
