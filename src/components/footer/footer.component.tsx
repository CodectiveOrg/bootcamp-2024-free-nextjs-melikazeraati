"use client";

import { ReactElement } from "react";

import Link from "next/link";
import Image from "next/image";

import styles from "./footer.module.css";
import MingcuteYoutubeFill from "@/icons/MingcuteYoutubeFill";

export default function FooterComponent(): ReactElement {
  return (
    <footer className={styles.footer}>
      <div className={styles.writings}>
        <div className={styles.logo}>رزرو</div>
        <p className={styles.description}>رزروآنلاین، سریع و راحت</p>
      </div>
      <div className={styles.visuals}>
        <ul className={styles.certificates}>
          <li>
            <Link href="#">
              {/* <Image src={} alt="logo" /> */}
            </Link>
          </li>
          <li>
            <Link href="#">
              {/* <Image src={} alt="certificate" /> */}
            </Link>
          </li>
          <li>
            <Link href="#">
              {/* <Image src={} alt="enamad" /> */}
            </Link>
          </li>
        </ul>
        <ul className={styles.socials}>
          <li>
            <Link href="youtube">
              <MingcuteYoutubeFill />
            </Link>
          </li>
          <li>
            <Link href="linkedin">
              <MingcuteYoutubeFill />
            </Link>
          </li>
          <li>
            <Link href="telegram">
              <MingcuteYoutubeFill />
            </Link>
          </li>
        </ul>
      </div>
      <p className={styles.copy}>
        تمامی حقوق مادی و معنوی این وبسایت، خدمات و محتوای آن متعلق به من
        میباشد!
      </p>
    </footer>
  );
}
