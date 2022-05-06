import React from 'react'
import styles from '../styles/Charti.module.css'

const Chart = () => {
  return(
    <div className={styles.cont}>
      <div className={styles.toggler}>
        <div className={styles.income}>
            Орлого
        </div>
        <a href='/chart'>
            <div className={styles.expense}>
                Зарлага
            </div>
        </a>
      </div>
      <div className={styles.row1}>
        <div className={styles.item1}>
          <div className={styles.icon1}>
            <i class="fa-solid fa-utensils"></i>
          </div>
          <div className={styles.text}>
            <b>Хоол</b>
            ₮ 40 000
          </div>
        </div>
        <div className={styles.item2}>
          <div className={styles.icon2}>
            <i class="fa-solid fa-car-side"></i>
          </div>
          <div className={styles.text}>
            <b>Тээвэр</b>
            ₮ 40 000
          </div>
        </div>
      </div>
      <div className={styles.row2}>
        <div className={styles.item3}>
          <div className={styles.icon3}>
            <i class="fa-solid fa-cart-shopping"></i>
          </div>
          <div className={styles.text}>
            <b>Дэлгүүр</b>
            ₮ 40 000
          </div>
        </div>
        <div className={styles.item4}>
            <div className={styles.icon4}>
              <i class="fa-solid fa-utensils"></i>
            </div>
            <div className={styles.text}>
              <b>Хэрэглээ</b>
              ₮ 40 000
            </div>
         </div>
      </div>
      <div className={styles.row4}>
        <div className={styles.item7}>
        <div className={styles.icon7}>
              <i class="fa-solid fa-utensils"></i>
            </div>
            <div className={styles.text}>
              <b>Хэрэглээ</b>
              ₮ 40 000
            </div>
        </div>
        <div className={styles.item8}>
        <div className={styles.icon8}>
              <i class="fa-solid fa-utensils"></i>
            </div>
            <div className={styles.text}>
              <b>Хэрэглээ</b>
              ₮ 40 000
            </div>
        </div>
      </div>
      <div className={styles.row5}>
        <div className={styles.item9}>
        <div className={styles.icon9}>
              <i class="fa-solid fa-utensils"></i>
            </div>
            <div className={styles.text}>
              <b>Хэрэглээ</b>
              ₮ 40 000
            </div>
        </div>
        <div className={styles.item10}>
        <div className={styles.icon10}>
              <i class="fa-solid fa-utensils"></i>
            </div>
            <div className={styles.text}>
              <b>Хэрэглээ</b>
              ₮ 40 000
            </div>
        </div>
      </div>
    </div>
  )
}

export default Chart;