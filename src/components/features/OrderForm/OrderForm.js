import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import OrderOption from '../OrderOption/OrderOption';
import pricing from '../../../data/pricing.json';
import Button from '../../common/Button/Button';
import {formatPrice} from '../../../utils/formatPrice';
import {calculateTotal} from '../../../utils/calculateTotal';
import settings from '../../../data/settings';

const sendOrder = (options, tripCost, tripName, tripCountry) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const payload = {
    ...options,
    totalCost,
    tripName,
    tripCountry,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  fetch(url, fetchOptions)
    .then(function(response){
      return response.json();
    }).then(function(parsedResponse){
      console.log('parsedResponse', parsedResponse);
    });
};

const OrderForm = props => (
  <div>
    <Row>
      {pricing.map(option => (
        <Col md={4} key={option.id}>
          <OrderOption {...option} currentValue={props.options[option.id]} setOrderOption={props.setOrderOption}/>
          {console.log(props.options)}
        </Col>
      ))}
      <Col xs={12}>
        <OrderSummary tripCost={props.tripCost} options={props.options}/>
      </Col>
      <Button onClick={() => sendOrder(props.options, props.tripCost, props.tripName, props.tripCountry)}>Order now!</Button>
    </Row>
  </div>
);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  tripName: PropTypes.string,
  tripCountry: PropTypes.object,
  options: PropTypes.object,
  id: PropTypes.node,
  setOrderOption: PropTypes.func,

};

export default OrderForm;
