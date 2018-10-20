import React, { PureComponent } from 'react';

class OutputBinaryToText extends PureComponent {


  renderBinaryToText = () => {
    let output = ''
    const array = this.props.output.match(/.{1,8}/g)
    for(var index in array) {
      const character = array[index]
      if(character.length < 8) {
        break;
      }
      output += String.fromCharCode(parseInt(character,2).toString(10));
    }
    return output
  }


  render() {
    return (
      <div className="output">
        Text: {this.renderBinaryToText()} <br />
      </div>
    );
  }
}

export default OutputBinaryToText

