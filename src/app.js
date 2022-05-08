import {
  Component
} from 'react';

import './app.scss';
// import('./assets/icons/remixicon.css')
// import 'taro-ui/dist/style/components/button.scss'


class App extends Component {
  render() {
    return this.props.children
  }
}


export default App
