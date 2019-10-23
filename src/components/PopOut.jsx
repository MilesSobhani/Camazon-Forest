import React from 'react';
//import ReactDOM from "react-dom";
import Portal from '@material-ui/core/Portal';
import Modal from '@material-ui/core/Modal';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';
import ModalClick from './ModalClick.jsx';




class PopOut extends React.Component {
  constructor(props) {
    super(props);
    this.elem = document.createElement('div');


    // this.handleOpen = this.handleOpen.bind(this);
    // this.handleClose = this.handleClose.bind(this);
    this.state = {
      url: this.props.urls,
      popState: this.props.popState,
      setOpen: false,
      container : null,
      focus: 0,
    }

    // this.state.popState = this.state.popState.bind(this);
    

  };
  handleOpen() {

  };

  handleClose() {
    this.setState({setOpen: false});
  };
       render(){


    return (
    <div className={'cs-most-of-component'}>
    
    <div className={"gridList"}>
      {this.props.urls.map((tile, i) => (
        <button className={'cs-grid'} key={i} onClick={() => {this.state.setOpen ? this.setState({setOpen: false}) : this.setState({setOpen: true}); this.setState({focus: i})} }>
          <img className={'cs-images'} src={tile} alt={tile}/>
        </button>
        
        ))}
      </div>
      <button onClick={() => {this.state.setOpen ? this.setState({setOpen: false}) : this.setState({setOpen: true})} }>
        <img src={this.props.urls[0]} />
      </button>
    {this.state.setOpen ? (

      <Portal
      container={this.state.container}
      >
        <div>

      <Modal
      className={"cs-modal"}
      // aria-labelledby="modal-title"
      // aria-describedby="modal-description"
      open={true}
      onClose={() => {this.setState({setOpen: false})}}
      >
      <ModalClick urls={this.props.urls} focus={this.state.focus}/>
      </Modal>
      </div>
    </Portal>
      ) : null}
    <div className={"portal"} ref={this.state.container}/>
    </div>
    );
  }
}

    export default PopOut;