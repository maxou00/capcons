import { Box, Container, Typography, useTheme } from "@mui/material";
import { ArrowUpRight } from "phosphor-react";
import Logo from "../Logo";
import { Text } from "../Text";
import styles from "./index.module.scss";

const services = [
  {
    name: "UI/UX Design",
  },
  {
    name: "WP Development",
  },
  {
    name: "Digital Marketing",
  },
  {
    name: "React Development",
  },
];

export function Footer() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        bgcolor: theme.palette.text.primary,
        color: (theme.palette.text as any).onPrimary,
      }}
      className={styles.root}
    >
      <Container maxWidth="xl" className={styles.container}>
        <div data-type="heading" className={styles.column}>
          <Logo className={styles.logo} />
        </div>
        <div className={styles.column}>
          <Text variant="body:bold">About us</Text>
          <Text variant="body:small">Our story</Text>
          <Text variant="body:small">The team</Text>
          <Text variant="body:small">Career</Text>
          <Text variant="body:small">Contact us</Text>
        </div>
        <div className={styles.column}>
          <Text variant="body:bold">Product</Text>
          <Text variant="body:small">For creators</Text>
          <Text variant="body:small">For brands</Text>
          <Text variant="body:small">Features</Text>
          <Text variant="body:small">Pricing</Text>
        </div>
        <div className={styles.column}>
          <Text variant="body:bold">Resources</Text>
          <Text variant="body:small">Insights</Text>
          <Text variant="body:small">Events</Text>
          <Text variant="body:small">Courses</Text>
          <Text variant="body:small">Press Release</Text>
        </div>
        <div className={styles.column}>
          <Text variant="body:bold">Legal</Text>
          <Text variant="body:small">Privacy Policy</Text>
          <Text variant="body:small">Terms of use</Text>
          <Text variant="body:small">Cookies policies</Text>
          <Text variant="body:small">Community guidelines</Text>
        </div>
      </Container>
      <div className={styles.copyright_area}>
        <Container maxWidth="xl" className={styles.copyright_area__container}>
          <Typography variant="body1">
            © capcons Inc 2023. All rights reserved
          </Typography>
          <div className={styles.copyright_links}>
            <a className={styles.copyright_link} href="/legal/terms-of-use">
              Instagram
              <ArrowUpRight />
            </a>
            <a className={styles.copyright_link} href="/legal/terms-of-use">
              LinkedIn
              <ArrowUpRight />
            </a>
            <a className={styles.copyright_link} href="/legal/terms-of-use">
              Youtube
              <ArrowUpRight />
            </a>
            <a className={styles.copyright_link} href="/legal/privacy-policy">
              Facebook
              <ArrowUpRight />
            </a>
          </div>
        </Container>
      </div>
    </Box>
  );
}
