# React-Native-Redux

/**1. install libray 
*- react-redux 
*- redux
*2. create simple redux store 
*/

import {createStore} from 'redux';

const initializeValue = {
  value: 0
}

const reducer = (state = initializeValue, action ) => {
  if (action.type === 'UP') return {value : state.value + 1};
  if (action.type === 'DOWN') return {value: state.value - 1};
  return state;
}};

const store = createStore (reducer);

/**
*3. integrate redux store into React app
*/

import {Provider} from 'react-redux';

export default class ReduxDemo extends Component {
  render () {
    return (
      <Provider store={store} >
        <App/>
      </Provider>
    )
  }
}

/**
*4. Use state in store redux to render react component
*/

import {connect} from 'react-redux';

class App extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.myValue}</Text>
      </View>
    )
  }
}


function mapStateToProps (state) {
  return {myValue: state.value};
}

export default connect(mapStateToProps)(App);

/**
*5. Dispatch action from components
*/

onButtonPressed() {
  this.props.dispatch({type: 'UP'})
}
