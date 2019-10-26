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
      displayUrl: this.props.urls,
      //displayUrl: [this.props.urls[0], this.props.urls[1], this.props.urls[2], this.props.urls[3], this.props.urls[4]],
      url: this.props.urls,
      popState: this.props.popState,
      setOpen: false,
      container : null,
      focus: 0,
    }

    // this.state.popState = this.state.popState.bind(this);
    

  };
  // handleOpen() {

  // };

  handleClose() {
    this.setState({setOpen: false});
  };
       render(){


    return (
    <div className={'cs-most-of-component'}>
    {console.log(this.state.url)}
    <div className={"gridList"}>
    <button className={'cs-grid'} key={0} onClick={() => {this.state.setOpen ? this.setState({setOpen: false}) : this.setState({setOpen: true}); this.setState({focus: 0})} }>
      <img className={'cs-icons cs-images'} src={this.props.urls}/>
    </button>
      {/* {this.props.urls.map((tile, i) => {
        if(i < 5){
          return(

          <button className={'cs-grid'} key={i} onClick={() => {this.state.setOpen ? this.setState({setOpen: false}) : this.setState({setOpen: true}); this.setState({focus: i})} }>
            <img className={'cs-icons cs-images'} src={tile} alt={tile}/>
          </button>
        )}
        
        })} */}
      {(() => {
        if(this.state.url.length > 4){
        return (      
        <a href="#" className={'cs-more'} onClick={() => {this.state.setOpen ? this.setState({setOpen: false}) : this.setState({setOpen: true})} }>
        + more
        </a>)}})()}

      </div>
      <button className={'cs-main-image-modal-button'} onClick={() => {this.state.setOpen ? this.setState({setOpen: false}) : this.setState({setOpen: true})} }>
        <img className={'cs-main-image-modal-button'} src={this.props.urls} />
      </button>
    {this.state.setOpen ? (

      <Portal
      container={this.state.container}
      >
        <div>

      <Modal
      className={"cs-modal-outer"}
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

// const style = {
//   root: {
//      flexGrow: 1,
//    },
//    paper: {
//      padding: theme.spacing(2),
//      textAlign: 'center',
//      color: theme.palette.text.secondary,
//    },
// }
    export default PopOut;