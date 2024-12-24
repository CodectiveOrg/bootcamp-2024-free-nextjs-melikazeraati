import GlobalSearchBoxComponent from "@/components/global-search-box/global-search-box.component";

import { MyLogo } from "@/logo/my_logo";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <h1>
        <MyLogo />
        رزرو
      </h1>
      <GlobalSearchBoxComponent />
      <div className={styles.history}>
        <div className={styles.title}>آخرین جستجوهای شما</div>
        <ul>
          <li>جستجو ۱</li>
          <li>جستجو ۲</li>
        </ul>
      </div>
    </div>
  );
}
