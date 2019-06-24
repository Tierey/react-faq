import updateBookList from './book-list';
import updateShoppingCart from './shopping-cart';

const reducer = (state, action) => {
  
  // if(action.type == "addNumber"){
  //   console.dir("addNumber : ",action.payload())
    
  // }
  return {
    bookList: updateBookList(state, action),
    shoppingCart: updateShoppingCart(state, action)
  };
};

export default reducer;
