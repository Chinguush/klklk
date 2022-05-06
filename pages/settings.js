import React from 'react'
import styles from '../styles/Settings.module.css'

const Settings = () => {
  return (
    <div className={styles.father}>
      <div className={styles.goy}>
        <div className={styles.goyzuragbagtaamj}>
          <div className={styles.goy}>
            <div className={styles.goyzuragbagtaamj}>
              <div className={styles.goyzuraas}>
              </div>
              <div className={styles.goyzurag}>
              </div>
              <div className={styles.goyzuraas1}>
              </div>
            </div>
            <div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.cont}>
        <div className={styles.iconCont}>
          <div className={styles.icon1}>
            <i class="fa-solid fa-circle-user"></i>
          </div>
          <div className={styles.icon2}>
            <i class="fa-solid fa-user-group"></i>
          </div>
          <div className={styles.icon3}>
            <i class="fa-brands fa-bitcoin"></i>
          </div>   
          <div className={styles.icon4}>
            <i class="fa-solid fa-credit-card"></i>
          </div>           
          <div className={styles.icon5}>
            <a href='/'>
              <i class="fa-solid fa-right-from-bracket"></i>
            </a>            
          </div>                
        </div>
        <div className={styles.textCont}>
          <div className={styles.text1}> Нүүр хуудас </div>
          <div className={styles.text2}> Бүлгэм </div>
          <div className={styles.text3}> Тэмдэгт </div>
          <div className={styles.text4}> Карт нэмэх </div>
          <div className={styles.text5}>
            <a href='/'>
             Гарах 
            </a>
          </div>
        </div>
        <div className={styles.arrowCont}>
          <div className={styles.arrow1}>
            <i class="fa-solid fa-chevron-right"></i>
          </div>          
          <div className={styles.arrow2}>
            <i class="fa-solid fa-chevron-right"></i>
          </div>  
          <div className={styles.arrow3}>
            <i class="fa-solid fa-chevron-right"></i>
          </div>  
          <div className={styles.arrow4}>
            <i class="fa-solid fa-chevron-right"></i>
          </div>  
          <div className={styles.arrow5}>
            <a href='/'>
              <i class="fa-solid fa-chevron-right"></i>
            </a>
          </div>  
        </div>
      </div>
  </div>
  )
}

export default Settings;
