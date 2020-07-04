import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';

const OrderOptionText = ({currentValue, id, setOptionValue}) => (
  <div className={styles.number}>

    <input
      type='text'
      className={styles.pointer}
      value={currentValue}
      placeholder={id == 'name' ? 'your name' : 'contact'}
      onChange={event => setOptionValue(event.currentTarget.value)}
    />
  </div>
);

OrderOptionText.propTypes = {
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
  id: PropTypes.string,
};

export default OrderOptionText;
