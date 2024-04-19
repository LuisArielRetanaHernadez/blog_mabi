import React from 'react';

import styles from "./footer.module.css"

import Image from 'next/image';

import logo from "../../public/logo.png"
import facebook from "../../public/socials/facebook.png"
import instagram from "../../public/socials/instagram.png"
import tiktok from "../../public/socials/tiktok.png"
import youtube from "../../public/socials/youtube.png"
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.information}>
        <div className={styles.logo}>
          <Image src={logo} alt='image logo' />
          <h1 className={styles.logoText}>Lambablog</h1>
        </div>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui accusamus 
          dicta consectetur nihil omnis laboriosam excepturi consequuntur 
          accusantium adipisci saepe delectus voluptates iure quam voluptatem, 
          ex odit illo eum. Numquam!
        </p>
        <div>
          <Image src={facebook} alt='icon facebook' />
          <Image src={instagram} alt='icon instagram' />
          <Image src={tiktok} alt='icon tiktok' />
          <Image src={youtube} alt='icon youtube' />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepae</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          <Link href="/">Blog</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Socials</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instgram</Link>
          <Link href="/">TikTok</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;