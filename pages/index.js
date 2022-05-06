import React from "react"
import styles from '../styles/Login.module.css'

const Login = () => {
  return (
      <div className={styles.laana}>
          <div>
              <div className={styles.laana1}>
                  <div className={styles.logo2}></div>
              </div>
          </div>
          <div className={styles.cont}>
            <div className={styles.mail}>
              <i className="fa-solid fa-envelope"></i>
              <input type="text" placeholder="Цахим шуудан" required/>
            </div>
            <div className={styles.pass}>
              <i className="fa-solid fa-lock"></i>
              <input type="password" placeholder="Нууц үг" required/>
              <div className={styles.check}>
                <input type="checkbox"/>
                <label>Намайг сануул</label>
              </div>
            </div>
            <div className={styles.submit}>
              <a href="/home">
                <input value="Нэвтрэх" type="button"/>
              </a>
              <div className={styles.create}>
                <a href="/create_acc"> Хаяг нээх </a>
              </div>
            </div>
        </div>
      </div>
  )
}
export default Login;