import React, { PureComponent } from 'react';

class ErrorsDisplay extends PureComponent {

  render() {
    return (
      <div style={{
          color:'red',
          backgroundColor: 'white',
          width: '100%',
          height:'100%', 
          position:'absolute',
          zIndex:25,
          textAlign: 'center',
          fontSize:50
        }}>
          <p style={{
            position: 'absolute',
            top: "50%",
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}>
            ERROR IN CONFIGURATION TABLE<br />
            {this.props.error}
            <a onClick={this.props.reset} className={'btn btn-primary'}>Reset</a>
          </p>

        </div>
    );
  }
}

export default ErrorsDisplay

