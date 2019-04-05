import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, arrayInsert, arrayRemove } from 'redux-form';

import Grid from '../common/layout/grid';
import Input from '../common/form/input';
import If from '../common/operator/if';

const BILLING_CYCLE_FORM = 'billingCycleForm';

class ItemList extends React.Component {
  add(index, field, item = {}) {
    if (!this.props.readOnly) {
      this.props.arrayInsert(BILLING_CYCLE_FORM, field, index, item);
    }
  }

  remove(index, field) {
    if (!this.props.readOnly && this.props.list.length > 1) {
      this.props.arrayRemove(BILLING_CYCLE_FORM, field, index);
    }
  }

  renderRows() {
    const list = this.props.list || [];
    const { readOnly, field, showStatus } = this.props;

    return list.map((item, index) => (
      <tr key={index}>
        <td>
          <Field
            name={`${field}[${index}].name`}
            component={Input}
            placeholder='Name'
            readOnly={readOnly} />
        </td>
        <td>
          <Field
            name={`${field}[${index}].value`}
            component={Input}
            placeholder='Value'
            readOnly={readOnly} />
        </td>
        <If test={showStatus}>
          <td>
            <Field
              name={`${field}[${index}].status`}
              component={Input}
              placeholder='Status'
              readOnly={readOnly} />
          </td>
        </If>
        <td className='table-actions'>
          <button type='button' className='btn btn-success' onClick={() => this.add(index + 1, field)}>
            <i className='fa fa-plus'></i>
          </button>
          <button type='button' className='btn btn-warning' onClick={() => this.add(index + 1, field, item)}>
            <i className='fa fa-clone'></i>
          </button>
          <button type='button' className='btn btn-danger' onClick={() => this.remove(index, field)}>
            <i className='fa fa-trash-o'></i>
          </button>
        </td>
      </tr>
    ));
  }

  render() {
    return (
      <Grid cols={this.props.cols}>
        <fieldset>
          <legend>{this.props.legendName}</legend>
        </fieldset>
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Value</th>
              <If test={this.props.showStatus}>
                <th>Status</th>
              </If>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.renderRows()}
          </tbody>
        </table>
      </Grid>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ arrayInsert, arrayRemove }, dispatch);

export default connect(null, mapDispatchToProps)(ItemList)
