import React from 'react'
import styles from './Dialogs.module.css'
import DialogItem from './DiaglogsItem/DialogsItem';
import Message from './Messages/MessagesItems';
import {addMessage, updMessageText} from '../../redux/reducers/messagesReducer';

const Dialogs = (props) => {
  const propsData = props.dialogsState
  const valueFromState = propsData.MessageText

  const dialogs = propsData.DialogsData.map(element => {
    return <DialogItem name={element.name} id={element.id}/>
  })

  const messages = propsData.MessagesData.map(element => {
    return <Message message={element.message}/>
  })

  const addMessageToStore = () => {
    props.dispatch(addMessage())
  }

  const updTextInArea = (event) => {
    props.dispatch(updMessageText(event.target.value))
    event.target.value = propsData.MessageText
  }

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogItem}>
        {dialogs}
      </div>
      <div>
        <div className={styles.messages}>
          {messages}
        </div>
        <div>
          <textarea onChange={updTextInArea} value={valueFromState}/>
        </div>
        <div>
          <button onClick={ addMessageToStore }>Add Message</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs