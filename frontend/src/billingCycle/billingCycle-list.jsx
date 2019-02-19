import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getList, showTab } from './billingCycle-actions';
import Button from '../common/button/button';

class BillingCycleList extends React.Component {
  componentWillMount() {
    this.props.getList();
  }

  renderRows() {
    const list = this.props.list || [];

    return list.map(item => (
      <tr key={item._id}>
        <td>{item.name}</td>
        <td>{item.month}</td>
        <td>{item.year}</td>
        <td>
          <Button classButton='warning' icon='pencil' handleClick={() => this.props.showTab('tabUpdate', item)} />
          <Button classButton='danger' icon='trash-o' handleClick={() => this.props.showTab('tabDelete', item)} />
        </td>
      </tr>
    ));
  }

  render() {
    return (
      <div>
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Month</th>
              <th>Year</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {this.renderRows()}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapToStateToProps = state => ({
  list: state.billingCycle.list
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getList, showTab
}, dispatch);

export default connect(mapToStateToProps, mapDispatchToProps)(BillingCycleList);
