import React, { Component } from 'react';

// Components
import EditToggle from './components/EditToggle';
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

class App extends Component {
  // constructor
  constructor() {
    super();

    this.state = {
      fontColor: 'green',
      fontSize: 36,
      fontFamily: 'courier',
      allowEdit: false,
    };
    this.updateColor = this.updateColor.bind(this);
  }

  updateColor(val) {
    this.setState({
      fontColor: val,
    })
  }

  // updateSize

  // updateFamily

  // updateEditStatus

  render() {
    return (
      <div>
        <div className="headerBar">
          <EditToggle />
          <ColorChanger allowEdit={this.state.allowEdit} update={this.updateColor} fontColor={this.state.fontColor} />
          <SizeChanger fontSize={this.state.fontSize} />
          <FamilyChanger fontFamily={this.state.fontFamily} />
        </div>
        <div className="textArea">
          <TextContainer
            fontSize={this.state.fontSize}
            fontFamily={this.state.fontFamily}
            fontColor={this.state.fontColor}
          />
        </div>
      </div>
    )
  }
}

export default App;
