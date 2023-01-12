import { HTMLAttributes, useMemo } from "react";
import logo_black from "../../../assets/img/logo_black.svg";
import logo_light from "../../../assets/img/logo_light.png";

export default function Logo({
  variant,
  ...props
}: HTMLAttributes<HTMLImageElement> & { variant?: "light" | "dark" }) {
  const src = useMemo(() => {
    if (variant === "dark") {
      return logo_black.src;
    }
    return logo_light.src;
  }, [variant]);

  return <img {...props} src={src} alt="Capcons" />;
}
