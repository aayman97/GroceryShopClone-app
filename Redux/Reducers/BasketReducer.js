
export const BasketReducer = (state = [],action) => {
   if(action.type === 'ADD_TO_BASKET'){
      return [...state,action.payload]
   }
   else if(action.type === 'CLEAR_BASKET'){
      return []
   }
   else {
       return state
   }
}