import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core/styles";
import * as serviceWorker from './serviceWorker';
import device from 'current-device'

const myTheme = createMuiTheme({
  palette: {
    header: "#206178",
    titles: "#DCF5F1",
    separator: "rgba(220, 245, 241, 0.3)",
    text: "#fff",
    icons: "#3BAABA"
  }
});
ReactDOM.render(
  <MuiThemeProvider theme={myTheme}>
    {
      (device.os === "ios" || device.os === "android") && (device.type === 'mobile' || device.type === "tablet")
        ? <App/>
        : window.location.href = "desktop.html"
    }
  </MuiThemeProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
