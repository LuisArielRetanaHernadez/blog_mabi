import Link from "next/link";

const AuthLink = () => {
  const status:string = "notauthenticated"
  return <>
    {status === "authenticated" ? (
      <Link href="/login">login</Link>
    ) : (
      <>
        <Link href="/write">Write</Link>
        <span>Logout</span>
      </>
    )}
  </>;
}

export default AuthLink;