import styles from "./index.module.scss";

export default function UpcomingEvent() {
  return (
    <div className={styles.base}>
      <div className={styles.content}>
        <h4 className={styles.upcoming}>UpComing Events</h4>
      </div>
    </div>
  );
}
