import React, {
  Component
} from 'react';
import {
  withStyles
} from '@material-ui/core/styles';


class Button extends Component {
  render() {
    const props = this.props,
      classes = props.classes;
    return ( <
      div className = {
        classes.root
      } >
      <
      a onClick = {
        () => props.onClickButton()
      }
      href = {
        this.props.os === "ios" ?
        "itms-services://?action=download-manifest&amp;url=https://a01j1e839f7f.ru1.hana.ondemand.com/sberbank/sf/distr_storage/mfp6.plist" :
          "https://a01j1e839f7f.ru1.hana.ondemand.com/sberbank/sf/distr_storage/app-kurs.apk"
      } >
      <
      button className = {
        classes.button
      } > {
        props.text
      } < /button> <
      /a> <
      /div>
    );
  }
}

const styles = theme => ({
  root: {
    background: "url(img/blur.svg) center no-repeat",
    padding: 35,
    textAlign: "center",
    marginTop: 10
  },
  button: {
    borderRadius: "50px",
    width: 230,
    height: 72,
    border: "1px solid #246B84",
    background: "#E0FFF9",
    fontSize: 20,
    color: theme.palette.header,
    "&:focus": {
      outline: "none"
    }
  }
});

export default withStyles(styles)(Button);