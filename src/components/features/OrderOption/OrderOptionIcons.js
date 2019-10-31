import React from 'react';
import styles from './OrderOption.scss';
import Icon from '../../common/Icon/Icon';
import { formatPrice } from '../../../utils/formatPrice';

const OrderOptionIcons = ({ setOptionValue, values, required }) => (
  <div>
    {required ? (
      ''
    ) : (
      <div className={styles.icon} activeclassname={styles.iconActive}>
        <Icon name="times-circle">none</Icon>
      </div>
    )}
    {values.map(value => (
      <div
        className={styles.icon}
        key={value.id}
        activeclassname={styles.iconActive}
        onClick={event => setOptionValue(event.currentTarget.id)}
      >
        <Icon name={value.name}></Icon>
        {value.name}({formatPrice(value.price)})
      </div>
    ))}
  </div>
);
export default OrderOptionIcons;
