import React from 'react'
import styles from '../styles/Settings.module.css'

const Settings = () => {
  return (
    <div className={styles.father}>
<<<<<<< HEAD
      <div className={styles.goy}>
        <div className={styles.goyzuragbagtaamj}>
=======
      <div className={styles.profile}></div>
      <ul>
        <li className={styles.homePage}>
          <a href='#'>
            <span className={styles.iconS}>
              <i className="fa-regular fa-circle-user"></i>
              <span className={styles.textS}> Нүүр хуудас
                <i id="1" class="fa-solid fa-chevron-right"></i>
              </span>
            </span>
          </a>
        </li>
        <li className={styles.group}>
          <a href='#'>
            <span className={styles.iconS}>
              <i className="fa-solid fa-user-group"></i>
              <span className={styles.textS}> Бүлэг
              </span>
              <i id="2" className="fa-solid fa-chevron-right"></i>
            </span>
          </a>
        </li>
        <li className={styles.currency}>
          <a href='#'>
            <span  className={styles.iconS}>
              <i className="fa-brands fa-bitcoin"></i>
              <span className={styles.textS}> Тэмдэг 
                <i id="3" className="fa-solid fa-chevron-right"></i>
              </span>
            </span>
          </a>
        </li>
        <li className={styles.addCard}>
          <a href='#'>
            <span  className={styles.iconS}>
              <i class="fa-solid fa-credit-card"></i>
              <span className={styles.textS}> Карт нэмэх 
                <i id="4" className="fa-solid fa-chevron-right"></i>
              </span>
            </span>            
          </a>
        </li>
        <li className={styles.logOut}>
          <a href='#'>
            <span  className={styles.iconS}>
              <i class="fa-solid fa-right-from-bracket"></i>   
              <span className={styles.textS}> Гарах
               <i id="5" className="fa-solid fa-chevron-right"></i>
              </span>
            </span>
          </a>
        </li>
      </ul>
    <div className={styles.goy}>
      <div className={styles.goyzuragbagtaamj}>
>>>>>>> a7a6c826ff71ff4d8ea2a2df5881412b6e8c55ad
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
            <i class="fa-solid fa-right-from-bracket"></i>
          </div>                
        </div>
        <div className={styles.textCont}>
          <div className={styles.text1}> Нүүр хуудас </div>
          <div className={styles.text2}> Бүлгэм </div>
          <div className={styles.text3}> Тэмдэгт </div>
          <div className={styles.text4}> Карт нэмэх </div>
          <div className={styles.text5}> Гарах </div>
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
            <i class="fa-solid fa-chevron-right"></i>
          </div>  
        </div>
      </div>
  </div>
  )
}

export default Settings;
