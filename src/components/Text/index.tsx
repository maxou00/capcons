import { useTheme } from "@emotion/react";
import classNames from "classnames";
import { HTMLAttributes } from "react";
import styles from "./index.module.scss";

interface ButtonText {
  variant: "button";
}

interface TinyText {
  variant: "tiny";
}

interface HeadingText {
  variant: "heading";
}

interface Headline1Text {
  variant: "headline1";
}

interface SubheadingText {
  variant: "subheading";
}

interface FeatureText {
  variant: "feature";
}

interface Body {
  variant: "body";
}

interface BodyBold {
  variant: "body:bold";
}

interface BodySmall {
  variant: "body:small";
}

interface Title {
  variant: "title";
}

type TextProps = HTMLAttributes<HTMLElement> &
  (
    | Body
    | BodyBold
    | FeatureText
    | SubheadingText
    | Headline1Text
    | Headline1Text
    | HeadingText
    | TinyText
    | ButtonText
    | BodySmall
    | Title
  );

export function Text(props: TextProps) {
  const theme = useTheme();
  let clx = classNames(styles.text, props.className || "");

  if (props.variant === "button") {
    return (
      <span data-text-variant={props.variant} {...props} className={clx}>
        {props.children}
      </span>
    );
  }
  if (props.variant === "feature") {
    return (
      <h3 data-text-variant={props.variant} {...props} className={clx}>
        {props.children}
      </h3>
    );
  }
  if (props.variant === "heading") {
    return (
      <h2 data-text-variant={props.variant} {...props} className={clx}>
        {props.children}
      </h2>
    );
  }
  if (props.variant === "headline1") {
    return (
      <h1 data-text-variant={props.variant} {...props} className={clx}>
        {props.children}
      </h1>
    );
  }
  if (props.variant === "subheading") {
    return (
      <h1 data-text-variant={props.variant} {...props} className={clx}>
        {props.children}
      </h1>
    );
  }
  if (props.variant === "title") {
    return (
      <h4 data-text-variant={props.variant} {...props} className={clx}>
        {props.children}
      </h4>
    );
  }

  return (
    <p data-text-variant={props.variant} {...props} className={clx}>
      {props.children}
    </p>
  );
}
