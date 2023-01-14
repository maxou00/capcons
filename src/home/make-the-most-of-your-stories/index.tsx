import SectionBottom from "./bottom";
import { SectionTop } from "./top";
import styles from "./index.module.scss";

export default function MakeTheMostOfYourStories() {
  return (
    <div className={styles.base}>
      <SectionTop />
      <SectionBottom />
    </div>
  );
}
