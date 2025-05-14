import React from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      {/* Glass Backdrop */}
      <div className={styles.backdrop}></div>
      <div className={styles.backdropEdge}></div>

      {/* Navigation */}
      <nav className={styles.nav}>
        <ul>
          <li>Home</li>
          <li>Reports</li>
          <li>Learn</li>
        </ul>

        <button>login</button>
      </nav>
    </header>
  );
}
