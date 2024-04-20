import styles from "./login.module.css"


const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialButton}>Sing in with Google</div>
        <div className={styles.socialButton}>Sing in with Github</div>
        <div className={styles.socialButton}>Sing in with Facebook</div>
      </div>
    </div>
  )
}

export default Login