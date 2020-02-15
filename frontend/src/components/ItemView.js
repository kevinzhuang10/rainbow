import React from 'react';
import { Jumbotron } from 'react-bootstrap';

class ItemView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const { item } = this.props;
    return (
      <div>
        <Jumbotron>{item.name}</Jumbotron>
      </div>
    );
  }
}

export default ItemView;
