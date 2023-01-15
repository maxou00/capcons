import { Container } from "@mui/material";
import styles from "./index.module.scss";
import eyeIcon from "../../../assets/icons/Eye.svg";
import targetIcon from "../../../assets/icons/Target.svg";
import { Text } from "../../components/Text";

const goals = [
  {
    icon: eyeIcon.src,
    title: "Our vision",
    subtitle:
      "Making the world better allow people to do what matters to them, because when someone tries something new, or takes a daring leap, everyone nearby feels their passionate energy",
  },
  {
    icon: targetIcon.src,
    title: "Our Mission",
    subtitle:
      "Help people and businesses assist to have conversations that make better decision-making. Creating value requires more insight not more data, fresh thinking, less effort, more networks, etc",
  },
];
export default function OurGoals() {
  return (
    <div className={styles.base}>
      <Container maxWidth='xl' className={styles.container}>
        {goals.map((g, i) => {
          return (
            <div className={styles.goal} key={g.title + i}>
              <div className={styles.icon_wrapper}>
                <img className={styles.icon} src={g.icon} alt={g.title} />
              </div>
              <div className={styles.content}>
                <Text variant="subheading">{g.title}</Text>
                <Text variant="body:bold">{g.subtitle}</Text>
              </div>
            </div>
          );
        })}
      </Container>
    </div>
  );
}
