import Link from "next/link";

const AuthLink = () => {
  const status:string = "notauthenticated"
  return <>
    {status !== "authenticated" ? (
      <Link href="/logout">Logout</Link>
    ) : (
      <Link href="/login">Login</Link>
    )}
  </>;
}

export default AuthLink;