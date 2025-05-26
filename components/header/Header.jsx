import Link from "next/link";
import styles from "./header.module.css";
import { FolderDown } from "lucide-react";

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={`wrapper ${styles.navbar}`}>
          <Link href="/" className={styles.logo}>
            Ginko
          </Link>

          <nav className={styles.nav}>
            <ul>
              <li>Home</li>
              <li>Add</li>
              <li>Tips</li>
            </ul>
          </nav>

          <button className={styles.save}>
            <FolderDown />
            <p>Save</p>
          </button>
        </div>
      </header>
    </>
  );
}
