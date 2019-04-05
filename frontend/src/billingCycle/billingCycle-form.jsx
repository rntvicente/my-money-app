import React from 'react';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ItemList from './item-list';
import LabelAndInput from '../common/form/labelAndInput';
import Summary from './summary';
import { init } from './billingCycle-actions';

const BILLING_CYCLE_FORM = 'billingCycleForm';

class BillingCycleForm extends React.Component {
  calculateSummary() {
    const sum = (accumulator, currentValue) => accumulator + currentValue;

    return {
      sumOfCredits: this.props.credits.map(item => +item.value || 0).reduce(sum),
      sumOfDebts: this.props.debts.map(item => +item.value || 0).reduce(sum)
    }
  }

  render() {
    const { handleSubmit, readOnly, credits, debts } = this.props;
    const { sumOfCredits, sumOfDebts } = this.calculateSummary();

    return (
      <form role='form' onSubmit={handleSubmit}>
        <div className='box-body'>
          <Field name='name' component={LabelAndInput} readOnly={readOnly}
            label='Name' cols='12 4' placeholder='John Smith' />
          <Field name='month' component={LabelAndInput} readOnly={readOnly}
            label='Month' cols='12 4' placeholder='5' />
          <Field name='year' component={LabelAndInput} readOnly={readOnly}
            label='Year' cols='12 4' placeholder='2018' />
          <Summary credit={sumOfCredits} debt={sumOfDebts} />
          <ItemList cols='12 6' list={credits} legendName='Credits' readOnly={readOnly} field='credits' />
          <ItemList cols='12 6' list={debts} legendName='Debts' readOnly={readOnly} field='debts' showStatus={true} />
        </div>

        <div className='box-footer'>
          <button type='submit' className={this.props.className}>{this.props.labelName}</button>
          <button type='button' onClick={this.props.init} className='btn btn-default'>cancelar</button>
        </div>
      </form>
    );
  }
}

BillingCycleForm = reduxForm({ form: BILLING_CYCLE_FORM, destroyOnUnmount: false })(BillingCycleForm);

const selector = formValueSelector(BILLING_CYCLE_FORM);
const mapStateToProps = state => ({
  credits: selector(state, 'credits'),
  debts: selector(state, 'debts')

});
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm);
