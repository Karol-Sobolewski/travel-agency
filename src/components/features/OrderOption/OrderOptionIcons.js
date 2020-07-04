import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import {formatPrice} from '../../../utils/formatPrice';
import Icon from '../../common/Icon/Icon';

const OrderOptionIcons = ({values, required, setOptionValue}) => (
  <div
    className={styles.component}
  >
    {required ? '' : (
      <div className={styles.icon}>
        <Icon name="times-circle">none</Icon>
      </div>
    )}
    {values.map(value => (
      <div className={styles.icon} key={value.id} onClick={() => setOptionValue(value.id)}><Icon name={value.icon}/>{value.name} ({formatPrice(value.price)})</div>
    ))}
  </div>
);
OrderOptionIcons.propTypes = {
  values: PropTypes.array,
  required: PropTypes.bool,
  setOptionValue: PropTypes.func,
};

export default OrderOptionIcons;
