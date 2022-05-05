import React from 'react'
import styles from '../styles/Group.module.css'

const Group = () => {
    return(
     <div className={styles.cont}>
       <div className={styles.neg}>
        <div className={styles.profile1}></div>
        <div className={styles.text1}> Аав </div>
        <div className={styles.icon1}>
          <i class="fa-solid fa-sterling-sign"></i>
        </div>
       </div>
       <div className={styles.hoyr}>
        <div className={styles.profile2}></div>
        <div className={styles.text2}> Ээж </div>
        <div className={styles.icon2}>
          <i class="fa-solid fa-sterling-sign"></i>
        </div>
       </div>
       <div className={styles.gurav}>
        <div className={styles.profile3}></div>
        <div className={styles.text3}> Ах </div>
        <div className={styles.icon3}>
          <i class="fa-solid fa-sterling-sign"></i>
        </div>
       </div>
       <div className={styles.dorov}>
        <div className={styles.profile4}></div>
        <div className={styles.text4}> Дүү </div>
        <div className={styles.icon4}> 
          <i class="fa-solid fa-sterling-sign"></i>
        </div>
       </div>
     </div>
    )
}

export default Group;