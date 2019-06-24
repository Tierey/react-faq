import updateBookList from './book-list';
import updateShoppingCart from './shopping-cart';



function setNumber(action){
  if(!action.payload) return {
    cnt:0,
    array:[]
  }
  return {cnt:action.payload.number.cnt, array : action.payload.number.array}
}

const reducer = (state, action) => {
  

  if(action.type == "thunk") return action.payload
  

  return {
    bookList     : updateBookList     (state, action),
    shoppingCart : updateShoppingCart (state, action),
    number       : setNumber(action)
  };
};

export default reducer;
