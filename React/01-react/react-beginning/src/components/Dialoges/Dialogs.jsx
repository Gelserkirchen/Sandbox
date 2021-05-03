import React from 'react'
import styles from './Dialogs.module.css'
import DialogItem from './DiaglogsItem/DialogsItem';
import Message from './Messages/MessagesItems';
import { reduxForm, Field, Form } from 'redux-form';


const Dialogs = (props) => {

  let state = props.dialogPages

  const dialogs = state.DialogsData.map(element => {
    return <DialogItem name={element.name} id={element.id}/>
  })

  const messages = state.MessagesData.map(element => {
    return <Message message={element.message}/>
  })

  const addMessageToDialoge = (text) => {
    props.addMessageToDialog(text.dialogesMessages)
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
        <DialogsReduxForm onSubmit={addMessageToDialoge}/>
      </div>
    </div>
  )
}

export default Dialogs

export const DialogComponent = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
        <div>
          <Field component={"textarea"} name={"dialogesMessages"} placeholder={"enter text here"}/>
        </div>
        <div>
          <button > Add Message </button>
        </div>
    </form>
  )
}

const DialogsReduxForm = reduxForm({form: 'dialogesMessages'})(DialogComponent)