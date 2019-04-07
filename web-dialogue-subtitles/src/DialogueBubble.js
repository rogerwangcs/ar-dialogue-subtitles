import React, { Component } from "react";

class DialogueBubble extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const styles = {
      wrapper: {
        display: 'flex',
        width: '100vw',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: "absolute",
      },
      wrapper1: {
        display: 'flex',
        width: 640,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        position: "absolute",
      },
      wrapper2: {
        display: 'flex',
        width: 800,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        position: "absolute",
        zIndex: 200,
        left: this.props.left - 400,
        bottom: -this.props.top + 225,
      },
      div: {
        padding: 5,
        maxWidth: 800,
        borderRadius: "3px",
        border: "1px solid white",
        backgroundColor: "black",
        opacity: 0.7
      },
    };

    return (
      <div style={styles.wrapper}>
        <div style={styles.wrapper1}>
          {/* <div style={{position: 'absolute', top: this.props.top, left: this.props.left, width: 3, height: 3, background: 'red', zIndex: 100}}/> */}
          <div style={styles.wrapper2}>
            <div className="dialogueBubble" style={styles.div}>
              <p style={{ fontSize: "24px", color: "white", display: "inline" }}>
                {this.props.dialogue}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DialogueBubble;
