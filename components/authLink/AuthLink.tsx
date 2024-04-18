import Link from "next/link";

import style from "./authLink.module.css"

const AuthLink = () => {
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
  </>;
}

export default AuthLink;