"use client"
import Link from "next/link";

import style from "./authLink.module.css"
import { useState } from "react";

const AuthLink = () => {
  const [open, setOpen] = useState(false);

  const status:string = "notauthenticated"
  return <>
    {status === "notauthenticated" ? (
      <Link href="/login" className={style.link}>login</Link>
    ) : (
      <>
        <Link href="/write" className={style.link}>Write</Link>
        <span className={style.link}>Logout</span>
      </>
    )}
    <div className={style.burger} onClick={() => setOpen(prev => !prev)}>
      <div className={style.line}></div>
      <div className={style.line}></div>
      <div className={style.line}></div>
    </div>
    {
      open && (
        <div className={style.responsiveMenu}>
          <Link href="/login">Home</Link>
          <Link href="/home">About</Link>
          <Link href="/contact">Contact</Link>

          {status === "notauthenticated" ? (
          <Link href="/login">login</Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <span className={style.link}>Logout</span>
            </>
          )}
        </div>
      )
    }
  </>;
}

export default AuthLink;