import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectTab, showTabs } from '../common/tab/tab-actions';
import { create, update } from './billingCycle-actions';

import ContentHeader from '../common/template/content-header';
import Content from '../common/template/content';
import Tabs from '../common/tab/tabs';
import TabsHeader from '../common/tab/tabs-header';
import TabHeader from '../common/tab/tab-header';
import TabsContent from '../common/tab/tabs-content';
import TabContent from '../common/tab/tab-content';

import List from './billingCycle-list';
import Form from './billingCycle-form';

class BillingCycle extends React.Component {
  componentWillMount() {
    this.props.selectTab('tabList');
    this.props.showTabs('tabList', 'tabCreate');
  }

  render() {
    return (
      <div>
        <ContentHeader title='Billing Cycles' small='Register' />
        <Content>
          <Tabs>
            <TabsHeader>
              <TabHeader label='List' icon='bars' target='tabList' />
              <TabHeader label='Create' icon='plus' target='tabCreate' />
              <TabHeader label='Update' icon='pencil' target='tabUpdate' />
              <TabHeader label='Delete' icon='trash-o' target='tabDelete' />
            </TabsHeader>
            <TabsContent>
              <TabContent id='tabList'>
                <List />
              </TabContent>
              <TabContent id='tabCreate'>
                <Form onSubmit={this.props.create} />
              </TabContent>
              <TabContent id='tabUpdate'>
                <Form onSubmit={this.props.update} />
              </TabContent>
              <TabContent id='tabDelete'>d</TabContent>
            </TabsContent>
          </Tabs>
        </Content>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  selectTab, showTabs, create, update
}, dispatch);

export default connect(null, mapDispatchToProps)(BillingCycle);