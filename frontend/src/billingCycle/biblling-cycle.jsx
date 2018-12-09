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
              <TabHeader label='List' icon='bars' target='tabList'/>
              <TabHeader label='Include' icon='plus' target='tabInclude'/>
              <TabHeader label='Update' icon='pencil' target='tabUpdate'/>
              <TabHeader label='Delete' icon='trash-o' target='tabDelete'/>
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