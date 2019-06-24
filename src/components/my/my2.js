import React from 'react';
import { connect } from 'react-redux';
import {methods} from './my'


import './my.css';
console.log("methods",methods)

const My2 = (props) => {

 
  let {number,addNumber} = props
  console.log("component : ", number)
  return (
    <div className="shopping-cart-table">
      <button onClick={e=>addNumber(e)}>add number 2</button>
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


export default connect(mapStateToProps, methods)(My2);
