import updateBookList from './book-list';
import updateShoppingCart from './shopping-cart';



function setState({payload},initial){
  if(!payload) return initial
  
  return {...initial,...{payload}}
}
function require_modules(obj) {
  let modules = {};
  obj.keys().forEach(fileName => {
      const componentConfig = obj(fileName)
      fileName = fileName.replace("./","").replace(".js","")
      modules[fileName]=(componentConfig.default.state || componentConfig.state)
  })
  return modules;
}
let modules = require_modules(require.context('../store/modules', true, /[A-Za-z]\w+\.js$/))
 
const reducer = (state, action) => {
  

  if(action.type === "thunk") return action.payload
  
  let store = {}
  for (const key in modules) {
    if (modules.hasOwnProperty(key)) {
      const element = modules[key];
      store[key] = {...store,...element}
    }
  }
  for (const key in store) {
    if (store.hasOwnProperty(key)) {
      const element = store[key];
      store[key]=setState(action,element)
    }
  }

  return {
    bookList     : updateBookList     (state, action),
    shoppingCart : updateShoppingCart (state, action),
    ...store
  };
};

export default reducer;
