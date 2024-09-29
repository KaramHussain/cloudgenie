import React from 'react'
import { card } from '../assets'
import Button from './Button'
import styles, { layout } from '../style'

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Efficiently Manage  <br className='sm:block hidden'/>Your Cloud Infrastructure.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Whether it's AWS, Azure, on-premises Kubernetes clusters, 
        or GCP, we streamline cloud management, enhance monitoring, 
        and optimize costs to ensure smooth and efficient operations 
        across all your services..
        </p>
      </div>
      <div className={layout.sectionImg}>
        <img
          src={card}
          alt='card'
          className='w-[100%] h-[100%]'
        />
      </div>
    </section>
  )
}

export default CardDeal
