import React from 'react';
import axios from 'axios';

import ContentHeader from '../common/template/content-header';
import Content from '../common/template/content';
import ValueBox from '../common/widget/value-box';
import Row from '../common/layout/row';

const url = 'http://localhost:3000/api';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { credit: 0, debt: 0 };
  }
  componentDidMount() {
    axios.get(`${url}/billingCycles/summary`)
      .then(res => this.setState(res.data));
  }

  render() {
    const { credit, debt } = this.state;
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

export default Dashboard;