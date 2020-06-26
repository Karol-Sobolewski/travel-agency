import {connect} from 'react-redux';
import Trips from './Trips';
import {getFilteredTrips} from '../../../redux/tripsRedux';

const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  return{
    trips: getFilteredTrips(state, id),
  };
};

export default connect(mapStateToProps)(Trips);
