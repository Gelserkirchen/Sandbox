// // Liskov substitution principle
//
// class Person {
//   access() {
//     console.log('You have an access')
//   }
// }
//
// class Member extends Person {
//   access() {
//     console.log('You have access')
//   }
// }
//
// class Guest extends Person {
//   isGuess = true
// }
//
// class Frontend extends Member {
//   canCreateFrontend() {
//
//   }
// }
//
// class Backend extends Guest {
//   canCreateBackend() {
//
//   }
// }
//
// class PersonFromDifferentCompany extends Guest {
//   access() {
//     throw new Error('You do not have access')
//   }
// }
//
// function openSecretDoor(person) {
//   person.access()
// }
//
// openSecretDoor(new Frontend())
// openSecretDoor(new Backend())
// // openSecretDoor(new PersonFromDifferentCompany())

class Component {
  render() {
    return `<div>Component</div>`
  }
}

class HeaderComponent extends Component {
  onInit() {}
}

class FooterComponent extends Component {
  afterInit() {}
}

function renderComponent(component) {
  console.log(component.render())
}

renderComponent(new HeaderComponent())
renderComponent(new FooterComponent())