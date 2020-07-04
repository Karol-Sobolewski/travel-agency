import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import OrderOption from '../OrderOption/OrderOption';
import pricing from '../../../data/pricing.json';
import {setOrderOption} from '../../../redux/orderRedux';

const OrderForm = props => (
  <div>
    <Row>
      {pricing.map(option => (
        <Col md={4} key={option.id}>
          <OrderOption {...option} currentValue={props.options[option.id]} setOrderOption={setOrderOption}/>
        </Col>
      ))}
      <Col xs={12}>
        <OrderSummary tripCost={props.tripCost} options={props.options}/>
      </Col>
    </Row>
  </div>
);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  id: PropTypes.node,
};

export default OrderForm;
