import { connect } from 'react-redux';
import ItemView from '../components/ItemView';
import { addItemToCart } from '../actions';
import _ from 'lodash';

const mapStateToProps = (state, ownProps) => {
  const itemId = parseInt(ownProps.match.params.id, 10);
  const item = _.find(state.items, item => item.id === itemId);
  return {
    item
  };
};

const actionCreators = {
  addItemToCart
};

export default connect(mapStateToProps, actionCreators)(ItemView);
