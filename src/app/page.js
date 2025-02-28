import Button from "@/components/button";
import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <Button text="sdsdsd" />
      <h1 className={styles["x"]}>Home</h1>
    </div>
  );
}
