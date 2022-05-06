import React from "react"
import styles from "../styles/Home.module.css"

const Home = () => {
    return (
        <div>
          <div className={styles.hoyrcont}>
            <div className={styles.hoyr}>
              <div className={styles.hoyr1}>
                <i className="fa-solid fa-wallet"></i>
              </div>
              <div className={styles.hoyr2}>
                <div className={styles.hoyr2zasvar}>
                  <div className={styles.hoyr21}>
                    Нэмэлт мэдээлэл
                  </div>
                  <div className={styles.hoyr22}>
                    ₮ 20 000
                  </div>
                  <div className={styles.hoyr23}>
                    Хэтэвч
                  </div>
                </div>
              </div>
              <div className={styles.hoyr3}>
                <button className={styles.hoyr31}>
                  +
                </button>  
              </div>
            </div>
          </div>
          <div className={styles.guravcont}>
            <div className={styles.gurav}>
              <div className={styles.gurav1}>
                <i class="fa-solid fa-credit-card"></i>
              </div>
              <div className={styles.gurav2}>
                <div class={styles.gurav2zasvar}>
                  <div className={styles.gurav21}>
                    Нэмэлт мэдээлэл
                  </div>
                  <div className={styles.gurav22}>
                    ₮ 20 000
                  </div>
                  <div className={styles.gurav23}>
                    Карт
                  </div>
                </div>
              </div>
              <div className={styles.gurav3}>
                <button className={styles.gurav31}>
                  +
                </button>
              </div>
            </div>
          </div>
          <div className={styles.dorovcont}>
            <div className={styles.dorov}>
            <div className={styles.dorov1}>
              <i class="fa-solid fa-coins"></i>
            </div>
            <div className={styles.dorov2}>
              <div class={styles.dorov2zasvar}>
                <div className={styles.dorov21}>
                  Нэмэлт мэдээлэл
                </div>
                <div className={styles.dorov22}>
                  ₮ 20 000
                </div>
                <div className={styles.dorov23}>
                  Хадгаламж
                </div>
              </div>
            </div>
            <div className={styles.dorov3}>
              <button className={styles.dorov31}>
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    )
}
  


export default Home;