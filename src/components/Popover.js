// @flow weak

import React, { PureComponent } from 'react';
import { Popover, PopoverHeader, PopoverBody } from 'reactstrap';

class circlePopOver extends PureComponent {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  }

  toggle() {
      this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  render() {
    return (
      <span>
        <button
              id={`footnote-${this.props.id}`}
              onClick={this.toggle}
              className="footnote"
              data-footnote-number={this.props.id}
              data-footnote-identifier={this.props.id}
              alt={`See Footnote ${this.props.id}`} rel="footnote">
                    <svg className="circle" viewBox="0 0 6 6" preserveAspectRatio="xMinYMin"><circle r="3" cx="3" cy="3" fill="#790009"></circle></svg>
                    <svg className="circle" viewBox="0 0 6 6" preserveAspectRatio="xMinYMin"><circle r="3" cx="3" cy="3" fill="#790009"></circle></svg>
                    <svg className="circle" viewBox="0 0 6 6" preserveAspectRatio="xMinYMin"><circle r="3" cx="3" cy="3" fill="#790009"></circle></svg>
                    </button>
            <Popover isOpen={this.state.popoverOpen}
              target={`footnote-${this.props.id}`} toggle={this.toggle}>
          <PopoverHeader>Footnote - {this.props.id}</PopoverHeader>
          <PopoverBody>{this.props.id} - {this.props.message}</PopoverBody>
        </Popover>
      </span>
    );
  }
}

export default circlePopOver