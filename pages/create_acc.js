import React from "react"
import styles from '../styles/Create.module.css'

const Create = () => {
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
          </div>
          <div className={styles.pass1}>
            <i className="fa-solid fa-lock"></i>
            <input type="password" placeholder="Нууц үг баталгаажуулах" required/>
          </div>
          <div className={styles.submit}>
            <a href="/">
                <input value="Бүртгэл үүсгэх" type="button"/>
            </a>
          </div>
      </div>
    </div>
    )
}

export default Create;