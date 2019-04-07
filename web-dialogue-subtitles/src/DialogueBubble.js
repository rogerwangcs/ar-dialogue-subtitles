import React, { Component } from "react";

class DialogueBubble extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const styles = {
      position: "absolute",
      zIndex: 2,
      left: this.props.left + 500,
      top: this.props.top - 200,
      padding: "5px",
      maxWidth: "800px",
      borderRadius: "15px",
      backgroundColor: "black",
      opacity: 0.7
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
