import { Container, IconButton } from "@mui/material";
import Link from "next/link";
import { Envelope, List, MapPin, Person, Phone, ShoppingCart, User, X } from "phosphor-react";
import { useMemo, useState } from "react";
import { FaLinkedin, FaSlack, FaTwitter, FaYoutube } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { useNavbarScrollAnimation } from "../../../hooks/useNavbarScrollAnimation";
import { useNodeRect } from "../../../hooks/useNodeRect";
import Logo from "../../Logo";
import NavigationDrawer from "../drawer";
import NavItem from "../NavItem";
import NavItemSurface from "../NavItem/surface";
import styles from "./index.module.scss";

function DesktopMenu(props: { parent: HTMLDivElement | undefined }) {
  const services = [
    "React.js Development",
    "Digital Marketing",
    "UI/UX Design",
  ];

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

  const { trackingRef, inView, shouldFix, lastScrollPercent } =
    useNavbarScrollAnimation();

  const appbar = useNodeRect();

  /**
   * The states that handle Login Button or User icon Button appearance. 
   * Replace with your own state, selector, or any other custom logic
   */
  const [isConnected, setIsConnected] = useState(false);

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
            <IconButton sx={{
              border: "1px solid red",
            }}>
              <User weight="fill"/>
            </IconButton>
            <IconButton>
              <ShoppingCart/>
            </IconButton>
          </div>
        </Container>
      </div>
    </div>
  );
}
