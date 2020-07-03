import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';

const OrderOption = props => (
  <div className={styles.component}>
    <h3 className={styles.title}>{props.name}</h3>
  </div>
);

OrderOption.propTypes = {
  name: PropTypes.node,
};

export default OrderOption;
