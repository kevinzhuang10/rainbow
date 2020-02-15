import { connect } from 'react-redux';
import ItemView from '../components/ItemView';
import _ from 'lodash';

const mapStateToProps = (state, ownProps) => {
  const itemId = parseInt(ownProps.match.params.id, 10);
  const item = _.find(state.items, item => item.id === itemId);
  return {
    item
  };
};

export default connect(mapStateToProps)(ItemView);
