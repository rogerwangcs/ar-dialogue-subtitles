import React, { Component } from 'react';

class DialogueBubble extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    const styles = {
      position: 'absolute',
      left: this.props.left,
      top: this.props.top,
      maxWidth: '400px',
      borderRadius: '20px',
      backgroundColor: 'black',
      opacity: 0.7,
    };

    return (
      <div className="dialogueBubble" style={styles}>
        <p style={{fontSize: '24px', color: 'white'}}>{this.props.dialogue}</p>
      </div>
    );
  }
}

export default DialogueBubble;