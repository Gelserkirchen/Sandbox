import React from 'react'
import styles from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div>
      <div className='banner'><img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages4.fanpop.com%2Fimage%2Fphotos%2F21800000%2FBanner-P-summer448-21813774-2560-1024.jpg&f=1&nofb=1" alt=""/></div>
      <div className={styles.avatar}><img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages.fineartamerica.com%2Fimages-medium-large%2Fclose-up-of-cat-face-daniele-carotenuto-photography.jpg&f=1&nofb=1" alt=""/></div>
      <div>
        ava + description
      </div>
    </div>
  )
}

export default ProfileInfo