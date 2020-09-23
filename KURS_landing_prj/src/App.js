import React, { Component } from 'react';
import device from 'current-device'
import { withStyles } from '@material-ui/core/styles';

import Header from './components/Header';
import Modal from './components/Modal';
import ButtonC from './components/Button'
import Footer from "./components/Footer";
import { Button } from '@material-ui/core';

const blocks = [
  { text: "Запрос и согласование отсутствий", icon: "img/block_ico_1.svg" },
  { text: "Просмотр задач для согласования и подписания", icon: "img/block_ico_2.svg" },
  { text: "Запрос справок", icon: "img/block_ico_3.svg" },
  { text: "Расчетный листок", icon: "img/block_ico_4.svg" },
  { text: "Управление замещениями", icon: "img/zamesheniya.png", width: "70%" },
  { text: "Согласование командировок и отчёта по представительским расходам", icon: "img/block_ico_6.svg" },
  { text: "Структура Sbergile", icon: "img/tree.png", width: "70%" },
  { text: "Справочник по сотрудникам и уведомления о днях рождения", icon: "img/lookup.png", width: "90%" },
  { text: "Push-уведомления о новой задаче или запросе", icon: "img/block_ico_5.svg" },
  { text: "Ознакомление с приказами на отсутствия", icon: "img/signature.png", width: "70%" }
];

const next = [
  "Дополнительные услуги по сервисам «Отсутствия» и «Справки»",
  "Согласование заявок на переводы, изменения трудового договора",
  "Оформление декрета или отпуска по уходу за ребенком",
  "Оформление заявок на работу в выходной день",
  "Изменение персональных данных"
];

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      os: device.os,
      modalOpened: false
    };

    window.onresize = () => {
      this.setState({ os: device.os });
    }
  }

  getPlatphormContent = (os, classes) => {
    const versionBlock = <h3 className={classes.content__title} >{this.state.os === "ios" ? "iOS 11 и новее" : "Android 5.0 и новее"}</h3>;
    return (
      <section className={classes.content__layer_top}>
        <div className={classes.content__buttonBlock}>
          <Modal os={this.state.os} visible={this.state.modalOpened} onClose={() => this.setState({ modalOpened: false })} />
          <div className={classes.buttonWrapper}>
            <ButtonC os={this.state.os} text={"Установить"} onClickButton={() => this.setState({ modalOpened: true })} />
            {versionBlock}
          </div>
        </div>
      </section>
    )
  };

  render() {
    const props = this.props,
      classes = props.classes;
    return (
      <div className={classes.root} onClick={this.onClickOut}>
        <Header />
        <main className={classes.content}>
          {
            this.getPlatphormContent(this.state.os, classes)
          }
          <section className={classes.content__layer_middle}>
            <h3 className={classes.content__title_bold}>Доступно уже сейчас <span /></h3>
            <div className={classes.content__blocksList}>
              {
                blocks.map((item, i) => {
                  return (
                    <div key={i} className={classes.content__block}>
                      <div>
                        <img src={item.icon} alt="" width={item.width} />
                      </div>
                      <span>{item.text}</span>
                    </div>
                  )
                })
              }
            </div>
            <h3 className={`${classes.content__title_bold} ${classes.type2}`}>Наши планы<span /></h3>
            <div className={classes.listNext}>
              {
                next.map((item, i) => {
                  return (
                    <div key={i} className={classes.content__nextItem}>
                      <div />
                      <span>{item}</span>
                    </div>
                  )
                })
              }
            </div>
          </section>
          <section className={classes.content__layer_bottom}>
            <span>Если у вас возникли вопросы по установке или использованию, то создайте обращение в ДРУГ: </span>
            <span>Программное обеспечение / Системы SAP / Мобильное приложение КУРС</span>
          </section>
          <Footer os={this.state.os} />
        </main>
      </div>
    );
  }
}

const styles = theme => ({
  root: {
    width: "100%"
  },
  content: {
    maxWidth: "414px",
    margin: "auto"
  },
  content__layer_top: {
    display: "flex",
    justifyContent: "center",
    margin: 'auto',
    flexWrap: 'wrap'
  },
  content__layer_middle: {
    margin: 'auto',
    padding: "0 20px"
  },
  content__title: {
    fontSize: 16,
    marginTop: -30,
    color: theme.palette.text,
    textAlign: "center",
    fontWeight: "500",
    lineHeight: "20px",
    paddingBottom: 5,
    marginBottom: 0
  },
  buttonDown: {
    borderRadius: "50px",
    width: 230,
    height: 72,
    border: "1px solid #246B84",
    background: "#E0FFF9",
    fontSize: 20,
    color: theme.palette.header,
    "&:focus": {
      outline: "none"
    },
    "&:active": {
      opacity: 0.6
    }
  },
  buttonWrapper: {
    background: "url(img/blur.svg) center no-repeat",
    padding: "35px 0",
    textAlign: "center",
    marginTop: -30,
    "&:h3": {
      margin: 0
    }
  },
  content__list: {
    fontSize: 16,
    color: theme.palette.text,
    textAlign: "center",
    fontWeight: "300",
    width: 242,
    lineHeight: "22px"
  },
  content__item: {
    "&:last-child $content__item__arrow": {
      display: "none",
    },
  },
  content__item__arrow: {
    margin: "10px 0 5px 0",
    display: "block",
    "& svg": {
      fill: "#3BAABA!important",
    }
  },
  android_list: {
    width: 332
  },
  content__buttonBlock: {
    width: "100%",
    background: "url(img/content_btn_bg.svg) center no-repeat",
    marginTop: -25
  },
  content__title_bold: {
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "30px",
    marginTop: -5,
    fontSize: 20,
    display: "flex",
    color: theme.palette.text,
    "& span": {
      display: "block",
      width: 28,
      marginTop: -3,
      marginLeft: 15,
      height: 28,
      background: "url(img/thumbs-up.svg) center no-repeat"
    },
    "&$type2 span": {
      background: "url(img/strategy.svg) center no-repeat",
      marginTop: 0,
    }
  },
  type2: {
    marginTop: 78,
  },
  content__blocksList: {},
  content__block: {
    background: "#FFFFFF",
    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.12)",
    borderRadius: 14,
    display: "flex",
    alignContent: "center",
    padding: "12px 18px",
    marginBottom: 20,
    "& div": {
      paddingRight: 10,
      width: 40,
      display: "block",
      marginTop: 3
    },
    "& span": {
      margin: "auto 0",
      width: "calc(100% - 50px)",
      display: "block",
    }
  },
  listNext: {},
  content__nextItem: {
    display: "flex",
    fontWeight: 300,
    lineHeight: 'normal',
    fontSize: 14,
    flexWrap: 'wrap',
    marginBottom: 20,
    color: theme.palette.text,
    "& div": {
      width: 18,
      height: 18,
      marginRight: 15,
      borderRadius: "50%",
      marginTop: 1,
      background: "#fff url(img/circle_marker.svg) center no-repeat",
    },
    "& span": {
      width: "calc(100% - 33px)"
    }
  },
  content__layer_bottom: {
    padding: "30px 20px",
    background: "#23917C",
    marginTop: 35,
    color: "#fff",
    "& span:first-child": {
      fontWeight: 400,
      fontSize: 14,
      // paddingRight: 15,
      width: 305,
      display: "block"
    },
    "& span:last-child": {
      fontWeight: 300,
      fontSize: 14,
      display: "block",
      marginTop: 10
    },
  }
});

export default withStyles(styles)(App);
