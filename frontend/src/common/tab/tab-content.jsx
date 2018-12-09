import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import If from '../operator/if';

class TabContent extends React.Component {
  render() {
    const selected = this.props.tab.selected === this.props.id
    const visible = this.props.tab.visible[this.props.id];

    return (
      <If test={this.props.id}>
        <div id={this.props.id}
          className={`tab-pane ${selected ? 'active' : ''}`}
        >
          {this.props.children}
        </div>
      </If>
    );
  }
}

const mapStateToProps = state => ({ tab: state.tabHeader });

export default connect(mapStateToProps)(TabContent);