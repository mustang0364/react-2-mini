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
      allowEdit: true,
    };
    this.updateColor = this.updateColor.bind(this);
    this.updateFamily = this.updateFamily.bind(this);
    this.updatedSize = this.updatedSize.bind(this)
    
  }

  updateColor(val) {
    this.setState({
      fontColor: val,
    })
  }

  updateSize(val){
    this.setState({
      fontSize:val,
    })
  }
      

  updateFamily(val){
    this.setState({
      fontFamily:val,
    })
  }

  updateEditStatus(val){
    this.setStatus({
      allowEdit:val,
    })
  }

  render() {
    return (
      <div>
        <div className="headerBar">
          <EditToggle />
          <ColorChanger  fontColor={this.state.fontColor} />
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
