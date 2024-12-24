"use client";

import { ReactElement } from "react";

import MingcuteLocation2Fill from "@/icons/MingcuteLocation2Fill";
import MingcuteSearch2Fill from "@/icons/MingcuteSearch2Fill";

import styles from "./global-search-box.module.css";

export default function GlobalSearchBoxComponent(): ReactElement {
  return (
    <div className={styles["global-search-box"]}>
      <div className={styles.prefix}>
        <MingcuteSearch2Fill />
      </div>
      <input type="text" placeholder="رزرو..." />
      <div className={styles.divider}></div>
      <div className={styles.suffix}>
        <button>
          <MingcuteLocation2Fill />
          همه شهرها
        </button>
      </div>
    </div>
  );
}
