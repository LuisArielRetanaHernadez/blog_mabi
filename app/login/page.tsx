"use client"
import { signIn, useSession } from "next-auth/react"

import styles from "./login.module.css"
import { useRouter } from "next/navigation"


const Login = () => {
  const { data, status } = useSession()

  const router = useRouter()

  if (status === "authenticated") {
    router.push("/")
  }

  if (status === "loading") {
    return <div className="">Loading...</div>
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div 
        className={styles.socialButton}
        onClick={() => signIn("google")}
        >Sing in with Google</div>
        <div className={styles.socialButton}>Sing in with Github</div>
        <div className={styles.socialButton}>Sing in with Facebook</div>
      </div>
    </div>
  )
}

export default Login