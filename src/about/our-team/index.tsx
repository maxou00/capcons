import { Container } from "@mui/material";
import styles from "./index.module.scss";
import linkedinIcon from "../../../assets/icons/LinkedIn.svg";
import member1 from "../../../assets/img/member_2.png";
import member2 from "../../../assets/img/member_2.png";
import member3 from "../../../assets/img/member_3.png";
import member4 from "../../../assets/img/member_4.png";

import { Text } from "../../components/Text";

const members = [
  {
    avatar: member1.src,
    name: "Alexander Maxwell",
    role: "Founder",
  },
  {
    avatar: member2.src,
    name: "Alexander Maxwell",
    role: "Founder",
  },
  {
    avatar: member3.src,
    name: "Alexander Maxwell",
    role: "Founder",
  },
  {
    avatar: member4.src,
    name: "Alexander Maxwell",
    role: "Founder",
  },
];

export default function OurTeam() {
  return (
    <div className={styles.base}>
      <Container maxWidth="xl" className={styles.container}>
        <div className={styles.text}>
          <Text variant="heading">Our team</Text>
          <Text variant="body">
            It takes an energetic group of passionate operators to create a
            purpose for our users
          </Text>
        </div>
        <div className={styles.members}>
          {members.map((g, i) => {
            return (
              <div className={styles.member} key={g.name + i}>
                <div className={styles.avatar}>
                  <div className={styles.avatar__img}>
                    <img
                      className={styles.avatar__img__content}
                      src={g.avatar}
                      alt={g.name}
                    />
                  </div>
                  <img
                    className={styles.avatar__cta}
                    src={linkedinIcon.src}
                    alt="LinkedIn"
                  />
                </div>
                <div className={styles.content}>
                  <Text variant="title">{g.name}</Text>
                  <Text variant="body:small">{g.role}</Text>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
