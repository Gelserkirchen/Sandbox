import React from 'react'
import styles from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';
import DialogItem from './DiaglogsItem/DialogsItem';
import Message from './Messages/MessagesItems';

const Dialogs = (props) => {

  const dialogs = props.dialogsData.map(element => {
    return <DialogItem name={element.name} id={element.id}/>
  })

  const messages = props.messagesData.map(element => {
    return <Message message={element.message}/>
  })

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogItem}>
        {dialogs}
      </div>
      <div className={styles.messages}>
        {messages}
      </div>
    </div>
  )
}

export default Dialogs