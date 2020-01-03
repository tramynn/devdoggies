import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Login from "../Login/Login";
import Register from "../Register/Register";

class Start extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Dialog onClose={this.props.closeStart} open={this.props.start}>
          <DialogContent>
            <ul>
              <li>New User?</li>
              <li>
                <button>
                  Register Here
                </button>
                <Register />
              </li>
              <li>
                <hr />
              </li>
              <li><Login /></li>
            </ul>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default Start;
