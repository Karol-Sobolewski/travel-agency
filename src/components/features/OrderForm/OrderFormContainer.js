import {connect} from 'react-redux';
import OrderForm from './OrderForm';
import {getOrderOptions, setOrderOption} from '../../../redux/orderRedux';

const mapStateToProps = state => ({
  options: getOrderOptions(state),
  setOrderOption: setOrderOption(state),
});

export default connect(mapStateToProps)(OrderForm);
