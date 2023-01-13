import { Container, IconButton, useTheme } from "@mui/material";
import { grey } from "@mui/material/colors";
import Link from "next/link";
import { ShoppingCart, User } from "phosphor-react";
import { useEffect, useState } from "react";
import { useNavbarScrollAnimation } from "../../../hooks/useNavbarScrollAnimation";
import { useNodeRect } from "../../../hooks/useNodeRect";
import Logo from "../../Logo";
import NavItem from "../NavItem";
import styles from "./index.module.scss";

function DesktopMenu(props: { parent: HTMLDivElement | undefined }) {
  return (
    <div data-variant="desktop" className={styles.menu}>
      <Link href="/about">
        <NavItem className={styles.item}>
          <span className={styles.title}>Product</span>
        </NavItem>
      </Link>
      <NavItem className={styles.item} anchor={props.parent}>
        <span className={styles.title}>Features</span>
      </NavItem>
      <NavItem className={styles.item} anchor={props.parent}>
        <span className={styles.title}>About</span>
      </NavItem>
      <NavItem className={styles.item} anchor={props.parent}>
        <span className={styles.title}>Resources</span>
      </NavItem>
      <NavItem className={styles.item}>
        <span className={styles.title}>Contact</span>
      </NavItem>
    </div>
  );
}

export function Appbar() {
  const [parentRef, setParentRef] = useState<HTMLDivElement | null>();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const { trackingRef, inView, shouldFix, lastScrollPercent } =
    useNavbarScrollAnimation();

  const appbar = useNodeRect();

  /**
   * The states that handle Login Button or User icon Button appearance.
   * Replace with your own state, selector, or any other custom logic
   */
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    if (appbar.client) {
      let root = document.querySelector(":root") as HTMLHtmlElement;
      root.style.setProperty("--appbar-height", appbar.client.height+"px");
      root.style.setProperty("--appbar-width", appbar.client.width+"px");
    }
  }, [appbar.client]);

  return (
    <div className={styles.appbar__wrapper}>
      <div
        ref={trackingRef}
        className={styles.appbar__tracker}
        style={{
          width: appbar.client?.width ?? 0,
          height: appbar.client?.height ?? 0,
        }}
      ></div>
      <div
        ref={(el) => (appbar.ref.current = el as any)}
        data-fixed={shouldFix}
        className={styles.appbar}
      >
        <Container maxWidth="xl" className={styles.content} ref={setParentRef}>
          <Logo variant="dark" className={styles.logo} />
          <DesktopMenu parent={parentRef ?? undefined} />
          <div className={styles.side_actions}>
            <IconButton
              sx={{
                border: `1px solid ${theme.palette.primary.main}`,
              }}
            >
              <User weight="fill" color={theme.palette.primary.main} />
            </IconButton>
            <IconButton>
              <ShoppingCart
                weight="fill"
                color={isConnected ? grey[900] : grey[500]}
              />
            </IconButton>
          </div>
        </Container>
      </div>
    </div>
  );
}
