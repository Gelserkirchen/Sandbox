import React from 'react'
import styles from './Dialogs.module.css'
import DialogItem from './DiaglogsItem/DialogsItem';
import Message from './Messages/MessagesItems';
import {addMessage, updMessageText} from '../../redux/reducers/messagesReducer';


const Dialogs = (props) => {

  let state = props.dialogPages
  const valueFromState = state.MessageText

  const dialogs = state.DialogsData.map(element => {
    return <DialogItem name={element.name} id={element.id}/>
  })

  const messages = state.MessagesData.map(element => {
    return <Message message={element.message}/>
  })

  const addMessageToStore = () => {
    props.addMessage()
  }

  const updTextInArea = (event) => {
    props.updMessageText(event.target.value)
    event.target.value = state.MessageText
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
          <textarea onChange={ updTextInArea } value={valueFromState}/>
        </div>
        <div>
          <button onClick={ addMessageToStore }> Add Message </button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs