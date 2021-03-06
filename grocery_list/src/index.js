import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css';
import App from './components/App';

import PropTypes from 'prop-types';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {groceryApp} from './reducers'
import {addGroceryItem,
        purchaseItem,
        setPurchasedFilter,
        setCategoriesFilter,
        setSorting} from './actions'

// const groceriesFromServer = [
//   {
//     name: 'beef',
//     description: 'shoulder cut for beef',
//     amount: '1kg',
//     category: 'meat',
//     purchased: false,
//     id: 1
//   }, {
//       name: 'eggs',
//       description: 'fresh free range eggs',
//       amount: '10',
//       category: 'poultry',
//       purchased: false,
//       id: 2
//   }, {
//     name: 'tomatoes',
//     description: 'fresh from local fields',
//     amount: '1kg',
//     category: 'vegetables',
//     purchased: false,
//     id: 3
//   }
// ]


let store = createStore(groceryApp)


// let unsubscribe = store.subscribe(() => {
//   console.log(store.getState())
// })
// console.log('initial state', store.getState())

store.dispatch(addGroceryItem({
  name: 'beef',
  description: 'shoulder cut for beef',
  amount: '1kg',
  category: 'meat',
  purchased: false
}))

store.dispatch(addGroceryItem({
  name: 'eggs',
  description: 'fresh free range eggs',
  amount: '10',
  category: 'poultry',
  purchased: false
}))

store.dispatch(addGroceryItem({
  name: 'tomatoes',
  description: 'fresh from local fields',
  amount: '1kg',
  category: 'vegetables',
  purchased: false
}))

store.dispatch(purchaseItem(1))

store.dispatch(setPurchasedFilter('SHOW_PURCHASED'))
store.dispatch(setPurchasedFilter('SHOW_NOT_PURCHASED'))
store.dispatch(setPurchasedFilter('SHOW_ALL_CATEGORIES'))

store.dispatch(setSorting('BY_NAME'))
store.dispatch(setSorting('BY_DESCRIPTION'))




// unsubscribe()



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
