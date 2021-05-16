import React from 'react';
import styles from './Ordering.scss';

const OrderID = (value) => {
  const id = value.match.params.id;

  return(
    <div className={styles.component}>
      <h1>Order view ID {id}</h1>
    </div>
  );
}

export default OrderID;