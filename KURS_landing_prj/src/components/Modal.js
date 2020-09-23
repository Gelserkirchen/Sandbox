import React, { Component } from 'react'
import Button from './Button';
import { withStyles } from '@material-ui/core/styles';
import Arrow from '@material-ui/icons/ArrowDownward';


class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      os: props.os
    };
  }
  render() {
    let content = null;
    let classes = this.props.classes;
    switch (this.state.os) {
      case "ios":
        content = [
          <h3 className={classes.content__title}>После установки нужно:</h3>,
          "Перейти в «Настройки»",
          "«Основные»",
          "«Профили и управление устройством»",
          "«Sberbank»",
          "Нажмите «Доверять Sberbank»",
          <h3 className={classes.content__title} >Установка началась, КУРС уже ждёт вас на домашнем экране</h3>
        ];
        break;
      case "android":
        content = [
          <h3 className={classes.content__title} >Устройство запросит подтвердить установку <br /> из ненадежного источника:</h3>,
          "Перейдите в «Настройки» во время установки",
          "Включите переключатель",
          "Нажмите на устройстве кнопку  «Назад»"
        ];
        break;
      default: console.log("Данная платформа не поддерживается...");
    }

    return (
      <div className={this.props.visible ? classes.modalVisible : classes.modelInvisible}>
        <img src="img/close.png" alt="" className="close-logo" onClick={() => this.props.onClose()}></img>
        <section className={classes.content__layer_top}>
          {content[0]}
          <div className={`${classes.content__list} ${this.state.os === "android" ? classes.android_list : ""}`}>
            {
              content.map((item, i) => {
                return (
                  i > 0
                    ? <div key={i} className={classes.content__item}>
                      {item}
                      {(item !== "Нажмите «Доверять Sberbank»") ?
                        <span className={classes.content__item__arrow}>
                          <Arrow />
                        </span>
                        : null
                      }
                    </div>
                    : null
                )
              })
            }
          </div>
          {/* <div className={classes.content__buttonBlock}>
            <Button os={this.state.os} text={"Установить"} />
          </div> */}
        </section>
      </div>
    )
  }
}

const styles = theme => ({
  modalVisible: {
    position: "absolute",
    backgroundColor: "#fff",
    boxShadow: "0 0 15px rgba(0,0,0,0.7)",
    borderRadius: "20px",
    margin: "0 10px",
    paddingBottom: 7
  },
  modelInvisible: {
    position: "absolute",
    opacity: 0,
    display: "none"
  },
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
    // color: theme.palette.text,
    color: "#000",
    textAlign: "center",
    fontWeight: "500",
    marginTop: "30",
    lineHeight: "20px",
    paddingBottom: 15,
    marginBottom: 0,
    padding: "0 25px"
  },
  content__list: {
    fontSize: 16,
    color: theme.palette.text,
    textAlign: "center",
    fontWeight: "300",
    width: 242,
    lineHeight: "22px",
    paddingBottom: 5
  },
  content__item: {
    color: "#000",
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
      paddingRight: 15,
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

export default withStyles(styles)(Modal);