import {createStore} from 'redux'
import { BasketReducer } from './Reducers/BasketReducer'

export const store = createStore(BasketReducer)

