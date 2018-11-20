import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import { getSummary } from './dashboard-actions';
import ContentHeader from '../common/template/content-header';
import Content from '../common/template/content';
import ValueBox from '../common/widget/value-box';
import Row from '../common/layout/row';

class Dashboard extends React.Component {
  componentDidMount(){
    this.props.getSummary();
  }

  render() {
    const { credit, debt } = this.props.summary;
    return (
      <div>
        <ContentHeader title='DashBoard' small='Version 1.0' />
        <Content>
          <Row>
            <ValueBox cols='12 4' color='green' value={`R$ ${credit}`} text='Total Credit' icon='bank' />
            <ValueBox cols='12 4' color='red' value={`R$ ${debt}`} text='Total Debits' icon='credit-card' />
            <ValueBox cols='12 4' color='blue' value={`R$ ${credit - debt}`} text='Consolidated Value' icon='money' />
          </Row>
        </Content>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  summary: state.dashboard.summary
});

const mapDispatchToProps = dispatch => bindActionCreators({ getSummary }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);