import React from 'react'
import styles from '../styles/Group.module.css'

const Group = () => {
    return(
      <div className={styles.parent}>
        <div className={styles.negcont}>
          <div className={styles.neg}>
            <div className={styles.profile1}></div>
            <div className={styles.text1}></div>
            <div className={styles.icon1}></div>
          </div>
        </div>
        <div className={styles.hoyrcont}>
          <div className={styles.hoyr}>
            <div className={styles.profile2}></div>
            <div className={styles.text2}></div>
            <div className={styles.icon2}></div>
          </div>
        </div>
        <div className={styles.guravcont}>
          <div className={styles.gurav}>
            <div className={styles.profile3}></div>
            <div className={styles.text3}></div>
            <div className={styles.icon3}></div>
          </div>
        </div>
        <div className={styles.dorovcont}>
          <div className={styles.dorov}>
            <div className={styles.profile4}></div>
            <div className={styles.text4}></div>
            <div className={styles.icon4}></div>
          </div>
        </div>
      </div>
    )
}

export default Group;