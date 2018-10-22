// @flow weak

import React, { PureComponent } from 'react';
import ReactTooltip from 'react-tooltip'

class Popover extends PureComponent {

  render() {
    return (
      <span>
        <button data-tip data-event='click' 
              data-for={`footnote${this.props.id}`} 
              className="footnote" id="fnref:1" 
              data-footnote-number={this.props.id} 
              data-footnote-identifier={this.props.id}
              alt={`See Footnote ${this.props.id}`} rel="footnote"> 
                    <svg className="circle" viewBox="0 0 6 6" preserveAspectRatio="xMinYMin"><circle r="3" cx="3" cy="3" fill="#790009"></circle></svg> 
                    <svg className="circle" viewBox="0 0 6 6" preserveAspectRatio="xMinYMin"><circle r="3" cx="3" cy="3" fill="#790009"></circle></svg> 
                    <svg className="circle" viewBox="0 0 6 6" preserveAspectRatio="xMinYMin"><circle r="3" cx="3" cy="3" fill="#790009"></circle></svg> 
                    </button>
           <ReactTooltip className={'tooltip-theme'} id={`footnote${this.props.id}`} type='error' effect='solid' globalEventOff='click'>
                <ul>
                  <li>{this.props.id} - {this.props.message}</li>
                </ul>
          </ReactTooltip>
      </span>
    );
  }
}

export default Popover