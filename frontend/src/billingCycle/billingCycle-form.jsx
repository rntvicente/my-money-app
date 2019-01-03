import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import labelAndInput from '../common/form/labelAndInput';
import { init } from './billingCycle-actions';

class BillingCycleForm extends React.Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <form role='form' onSubmit={handleSubmit}>
        <div className='box-body'>
          <Field name='name' component={labelAndInput}
            label='Name' cols='12 4' placeholder='John Smith' />
          <Field name='month' component={labelAndInput}
            label='Month' cols='12 4' placeholder='5' />
          <Field name='year' component={labelAndInput}
            label='Year' cols='12 4' placeholder='2018' />
        </div>

        <div className='box-footer'>
          <button type='submit' className='btn btn-primary'>submit</button>
          <button type='button' onClick={this.props.init} className='btn btn-default'>cancelar</button>

        </div>
      </form>
    );
  }
}

BillingCycleForm = reduxForm({ form: 'billingcycleForm', destroyOnUnmount: false })(BillingCycleForm);

const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch);

export default connect(null, mapDispatchToProps)(BillingCycleForm);
