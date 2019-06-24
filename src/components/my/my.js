import React from 'react';
import { connect } from 'react-redux';


import './my.css';

const My = (props) => {

 
  let {number,addNumber} = props
  console.log("component : ", number)
  return (
    <div className="shopping-cart-table">
      <button onClick={e=>addNumber(e)}>add number</button>
      {number.cnt}
      {
        number.array.map( (e,i) =>(
          <p key={i}> {e} </p>
        ))
      }
    </div>
  );
};

const mapStateToProps = (state) => {

  return {
    ...state
  };
};

let mapDispatchToProps = {
  
  addNumber:(e)=>({dispatch,state})=>{
      
    let { number } = state

    number.cnt++
    number.array.push(5)

    return state
  }

};
export let methods = {
  ...mapDispatchToProps
}

export default connect(mapStateToProps, mapDispatchToProps)(My);
