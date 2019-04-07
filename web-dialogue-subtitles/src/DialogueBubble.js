import React, { Component } from "react";

class DialogueBubble extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const styles = {
      position: "absolute",
      left: this.props.left,
      top: this.props.top,
      padding: "5px",
      maxWidth: "800px",
      borderRadius: "15px",
      backgroundColor: "black",
      opacity: 0.7x
    };

    return (
      <div>
        <div style={{ width: "1000px" }}>
          <div className="dialogueBubble" style={styles}>
            <p style={{ fontSize: "24px", color: "white", display: "inline" }}>
              {this.props.dialogue}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default DialogueBubble;
