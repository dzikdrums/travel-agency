import React from 'react';
import styles from './OrderOption.scss';

const OrderOptionText = ({ setOptionValue }) => (
  <div className={styles.number}>
    <input
      onChange={event => setOptionValue(event.currentTarget.value)}
      className={styles.inputSmall}
      type="text"
    />
  </div>
);

export default OrderOptionText;
