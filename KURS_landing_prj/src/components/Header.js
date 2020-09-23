import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';


class Header extends Component {
  render() {
    const props = this.props,
      classes = props.classes;

    return (
      <div className={classes.header}>
        <div className={classes.header__inner}>
          <div className={classes.header__logo}>
            <img src="img/logo.svg" alt="" />
          </div>
          <div className={classes.header__title}>
            Основные сервисы в одном приложении КУРС
          </div>
        </div>
      </div>
    );
  }
}

const styles = theme => ({
  header: {
    height: 130,
    display: "flex",
    background: theme.palette.header,
    borderBottom: `1px solid ${theme.palette.separator}`
  },
  header__logo: {
    paddingTop: 30,
    paddingLeft: 20
  },
  header__title: {
    paddingTop: 25,
    marginLeft: 30,
    fontWeight: 600,
    lineHeight: "26px",
    color: theme.palette.titles,
    fontSize: 20,
    paddingRight: 10
  },
  header__inner: {
    maxWidth: 414,
    display: "flex",
    height: "100%",
    margin: "auto",
    boxSizing: "border-box"
  }
});

export default withStyles(styles)(Header);
