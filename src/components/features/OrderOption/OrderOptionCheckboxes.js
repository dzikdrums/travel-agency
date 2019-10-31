import React from 'react';
import styles from './OrderOption.scss';

let currentValue = [];

const newValueSet = (currentValue, id, checked) => {
  if (checked) {
    return [...currentValue, id];
  } else {
    return currentValue.filter(value => value != id);
  }
};

const OrderOptionCheckboxes = ({ setOptionValue, values }) => (
  <div className={styles.checkboxes}>
    {values.map(value => (
      <label
        className={styles.icon}
        key={value.id}
        activeclassname={styles.iconActive}
        onClick={event => setOptionValue(event.currentTarget.id)}
      >
        <input
          type="checkbox"
          value={value.id}
          onChange={event =>
            setOptionValue(
              newValueSet(currentValue, value.id, event.currentTarget.checked),
            )
          }
        ></input>
        {value.name}__{value.price}
      </label>
    ))}
  </div>
);
export default OrderOptionCheckboxes;
