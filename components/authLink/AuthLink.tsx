"use client"
import Link from "next/link";

import style from "./authLink.module.css"
import { useState } from "react";

const AuthLink = () => {
  const [open, setOpen] = useState(false);

  const status:string = "notauthenticated"
  return <>
    {status === "notauthenticated" ? (
      <Link href="/login">login</Link>
    ) : (
      <>
        <Link href="/write">Write</Link>
        <span className={style.link}>Logout</span>
      </>
    )}
    <div className={style.burger}>
      <div className={style.line}></div>
      <div className={style.line}></div>
      <div className={style.line}></div>
    </div>
  </>;
}

export default AuthLink;