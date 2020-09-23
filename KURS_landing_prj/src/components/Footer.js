import React, { Component } from 'react';
import {withStyles} from '@material-ui/core/styles';


class Footer extends Component {
  render() {
    const props = this.props,
      classes = props.classes;

    return (
      <footer className={classes.footer}>
          {/*<a href="tel:88007073277" className={classes.info}>*/}
            {/*Помощь по установке*/}
            {/*<br />*/}
            {/*8 800 707-32-77*/}
          {/*</a>*/}
          <div
            className={classes.footer__bottom_text} >
            <a className={classes.link} rel="noopener noreferrer" href={
              this.props.os === "ios"
              ? "https://a01j1e839f7f.ru1.hana.ondemand.com/sberbank/sf/distr_storage/kurs_guide_iOS.pdf"
              : "https://a01j1e839f7f.ru1.hana.ondemand.com/sberbank/sf/distr_storage/kurs_guide_Android.pdf"
            } target="_blank">
              Инструкция по установке (PDF)
            </a>
          </div>
      </footer>
    );
  }
}

const styles = theme => ({
  info: {
    background: theme.palette.text,
    borderRadius: "50px",
    textAlign: "center",
    color: "#23917C",
    width: 310,
    lineHeight: "27px",
    padding: "12px",
    fontWeight: 400,
    fontSize: 18,
    margin: "50px auto 30px auto",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.14)",
    display: "block",
    textDecoration: "none",
    transition: "all 200ms ease-in-out",
    "&:active": {
      opacity: 0.6
    }
  },
  footer__bottom_text: {
    textAlign: "center",
    color: "#000000",
    fontSize: 14,
    lineHeight: "28px",
    marginBottom: 30,
    marginTop: 18,
    display: "block",
    textDecoration: "none"
  },
  link: {
    color: "#000000",
    textDecoration: "none"
  }
});

export default withStyles(styles)(Footer);
