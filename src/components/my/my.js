import React from 'react';
import { connect } from 'react-redux';


import './my.css';

const My = ({ items, addNumber }) => {


  return (
    <div className="shopping-cart-table">
      <button onClick={e=>addNumber(e)}>add number</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state
  };
};

let mapDispatchToProps = {
  
  addNumber:(e)=>(context)=>{
    console.log("addNumber")
 
    console.log("e: ",e.target)
    console.log("e: ",context)
    

  }
};

function toActions(object){

  // for (const key in object) {
  //   if (object.hasOwnProperty(key)) {
  //     const element = object[key];
  //     object[key] = ()=>({
  //       type:key.toString(),
  //       payload:element
  //     })
  //   }
  // }
  
  return object
}

mapDispatchToProps = toActions(mapDispatchToProps)

export default connect(mapStateToProps, mapDispatchToProps)(My);
