import React from 'react'
import styles from '../styles/Settings.module.css'

const Settings = () => {
  return (
    <div className={styles.father}>
      <div className={styles.profile}></div>
      <ul>
        <li className={styles.homePage}>
          <a href='#'>
            <span className={styles.iconS}>
              <i className="fa-regular fa-circle-user"></i>
            </span>
            <span className={styles.textS}> Нүүр хуудас {'>'} </span>
          </a>
        </li>
        {/*  */}
        <li className={styles.group}>
          <a href='#'>
            <span className={styles.iconS}>
              <i class="fa-solid fa-user-group"></i>
            </span>
            <span className={styles.textS}> Бүлэг {'>'} </span>
          </a>
        </li>
        <li className={styles.currency}>
          <a href='#'>
            <span  className={styles.iconS}>
              <i class="fa-brands fa-bitcoin"></i>
            </span>
            <span className={styles.textS}> Тэмдэг {'>'} </span>
          </a>
        </li>
        <li className={styles.addCard}>
          <a href='#'>
            <span  className={styles.iconS}>
              <i class="fa-solid fa-credit-card"></i>  
            </span>
            <span className={styles.textS}> Карт нэмэх {'>'} </span>
          </a>
        </li>
        <li className={styles.logOut}>
          <a href='#'>
            <span  className={styles.iconS}>
              <i class="fa-solid fa-right-from-bracket"></i>
            </span>
            <span className={styles.textS}> Гарах {'>'} </span>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Settings;