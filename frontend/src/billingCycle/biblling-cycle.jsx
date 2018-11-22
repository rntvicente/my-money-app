import React from 'react';

import ContentHeader from '../common/template/content-header';
import Content from '../common/template/content';
import Tabs from '../common/tab/tabs';
import TabsHeader from '../common/tab/tabs-header';
import TabHeader from '../common/tab/tab-header';
import TabsContent from '../common/tab/tabs-content';

class BillingCycle extends React.Component {
  render() {
    return (
      <div>
        <ContentHeader title='Billing Cycles' small='Register' />
        <Content>
          <Tabs>
            <TabsHeader>
              <TabHeader target='List' icon='bars' label='tabList'/>
              <TabHeader target='Include' icon='plus' label='tabInclude'/>
              <TabHeader target='Update' icon='pencil' label='tabUpdate'/>
              <TabHeader target='Delete' icon='trash-o' label='tabDelete'/>
            </TabsHeader>
            <TabsContent>

            </TabsContent>
          </Tabs>
        </Content>
      </div>
    );
  }
}

export default BillingCycle;