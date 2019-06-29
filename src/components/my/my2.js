import React from 'react';
import { connect } from 'react-redux';
import numbers from '../../store/modules/number'

import './my.css';

export default connect(state=>state, numbers.methods)(

  ( { number:{ cnt, array }, addNumber } ) => (

      <div className="shopping-cart-table">
        <button onClick={e=>addNumber(e)}>add number</button>
        {cnt}
        {
          array.map( (e,i) =>(
            <p key={i}> {e} </p>
          ))
        }
      </div>

));
