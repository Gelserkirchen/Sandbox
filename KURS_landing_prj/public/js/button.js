// class Button extends Component {
//     render() {
//       const props = this.props,
//         classes = props.classes;
//       return ( <
//         div className = {
//           classes.root
//         } >
//         <
//         a onClick = {
//           () => props.onClickButton()
//         }
//         href = {
//           this.props.os === "ios" ?
//           "itms-services://?action=download-manifest&amp;url=https://a01j1e839f7f.ru1.hana.ondemand.com/sberbank/sf/distr_storage/mfp6.plist" :
//             "https://a01j1e839f7f.ru1.hana.ondemand.com/sberbank/sf/distr_storage/app-kurs.apk"
//         } >
//         <
//         button className = {
//           classes.button
//         } > {
//           props.text
//         } < /button> <
//         /a> <
//         /div>
//       );
//     }
//   }