import { FocusEvent, HTMLAttributes, Ref, useCallback, useState } from "react";
import classNames from "classnames";
import styles from "./index.module.scss";

interface SinglelineInputProps extends HTMLAttributes<HTMLInputElement> {
  multilines?: false;
  baseProps?: HTMLAttributes<HTMLDivElement>;
  baseRef?: Ref<HTMLDivElement>;
}

interface MultilineInputProps extends HTMLAttributes<HTMLTextAreaElement> {
  multilines: true;
  baseProps?: HTMLAttributes<HTMLDivElement>;
  baseRef?: Ref<HTMLDivElement>;
}

export default function Input({
  baseProps,
  baseRef,
  multilines,
  ...inputProps
}: SinglelineInputProps | MultilineInputProps) {
  const [focused, setFocused] = useState(false);

  const handleFocusCapture = useCallback(
    (event: FocusEvent<HTMLInputElement, Element>) => {
      setFocused(true);
      if (inputProps.onFocusCapture) {
        inputProps.onFocusCapture(event as any);
      }
    },
    [inputProps.onFocusCapture]
  );

  const handleBlurCapture = useCallback(
    (event: FocusEvent<HTMLInputElement, Element>) => {
      setFocused(false);
      if (inputProps.onBlurCapture) {
        inputProps.onBlurCapture(event as any);
      }
    },
    [inputProps.onBlurCapture]
  );

  return (
    <div
      {...baseProps}
      ref={baseRef as any}
      data-focus={focused}
      className={classNames(styles.base, baseProps?.className || "")}
    >
      {!multilines ? (
        <input
          {...inputProps as any}
          onFocusCapture={handleFocusCapture}
          onBlurCapture={handleBlurCapture}
          data-focus={focused}
          className={classNames(styles.input, inputProps?.className || "")}
        />
      ) : (
        <textarea
          {...inputProps as any}
          onFocusCapture={handleFocusCapture as any}
          onBlurCapture={handleBlurCapture as any}
          data-focus={focused}
          className={classNames(styles.input, inputProps?.className || "")}
        ></textarea>
      )}
    </div>
  );
}
