import React, { PureComponent } from 'react';

class DisplayTape extends PureComponent {



  render() {
    var tape = [];
  
    for (let i=0; i < this.props.squares.length; i++) {
      const classes = i === this.props.scanned ? 'blank-square tape-square scanned' : 'blank-square tape-square'
      tape.push(<div className={classes} key={i}>{this.props.squares[i]}</div>)
    }
    return (
      <div className="display-tape">
        {tape}
      </div>
    );
  }
}

export default DisplayTape;